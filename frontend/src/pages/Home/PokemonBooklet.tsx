import "./PokemonBooklet.css";
import type { Pokemon } from "../../types/pokemon";
import ResetButton from "./ResetButton";

type Props = {
  pokemon: Pokemon[];
  selected: string;
  onSelect: (id: string) => void;
  disabled: Set<string>;
  onReset: () => void;
};

export default function PokemonBooklet({
  pokemon,
  selected,
  onSelect,
  disabled,
  onReset,
}: Props) {
  return (
    <div className="booklet">
      <div className="booklet-list">
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

      <ResetButton onReset={onReset} />
    </div>
  );
}
