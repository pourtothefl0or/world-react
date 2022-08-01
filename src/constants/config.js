const BASE_URL = 'https://restcountries.com/v2';
const ALL_COUNTRIES = `${BASE_URL}/all?fields=name,capital,flags,population,region`;
const searchByCountry = (name) => `${BASE_URL}/name/${name}`;
const filterByCode = (codes) => `${BASE_URL}/alpha?codes=${codes?.join(',')}`;

export { BASE_URL, ALL_COUNTRIES, searchByCountry,  filterByCode };
