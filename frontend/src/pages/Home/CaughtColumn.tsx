import type { PokemonInspect } from "../../types/pokemon";
import "./CaughtColumn.css";

type Props = {
  caught: PokemonInspect[];
};

export default function CaughtColumn({ caught }: Props) {
  return (
    <div className="caught-column">
      {caught.slice(0, 3).map((pokemon, index) => (
        <div key={pokemon.name} className="caught-card enter">
          <div className="caught-card-name">{pokemon.name}</div>
        </div>
      ))}
    </div>
  );
}
