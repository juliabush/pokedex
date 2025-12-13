import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

function Torus() {
  const mesh = useRef<THREE.Mesh | null>(null);

  useFrame(() => {
    if (!mesh.current) return;
    mesh.current.rotation.x += 0.01;
    mesh.current.rotation.y += 0.005;
    mesh.current.rotation.z += 0.01;
  });

  return (
    <mesh ref={mesh}>
      <torusGeometry args={[10, 3, 16, 100]} />
      <meshStandardMaterial color={0xff6347} />
    </mesh>
  );
}

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [-3, 0, 30], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Torus />
    </Canvas>
  );
}
