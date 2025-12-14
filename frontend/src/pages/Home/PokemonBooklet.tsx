import "./PokemonBooklet.css";
import type { Pokemon } from "../../types";

type Props = {
  pokemon: Pokemon[];
  selected: string;
  onSelect: (id: string) => void;
  disabled: Set<string>;
};

export default function PokemonBooklet({
  pokemon,
  selected,
  onSelect,
  disabled,
}: Props) {
  return (
    <div className="booklet">
      {pokemon.map((p) => {
        const isDisabled = disabled.has(p.id);

        return (
          <button
            key={p.id}
            className={[
              p.id === selected ? "active" : "",
              isDisabled ? "disabled" : "",
            ].join(" ")}
            disabled={isDisabled}
            onClick={() => onSelect(p.id)}
          >
            <img src={p.icon} />
            <span>{p.name}</span>
            {isDisabled && <span className="x">✕</span>}
          </button>
        );
      })}
    </div>
  );
}
