import { forwardRef, type RefObject } from "react";
import * as THREE from "three";

type Props = {
  topRef: React.RefObject<THREE.Mesh>;
};

const PokeballModel = forwardRef<THREE.Group, Props>(({ topRef }, groupRef) => {
  return (
    <group ref={groupRef}>
      {/* Red half of Pokeball */}
      <mesh rotation={[Math.PI, 0, 0]} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* White half of Pokeball */}
      <mesh ref={topRef} scale={[1.02, 1.02, 1.02]}>
        <sphereGeometry args={[5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Black band around the center of Pokeball */}
      <mesh scale={[1.02, 1.02, 1.02]}>
        <cylinderGeometry args={[5.05, 5.05, 1.4, 64]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Center button of Pokeball */}
      <mesh position={[0, 0, 5.25]} rotation={[Math.PI / 2, 0, 0]}>
        <cylinderGeometry args={[0.6, 0.6, 0.05, 64]} />
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
});

export default PokeballModel;
