import { forwardRef } from "react";
import * as THREE from "three";

type Props = {
  position?: [number, number, number];
  scale?: number;
};

const PokemonCard = forwardRef<THREE.Mesh, Props>(
  ({ position = [0, 0, 0], scale = 1 }, ref) => {
    return (
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[3, 4, 0.1]} />
        <meshStandardMaterial color="white" />
      </mesh>
    );
  }
);

export default PokemonCard;
