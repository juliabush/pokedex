import { Canvas } from "@react-three/fiber";
import PokeballAnimator from "./PokeballAnimator";
import { Environment } from "@react-three/drei";

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [2, 1.5, 20], fov: 75 }}>
      <ambientLight intensity={0.2} />
      <pointLight position={[6, 6, 10]} intensity={1.2} />
      <Environment preset="studio" />

      <PokeballAnimator />
    </Canvas>
  );
}
