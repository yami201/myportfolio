import { Html } from "@react-three/drei";

export default function UiLabel({ children, position = [0, 0, 0] }) {
  return (
    <Html center position={position} transform>
    </Html>
  );
}
