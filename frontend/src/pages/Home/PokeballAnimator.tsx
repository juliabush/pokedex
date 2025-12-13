import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { catchPokemon } from "../../api/backend";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";

type Phase = "idle" | "shaking" | "opening";

export default function PokeballAnimator() {
  const groupRef = useRef<THREE.Group | null>(null);
  const topRef = useRef<THREE.Mesh | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");

  const [caught, setCaught] = useState(false);

  useEffect(() => {
    if (!caught) return;
    setPhase("opening");
  }, [caught]);

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

      if (topRef.current.rotation.x < -Math.PI / 2 + 0.01) {
        setPhase("idle");
      }
    }

    if (phase === "idle") {
      groupRef.current.rotation.z = 0;
      groupRef.current.position.x = 0;
    }
  });

  async function handleCatch() {
    const data = await catchPokemon("pikachu");
    if (data.caught) setCaught(true);
  }

  return (
    <group
      ref={groupRef}
      onClick={() => {
        if (phase !== "idle") return;
        setPhase("shaking");
        handleCatch();
      }}
    >
      <PokeballModel topRef={topRef} />
    </group>
  );
}
