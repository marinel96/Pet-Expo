export const fetchCats = async () => {
  const response = await fetch('https://freetestapi.com/api/v1/cats');
  const data = await response.json();
  return data;
};
