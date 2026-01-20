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

          {showInstructions && (
            <div className="instructions-box">
              <p>
                Select a Pokemon to from the avaliable list. To catch this
                Pokemon, you must click on the 3D ball. Dont be discouraged if
                it takes a few clicks to catch a given Pokemon. Pokemon you have
                already caught cannot be selected again. To get the ball back to
                its original state, press the red reset button.
              </p>
            </div>
          )}

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
        <div className="instructions-box">
          <p>
            Select a Pokemon to from the avaliable list. <br></br>To catch this
            Pokemon, you must click on the 3D ball. <br></br>Dont be discouraged
            if it takes a few clicks to catch a given Pokemon. <br></br> Pokemon
            you have already caught cannot be selected again. <br></br> To get
            the ball back to its original state, press the red reset button.
          </p>
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
