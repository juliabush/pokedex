import "./CompletionModal.css";

type Props = {
  onClose: () => void;
};

export default function CompletionModal({ onClose }: Props) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Collection Complete</h2>
        <p>You’ve caught 3 Pokémon.</p>

        <button onClick={onClose}>Continue</button>
      </div>
    </div>
  );
}
