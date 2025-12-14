import { Canvas } from "@react-three/fiber";
import PokeballAnimator from "./PokeballAnimator";
import { Environment, Sky } from "@react-three/drei";

export default function PokeballScene({
  selectedPokemon,
}: {
  selectedPokemon: string;
}) {
  return (
    <Canvas camera={{ position: [0, 0, 20], fov: 75 }}>
      <Sky
        sunPosition={[100, 20, 100]}
        turbidity={2}
        rayleigh={5}
        mieCoefficient={0.003}
        mieDirectionalG={0.7}
      />

      <ambientLight intensity={0.2} />
      <pointLight position={[6, 6, 10]} intensity={1.2} />
      <Environment preset="studio" />

      <PokeballAnimator selectedPokemon={selectedPokemon} />
    </Canvas>
  );
}
