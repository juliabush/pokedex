import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import PokeballModel from "./PokeballModel";

type Phase = "idle" | "shaking" | "opening";

export default function PokeballAnimator() {
  const groupRef = useef<THREE.Group | null>(null);
  const topRef = useRef<THREE.Mesh | null>(null);

  const [phase, setPhase] = useState<Phase>("idle");

  useEffect(() => {
    if (phase !== "shaking") return;

    const t = setTimeout(() => {
      setPhase("opening");
    }, 1500);

    return () => clearTimeout(t);
  }, [phase]);
}
