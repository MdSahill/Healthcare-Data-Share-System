// Minimal API service
export async function fetchRecords() {
  const res = await fetch('/records');
  return res.json();
}
