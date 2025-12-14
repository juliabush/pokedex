import "./PokemonBooklet.css";

type Pokemon = {
  id: string;
  name: string;
  icon: string;
};

type Props = {
  pokemon: Pokemon[];
  selected: string;
  onSelect: (id: string) => void;
};

export default function PokemonBooklet({ pokemon, selected, onSelect }: Props) {
  return (
    <div className="booklet">
      {pokemon.map((p) => (
        <button
          key={p.id}
          className={p.id === selected ? "active" : ""}
          onClick={() => onSelect(p.id)}
        >
          <img src={p.icon} />
          <span>{p.name}</span>
        </button>
      ))}
    </div>
  );
}
