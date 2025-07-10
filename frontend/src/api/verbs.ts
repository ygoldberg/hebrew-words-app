export async function fetchVerbs() {
  const API_URL = import.meta.env.VITE_API_URL;
  const response = await fetch(`${API_URL}/verbs`);
  if (!response.ok) throw new Error("Failed to fetch verbs");
  return await response.json();
}
