export async function fetchVerbs() {
  const response = await fetch("http://localhost:8000/verbs");
  if (!response.ok) throw new Error("Failed to fetch verbs");
  return await response.json();
}
