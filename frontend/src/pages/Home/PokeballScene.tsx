import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, usestate } from "react";
import * as THREE from "three";

function Pokeball() {
  const mesh = useRef<THREE.Mesh | null>(null);
  const [shaking, setShaking] = useState(false);

  useFrame(() => {
    if (!mesh.current) return;

    if (shaking) {
      mesh.current.rotation.z = Math.sin(Date.now() * 0.02) * 0.3;
    } else {
      mesh.current.rotation.z = 0;
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
    <Canvas camera={{ position: [-3, 0, 30], fov: 75 }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} />
      <Torus />
    </Canvas>
  );
}
