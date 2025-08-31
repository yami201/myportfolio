import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Stats } from "@react-three/drei";
import useStore from "../../hooks/useStore.js";
import Blob from "./Blob.jsx";
import Rings from "./Rings.jsx";
import gsap from "gsap";
import UiLabel from "./UiLabel.jsx";
import Floor from "./Floor.jsx";
import { useMediaQuery } from "react-responsive";

export default function Experience() {
    const dirLightRef = useRef();
    const {onStart, ringsVisible, UiShown} = useStore((state) => state);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const [showBloom, setShowBloom] = useState(true);

    const handleHover = (hovered) => {
        if (dirLightRef.current) {
        gsap.to(dirLightRef.current, {
            intensity: hovered ? 3.5 : 2,
            duration: 0.5,
            ease: "sine.inOut"
        });
        }
    };

    useEffect(
        () => {
            if (isMobile) {
                setShowBloom(!UiShown);
            } else {
                setShowBloom(true);
            }
        }, [isMobile, UiShown]
    );

    console.log(showBloom, isMobile, UiShown);

    const handleClick = () => {
        onStart();
    };

    return (
        <Canvas
            camera={{ position: [0, 4, 8], fov: 20 }}
            dpr={[1, 2]}
            className='fixed top-0 left-0 w-full h-full'
        >
            <color attach="background" args={["#000000"]} />
            <Stats showPanel={0} />
            <ambientLight intensity={1} />
            <directionalLight 
                position={[0, 2, 4]} 
                intensity={showBloom ? 2 : 4} 
                ref={dirLightRef}
            />

            <group>
                <group 
                    onClick={handleClick}
                    onPointerOver={handleHover.bind(this, true)}
                    onPointerOut={handleHover.bind(this, false)}
                >
                    <Blob />
                    <UiLabel handleClick={handleClick} />
                </group>
                {
                    ringsVisible && <Rings />
                }
                <Floor />
            </group>

                <EffectComposer disableNormalPass>
                    <Bloom intensity={showBloom ? 1 : 0.1} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
                </EffectComposer>
        </Canvas>
    );
}
