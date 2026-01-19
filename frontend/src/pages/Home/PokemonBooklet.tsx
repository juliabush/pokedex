import { useState } from "react";
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
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="booklet-hamburger"
        onClick={() => setOpen((o) => !o)}
        aria-label="Toggle Pokémon menu"
      >
        ☰
      </button>

      <div
        className={`booklet-overlay ${open ? "open" : ""}`}
        onClick={() => setOpen(false)}
      >
        <div className="booklet-panel" onClick={(e) => e.stopPropagation()}>
          <div className="booklet-header">
            <h3>Pokémon</h3>
            <button onClick={() => setOpen(false)}>✕</button>
          </div>

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
                  onClick={() => {
                    onSelect(p.id);
                    setOpen(false);
                  }}
                >
                  <img src={p.icon} alt={p.name} />
                  <span>{p.name}</span>
                  {isDisabled && <span className="x">✕</span>}
                </button>
              );
            })}
          </div>

          <ResetButton onReset={onReset} />
        </div>
      </div>

      <div className="booklet-desktop">
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
                <img src={p.icon} alt={p.name} />
                <span>{p.name}</span>
                {isDisabled && <span className="x">✕</span>}
              </button>
            );
          })}
        </div>

        <ResetButton onReset={onReset} />
      </div>
    </>
  );
}
