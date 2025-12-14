import { forwardRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import "./PokemonCard.css";

type PokemonInspect = {
  found: true;
  name: string;
  height: number;
  weight: number;
  stats: { name: string; value: number }[];
  types: string[];
};

type Phase = "idle" | "shaking" | "opening";

type Props = {
  position?: [number, number, number];
  scale?: number;
  pokemon: PokemonInspect | null;
  phase: Phase;
};

const PokemonCard = forwardRef<THREE.Mesh, Props>(
  ({ position = [0, 0, 0], scale = 1, pokemon, phase }, ref) => {
    return (
      <mesh ref={ref} position={position} scale={scale}>
        <boxGeometry args={[4.5, 6, 0.15]} />
        <meshStandardMaterial color="white" />

        {pokemon?.found && (
          <Html center transform distanceFactor={10} occlude={false}>
            <div
              className="card"
              style={{ opacity: phase === "opening" ? 1 : 0 }}
            >
              <div className="card-header">
                <span className="card-name">{pokemon.name}</span>
                <span className="card-hp">HP</span>
              </div>

              <div className="card-image">
                <div className="image-placeholder" />
              </div>

              <div className="card-body">
                <div className="card-attack">
                  <span className="attack-name">Attack</span>
                  <span className="attack-damage">—</span>
                </div>
              </div>

              <div className="card-footer">
                <span className="card-type">{pokemon.types.join(", ")}</span>
              </div>
            </div>
          </Html>
        )}
      </mesh>
    );
  }
);

export default PokemonCard;
