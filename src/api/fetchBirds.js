export const fetchBirds = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/birds');
  const data = await response.json();
  return data;
};