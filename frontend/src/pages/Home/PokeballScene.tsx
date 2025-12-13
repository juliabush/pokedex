import { Canvas } from "@react-three/fiber";
import PokeballAnimator from "./PokeballAnimator";

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <PokeballAnimator />
    </Canvas>
  );
}
