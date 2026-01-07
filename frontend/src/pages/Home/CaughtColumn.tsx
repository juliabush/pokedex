import type { PokemonInspect } from "../../types/pokemon";
import "./CaughtColumn.css";
import "./PokemonCard.css";

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
              <div className="card-attack">
                <span className="attack-name">—</span>
                <span className="attack-damage">—</span>
              </div>
            </div>

            <div className="card-footer">
              <div>{pokemon.types.join(", ")}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
