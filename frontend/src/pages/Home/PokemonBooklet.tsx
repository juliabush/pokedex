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
