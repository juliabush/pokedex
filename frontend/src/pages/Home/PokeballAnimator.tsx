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

  useFrame(() => {
    if (!groupRef.current) return;

    const time = Date.now();

    if (phase === "shaking") {
      groupRef.current.rotation.z = Math.sin(time * 0.02) * 0.3;
      groupRef.current.position.x = Math.sin(time * 0.05) * 0.5;
    }

    if (phase === "opening" && topRef.current) {
      topRef.current.rotation.x = THREE.MathUtils.lerp(
        topef.current.rotation.x,
        -Math.PI / 2,
        0.1
      );
    }

    if (phase === "idle") {
      groupRef.current.rotation.z = 0;
      groupRef.current.position.x = 0;
    }
  });

  return (
    <group
      ref={groupRef}
      onClick={() => phase === "idle" && setPhase("shaking")}
    >
      <PokeballModel topRef={topRef} />
    </group>
  );
}
