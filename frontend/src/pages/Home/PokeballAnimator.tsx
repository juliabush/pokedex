import { useRef, useState, useEffect } from "react";
import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { catchPokemon } from "../../api/backend";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";
import PokemonCard from "./PokemonCard";
import "./PokeballAnimator.css";
import { fireConfetti } from "../../utils/confetti";

import type { PokemonInspect, Phase } from "../../types/pokemon";

export default function PokeballAnimator({
  selectedPokemon,
  onCaught,
  resetSignal,
  caughtIds,
}: {
  selectedPokemon: string;
  onCaught: (pokemon: PokemonInspect) => void;
  resetSignal: number;
  caughtIds: Set<string>;
}) {
  const groupRef = useRef<THREE.Group | null>(null);
  const topRef = useRef<THREE.Mesh | null>(null);
  const cardRef = useRef<THREE.Mesh | null>(null);
  const revealedRef = useRef(false);

  const [phase, setPhase] = useState<Phase>("idle");
  const [caught, setCaught] = useState(false);
  const [message, setMessage] = useState("");
  const [cardProgress, setCardProgress] = useState(0);
  const [cardData, setCardData] = useState<PokemonInspect | null>(null);

  useEffect(() => {
    revealedRef.current = false;
    setPhase("idle");
    setCaught(false);
    setMessage("");
    setCardProgress(0);
    setCardData(null);

    if (groupRef.current) {
      groupRef.current.rotation.set(0, 0, 0);
      groupRef.current.position.set(0, 0, 0);
    }

    if (topRef.current) {
      topRef.current.rotation.x = 0;
    }

    if (cardRef.current) {
      cardRef.current.position.set(0, 0, -8);
      cardRef.current.scale.setScalar(0.2);
    }
  }, [resetSignal]);

  useEffect(() => {
    if (phase !== "shaking") return;

    const t = setTimeout(() => {
      setPhase(caught ? "opening" : "idle");
    }, 1500);

    return () => clearTimeout(t);
  }, [phase, caught]);

  useEffect(() => {
    if (phase !== "opening") return;
    if (!caught) return;
    if (!cardData) return;
    if (revealedRef.current) return;
    if (cardProgress < 1) return;

    revealedRef.current = true;

    fireConfetti();

    if (!caughtIds.has(cardData.id)) {
      onCaught(cardData);
    }
  }, [phase, cardProgress, cardData, caught, onCaught, caughtIds]);

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

      cardRef.current.position.z = THREE.MathUtils.lerp(-8, 9, cardProgress);
      cardRef.current.position.y = THREE.MathUtils.lerp(-1, 2, cardProgress);
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
    revealedRef.current = false;
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

          if (caughtIds.has(selectedPokemon)) {
            setMessage("Choose a different Pokémon!");
            return;
          }

          setMessage("");
          setPhase("shaking");
          handleCatch();
        }}
      >
        <PokeballModel topRef={topRef} />
        <PokemonCard
          ref={cardRef}
          position={[0, 0, -8]}
          scale={0.2}
          pokemon={cardData}
          phase={phase}
        />
      </group>
    </>
  );
}
