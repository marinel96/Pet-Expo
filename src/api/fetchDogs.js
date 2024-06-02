export const fetchDogs = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/dogs');
  const data = await response.json();
  return data;
};
