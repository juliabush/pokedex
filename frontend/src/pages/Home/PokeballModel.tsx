export default function PokeballModel() {
  return (
    <group>
      {/* Red top half of Pokeball */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
      {/* Bottom white half of Pokeball */}
      <mesh>
        <sphereGeometry args={[5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="white" />
      </mesh>
      {/* Black band around the center of Pokeball */}
      <mesh>
        <cylinderGeometry args={[5.05, 5.05, 0.4, 64]} />
        <meshStandardMaterial color="black" />
      </mesh>
    </group>
  );
}
