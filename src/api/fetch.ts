const API_BASE_URL = "https://hp-api.onrender.com/api/characters";
const SPELLS_API_URL = "https://hp-api.onrender.com/api/spells";

export const fetchSpells = async () => {
  try {
    const response = await fetch(SPELLS_API_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching spells data:", error);
    throw error;
  }
};

export const fetchCharacters = async () => {
  try {
    const response = await fetch(API_BASE_URL);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching characters data:", error);
    throw error;
  }
};
