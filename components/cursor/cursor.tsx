export function Cursor({ x, y }) {
  return (
    <img
      style={{
        position: "absolute",
        zIndex: 50,
        transform: `translate(${x}px, ${y}px)`,
      }}
      src="/assets/cursor.svg"
    />
  );
}
