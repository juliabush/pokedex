import { useRef, useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { catchPokemon } from "../../api/backend";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";
import PokemonCard from "./PokemonCard";
import "./PokeballAnimator.css";

type Phase = "idle" | "shaking" | "opening";

export default function PokeballAnimator({
  selectedPokemon,
}: {
  selectedPokemon: string;
}) {
  const groupRef = useRef<THREE.Group | null>(null);
  const topRef = useRef<THREE.Mesh | null>(null);
  const cardRef = useRef<THREE.Mesh | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");
  const [caught, setCaught] = useState(false);
  const [message, setMessage] = useState("");
  const [cardProgress, setCardProgress] = useState(0);
  const [cardData, setCardData] = useState<any>(null);

  useEffect(() => {
    if (phase !== "shaking") return;

    const t = setTimeout(() => {
      if (caught) {
        setPhase("opening");
      } else {
        setPhase("idle");
      }
    }, 1500);

    return () => clearTimeout(t);
  }, [phase, caught]);

  useEffect(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = 0.0;
    groupRef.current.rotation.y = 0;
  }, []);

  useFrame(() => {
    if (!groupRef.current) return;

    const time = Date.now();

    if (phase === "shaking") {
      groupRef.current.rotation.z = Math.sin(time * 0.02) * 0.3;
      groupRef.current.position.x = Math.sin(time * 0.05) * 0.5;
    }

    if (phase === "opening" && topRef.current) {
      topRef.current.rotation.x = THREE.MathUtils.lerp(
        topRef.current.rotation.x,
        -Math.PI / 2,
        0.1
      );
    }

    if (phase === "opening" && cardRef.current) {
      setCardProgress((p) => Math.min(p + 0.02, 1));

      cardRef.current.position.z = THREE.MathUtils.lerp(4.5, 9, cardProgress);
      cardRef.current.position.y = THREE.MathUtils.lerp(0, 2, cardProgress);
      cardRef.current.scale.setScalar(
        THREE.MathUtils.lerp(0.2, 1, cardProgress)
      );
    }

    if (phase === "idle") {
      groupRef.current.rotation.z = 0;
      groupRef.current.position.x = 0;
    }
  });

  async function handleCatch() {
    const data = await catchPokemon(selectedPokemon);

    if (data.caught) {
      setCaught(true);
      setCardData(data.pokemon);
      setMessage("Caught");
    } else {
      setMessage(`${selectedPokemon} escaped! Try again`);
    }
  }

  return (
    <>
      {message && (
        <Html position={[0, 8, 0]} center>
          <div className="catch-message">{message}</div>
        </Html>
      )}

      <group
        ref={groupRef}
        onClick={() => {
          if (phase !== "idle") return;
          setMessage("");
          setCaught(false);
          setCardProgress(0);
          setPhase("shaking");
          handleCatch();
        }}
      >
        <PokeballModel topRef={topRef} />
        <PokemonCard
          ref={cardRef}
          position={[0, 0, 4.5]}
          scale={0.2}
          pokemon={cardData}
        />
      </group>
    </>
  );
}
