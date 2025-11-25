import type { Character } from "../types/СharactersProps";

export const fetchCharacterById = async (
  id: string
): Promise<Character | null> => {
  try {
    const response = await fetch("https://hp-api.onrender.com/api/characters");
    if (!response.ok) {
      throw new Error("Network error");
    }

    const data: Character[] = await response.json();

    return data.find((char) => char.id === id) ?? null;
  } catch (error) {
    console.error("Error fetching character by id:", error);
    throw error;
  }
};
