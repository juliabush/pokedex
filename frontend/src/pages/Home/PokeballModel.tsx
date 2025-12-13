export default function PokeballModel() {
  return (
    <group>
      {/* Red top half of Pokeball */}
      <mesh rotation={[Math.PI, 0, 0]}>
        <sphereGeometry args={[5, 32, 32, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial color="red" />
      </mesh>
    </group>
  );
}
