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

  const caughtIds = new Set(caughtPokemon.map((p) => p.name));

  return (
    <div className="home">
      <CaughtColumn caught={caughtPokemon} />

      <PokeballScene
        selectedPokemon={selectedPokemon}
        onCaught={(pokemon) => {
          setCaughtPokemon((prev) => {
            const next = [...prev, pokemon];
            if (next.length === 3) setShowModal(true);
            return next;
          });
        }}
      />

      <PokemonBooklet
        pokemon={POKEMON}
        selected={selectedPokemon}
        onSelect={setSelectedPokemon}
        disabled={caughtIds}
      />

      {showModal && <CompletionModal onClose={() => setShowModal(false)} />}
    </div>
  );
}
