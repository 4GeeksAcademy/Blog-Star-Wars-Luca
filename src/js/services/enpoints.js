import { BASE_URL } from "./BASE_URL";

export const getAllCharacteres = async () => {
  return await BASE_URL("/people", "GET", {});
};

export const getCharacter = async (idCharacter) => {
  return await BASE_URL(`/people/${idCharacter}`, "GET", {});
};

export const getAllPlanets = async () => {
  return await BASE_URL("/planets", "GET", {});
};

export const getPlanet = async (idPlanet) => {
  return await BASE_URL(`/planets/${idPlanet}`, "GET", {});
};

export const getAllVehicles = async () => {
  return await BASE_URL("/vehicles", "GET", {});
};

export const getVehicle = async (idVehicle) => {
  return await BASE_URL(`/vehicles/${idVehicle}`, "GET", {});
};
