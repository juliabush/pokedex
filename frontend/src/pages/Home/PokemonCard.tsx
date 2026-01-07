import { forwardRef } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import "./PokemonCard.css";
import type { PokemonInspect, Phase } from "../../types/pokemon";

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
                <span className="card-hp">
                  HP {pokemon.stats.find((s) => s.name === "hp")?.value ?? "—"}
                </span>
              </div>

              <div className="card-image">
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                  alt={pokemon.name}
                  className="pokemon-sprite"
                />
              </div>

              <div className="card-body">
                {pokemon.stats.map((stat) => (
                  <div key={stat.name} className="card-attack">
                    <span className="attack-name">{stat.name}</span>
                    <span className="attack-damage">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </Html>
        )}
      </mesh>
    );
  }
);

export default PokemonCard;
