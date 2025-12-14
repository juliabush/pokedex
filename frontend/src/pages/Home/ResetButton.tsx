import "./ResetButton.css";

type Props = {
  onReset: () => void;
};

export default function ResetButton({ onReset }: Props) {
  return (
    <button className="reset-button" onClick={onReset}>
      Reset
    </button>
  );
}
