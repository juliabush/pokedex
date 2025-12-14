import { useState } from "react";
import "./Home.css";
import PokeballScene from "./PokeballScene";
import PokemonBooklet from "./PokemonBooklet";
import { POKEMON } from "../../data/pokemon";

export default function Home() {
  const [selectedPokemon, setSelectedPokemon] = useState("pikachu");
  const [caughtPokemon, setCaughtPokemon] = useState<PokemonInspect[]>([]);

  return (
    <div className="home">
      <PokeballScene
        selectedPokemon={selectedPokemon}
        onCaught={(pokemon) => {
          setCaughtPokemon((prev) => [...prev, pokemon]);
        }}
      />

      <PokemonBooklet
        pokemon={POKEMON}
        selected={selectedPokemon}
        onSelect={setSelectedPokemon}
      />
    </div>
  );
}
