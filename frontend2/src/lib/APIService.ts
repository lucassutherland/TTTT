import type { LeaderboardData } from "./types";

export async function validateLoginCode(code: string) {
  return true;
  // if success store code in localstorage
}

export async function fetchLeaderboardData(): Promise<LeaderboardData> {
  return [
    {
      name: "Bob",
      score: 123,
    },
    {
      name: "Lyra",
      score: 126,
    },
    {
      name: "Lee scoresby",
      score: 126000,
    },
  ];
}
