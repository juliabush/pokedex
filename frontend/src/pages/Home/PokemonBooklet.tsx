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

function Instructions() {
  return (
    <div className="instructions-box">
      <div className="instructions-steps">
        <div className="step">
          <span>Select a Pokémon from the list</span>
        </div>
        <div className="step">
          <span>Click the 3D Pokéball to try catching it</span>
          <img
            src="/pokeball.jpg"
            style={{ width: "60px" }}
            alt="Pokeball Image"
          />
        </div>
        <div className="step">
          <span>Some Pokémon take multiple attempts</span>
        </div>
        <div className="step">
          <img
            src="/card.webp"
            style={{
              width: "60px",
              marginRight: "10px",
              marginBottom: "6px",
              marginTop: "6px",
              transform: "rotate(-10deg)",
            }}
            alt="Card Image"
          />
          <span>Caught Pokémon cannot be selected again</span>
        </div>
        <div className="step">
          <span>Use reset to restore the Pokéball</span>
        </div>
      </div>
    </div>
  );
}

export default function PokemonBooklet({
  pokemon,
  selected,
  onSelect,
  disabled,
  onReset,
}: Props) {
  const [open, setOpen] = useState(false);
  const [showInstructions, setShowInstructions] = useState(false);

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

          <button
            className="instructions-button"
            onClick={() => setShowInstructions((v) => !v)}
          >
            Instructions
          </button>

          {showInstructions && <Instructions />}

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
        <Instructions />

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
