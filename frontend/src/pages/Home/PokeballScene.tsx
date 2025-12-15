import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import PokeballAnimator from "./PokeballAnimator";
import type { PokemonInspect } from "../../types/pokemon";

export default function PokeballScene({
  selectedPokemon,
  onCaught,
  resetSignal,
  caughtIds,
}: {
  selectedPokemon: string;
  onCaught: (pokemon: PokemonInspect) => void;
  resetSignal: number;
  caughtIds: Set<string>;
}) {
  return (
    <Canvas shadows camera={{ position: [0, 2, 20], fov: 75 }}>
      <ambientLight intensity={0.25} />

      <directionalLight
        position={[10, 15, 10]}
        intensity={1}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      <pointLight position={[-6, 4, -8]} intensity={0.6} color="#ffffff" />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -4.5, 0]}
        receiveShadow
      >
        <planeGeometry args={[50, 50]} />
        <shadowMaterial opacity={0.25} />
      </mesh>

      <Environment preset="studio" />

      <PokeballAnimator
        selectedPokemon={selectedPokemon}
        onCaught={onCaught}
        resetSignal={resetSignal}
        caughtIds={caughtIds}
      />
    </Canvas>
  );
}
