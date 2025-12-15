import type { PokemonInspect } from "../../types/pokemon";
import "./CaughtColumn.css";

type Props = {
  caught: PokemonInspect[];
};

export default function CaughtColumn({ caught }: Props) {
  return (
    <div className="caught-column">
      {caught.slice(0, 3).map((pokemon) => (
        <div key={pokemon.name} className="caught-card enter">
          <div className="card mini">
            <div className="card-header">
              <span className="card-name">{pokemon.name}</span>
            </div>

            <div className="card-image">
              <div className="image-placeholder" />
            </div>

            <div className="card-footer">
              <span className="card-type">{pokemon.types.join(", ")}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
