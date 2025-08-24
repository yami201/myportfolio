import { Sparkles } from "@react-three/drei";
import useStore from "../../hooks/use-store";

export default function Particles() {
  const currentSection = useStore(state => state.currentSection);
  return (
    <Sparkles
      count={100}  
      size={currentSection === "intro" ? 1 : 2}       
      scale={[5, 1, 5]}
      speed={0.2}        
      color={currentSection === "intro" ? "#4473f5" : "white"}
    />
  );
}
