import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="text-white font-bold text-lg animate-pulse">
        Loading {progress.toFixed(0)}%
      </div>
    </Html>
  );
}
export default Loader;
