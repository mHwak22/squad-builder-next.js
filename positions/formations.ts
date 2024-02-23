interface Player {
  name: string;
  position: { x: number; y: number };
  // You can add more properties as needed
}

interface Formation {
  name: string;
  players: Player[];
}

export const formation442: Formation = {
  name: "4-3-2-1",
  players: [
    { name: "Player 1", position: { x: 100, y: 40 } },
    { name: "Player 2", position: { x: 200, y: 85 } },
    { name: "Player 3", position: { x: 10, y: 85 } },
    { name: "Player 4", position: { x: -30, y: 160 } },
    { name: "Player 5", position: { x: 100, y: 160 } },
    { name: "Player 6", position: { x: 230, y: 160 } },
    { name: "Player 7", position: { x: -100, y: 260 } },
    { name: "Player 8", position: { x: 40, y: 260 } },
    { name: "Player 9", position: { x: 180, y: 260 } },
    { name: "Player 10", position: { x: 300, y: 260 } },
    { name: "Player 11", position: { x: 100, y: 380 } },
  ],
};
