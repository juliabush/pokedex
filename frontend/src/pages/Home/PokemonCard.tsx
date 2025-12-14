import { forwardRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";

type PokemonInspect = {
  found: true;
  name: string;
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
  types: string[];
};

type Props = {
  position?: [number, number, number];
  scale?: number;
  pokemon: PokemonInspect | null;
};

const PokemonCard = forwardRef<THREE.Mesh, Props>(
  ({ position = [0, 0, 0], scale = 1, pokemon }, ref) => {
    return (
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[4.5, 6, 0.15]} />
        <meshStandardMaterial color="white" />

        {pokemon?.found && (
          <Html center transform>
            <div className="card">
              <h3>{pokemon.name}</h3>
              <div>{pokemon.types.join(", ")}</div>
            </div>
          </Html>
        )}
      </mesh>
    );
  }
);

export default PokemonCard;
