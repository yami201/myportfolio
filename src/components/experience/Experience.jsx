import { Canvas } from "@react-three/fiber";
import { useRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { Stats } from "@react-three/drei";
import useStore from "../../hooks/useStore.js";
import Blob from "./Blob.jsx";
import Rings from "./Rings.jsx";
import gsap from "gsap";
import UiLabel from "./UiLabel.jsx";
import Floor from "./Floor.jsx";

export default function Experience() {
    const dirLightRef = useRef();
    const {onStart, ringsVisible} = useStore((state) => state);

    const handleHover = (hovered) => {
        if (dirLightRef.current) {
        gsap.to(dirLightRef.current, {
            intensity: hovered ? 3.5 : 2,
            duration: 0.5,
            ease: "sine.inOut"
        });
        }
    };

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
            <ambientLight intensity={0.6} />
            <directionalLight 
                position={[0, 2, 4]} 
                intensity={2} 
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
                <Bloom intensity={1} luminanceThreshold={0.1} luminanceSmoothing={0.9} />
            </EffectComposer>
        </Canvas>
    );
}
