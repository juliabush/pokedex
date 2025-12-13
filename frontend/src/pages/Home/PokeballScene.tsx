import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";

function Pokeball() {
  const mesh = useRef<THREE.Mesh | null>(null);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (!shaking) return;

    const timer = setTimeout(() => {
      setShaking(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [shaking]);

  useFrame(() => {
    if (!mesh.current) return;

    if (shaking) {
      const d = Date.now();
      mesh.current.rotation.z = Math.sin(d * 0.02) * 0.3;
      mesh.current.position.x = Math.sin(d * 0.05) * 0.5;
    } else {
      mesh.current.rotation.z = 0;
      mesh.current.position.x = 0;
    }
  });

  return (
    <mesh ref={mesh} onClick={() => setShaking(true)}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color={0xff6347} />
    </mesh>
  );
}

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Pokeball />
    </Canvas>
  );
}
