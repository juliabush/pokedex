import { useState } from "react";
import "./Home.css";

import PokeballScene from "./PokeballScene";
import PokemonBooklet from "./PokemonBooklet";
import CaughtColumn from "./CaughtColumn";
import CompletionModal from "./CompletionModal";

import { POKEMON } from "../../data/pokemon";
import type { PokemonInspect } from "../../types/pokemon";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("pikachu");
  const [caughtPokemon, setCaughtPokemon] = useState<PokemonInspect[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [resetSignal, setResetSignal] = useState(0);

  const caughtIds = new Set(caughtPokemon.map((p) => p.name));

  function handleReset() {
    setResetSignal((v) => v + 1);
  }

  return (
    <div className="home">
      <CaughtColumn caught={caughtPokemon} />

      <PokeballScene
        selectedPokemon={selectedPokemon}
        resetSignal={resetSignal}
        caughtIds={caughtIds}
        onCaught={(pokemon) => {
          setCaughtPokemon((prev) => {
            const next = [...prev, pokemon];
            if (next.length === 3) {
              setTimeout(() => setShowModal(true), 0);
            }
            return next;
          });
        }}
      />

      <PokemonBooklet
        pokemon={POKEMON}
        selected={selectedPokemon}
        onSelect={setSelectedPokemon}
        disabled={caughtIds}
        onReset={handleReset}
      />

      {showModal && <CompletionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
