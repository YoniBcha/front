import { useFetch } from 'nuxt/app';

const API_URL = 'http://127.0.0.1:8000/api';

export const fetchCities = async () => {
  const { data } = await useFetch(`${API_URL}/city`);
  return data.value;
};

export const fetchSubcities = async (city_id) => {
  const { data } = await useFetch(`${API_URL}/subcity`, { params: { city_id } });
  return data.value;
};

export const fetchWoredas = async (subcity_id) => {
  const { data } = await useFetch(`${API_URL}/woreda`, { params: { subcity_id } });
  return data.value;
};

export const fetchKebeles = async (woreda_id) => {
  const { data } = await useFetch(`${API_URL}/kebele`, { params: { woreda_id } });
  return data.value;
};
