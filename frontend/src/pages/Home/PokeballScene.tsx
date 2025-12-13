import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";

function Pokeball() {
  const group = useRef<THREE.Group | null>(null);
  const [shaking, setShaking] = useState(false);

  useEffect(() => {
    if (!shaking) return;

    const timer = setTimeout(() => {
      setShaking(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [shaking]);

  useFrame(() => {
    if (!group.current) return;

    if (shaking) {
      const d = Date.now();
      group.current.rotation.z = Math.sin(d * 0.02) * 0.3;
      group.current.position.x = Math.sin(d * 0.05) * 0.5;
    } else {
      group.current.rotation.z = 0;
      group.current.position.x = 0;
    }
  });

  return (
    <group ref={mesh} onClick={() => setShaking(true)}>
      <sphereGeometry args={[5, 32, 32]} />
      <meshStandardMaterial color={0xff6347} />
    </group>
  );
}

export default function PokeballScene() {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <PokeballModel />
    </Canvas>
  );
}
