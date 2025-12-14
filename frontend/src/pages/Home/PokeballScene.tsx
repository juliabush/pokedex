import { Canvas } from "@react-three/fiber";
import PokeballAnimator from "./PokeballAnimator";
import { Environment } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Background() {
  const texture = useLoader(THREE.TextureLoader, "/blue.jpg");
  return <primitive object={texture} attach="background" />;
}

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [2, 1.5, 20], fov: 75 }}>
      <Background />
      <ambientLight intensity={0.2} />
      <pointLight position={[6, 6, 10]} intensity={1.2} />
      <Environment preset="studio" />
      <PokeballAnimator />
    </Canvas>
  );
}
