import {
	getAllCharacteres,
	getAllPlanets,
	getAllVehicles,
	getCharacter,
	getPlanet,
	getVehicle,
  } from "../services/enpoints";
  
  const getState = ({ getStore, getActions, setStore }) => {
	return {
	  store: {
		characteres: [],
		planets: [],
		vehicles: [],
		favorites: [],
	  },
	  actions: {
		loadCharacteresData: async () => {
		  const local = JSON.parse(localStorage.getItem("store"));
		  if (local?.characteres) {
			setStore(local);
			return;
		  }
		  const res = await getAllCharacteres();
		  if (res?.message === "ok") {
			const resPro = res.results.map((character) =>
			  getCharacter(character.uid)
			);
			const resAllData = await Promise.all(resPro);
			const propertiesArray = resAllData.map(
			  (item) => item?.result.properties
			);
			setStore({ ...getStore(), characteres: propertiesArray });
			localStorage.setItem("store", JSON.stringify(getStore()));
		  }
		},
		loadPlanetsData: async () => {
		  const local = JSON.parse(localStorage.getItem("store"));
		  if (local?.planets) {
			setStore(local);
			return;
		  }
		  const res = await getAllPlanets();
		  if (res?.message === "ok") {
			const resPro = res.results.map((planets) => getPlanet(planets.uid));
			const resAllData = await Promise.all(resPro);
			const propertiesArray = resAllData.map(
			  (item) => item?.result.properties
			);
			setStore({ ...getStore(), planets: propertiesArray });
			localStorage.setItem("store", JSON.stringify(getStore()));
		  }
		},
		loadVehicleData: async () => {
		  const local = JSON.parse(localStorage.getItem("store"));
		  if (local?.vehicles) {
			setStore(local);
			return;
		  }
		  const res = await getAllVehicles();
		  if (res?.message === "ok") {
			const resPro = res.results.map((vehicle) => getVehicle(vehicle.uid));
			const resAllData = await Promise.all(resPro);
			const propertiesArray = resAllData.map(
			  (item) => item?.result.properties
			);
			setStore({ ...getStore(), vehicles: propertiesArray });
			localStorage.setItem("store", JSON.stringify(getStore()));
		  }
		},
		addFavorites: (item) => {
		  setStore({
			...getStore(),
			favorites: [...getStore().favorites, item],
		  });
		},
		removeFavorites: (item) => {
		  setStore({
			...getStore(),
			favorites: getStore().favorites.filter((i) => i.name !== item.name),
		  });
		},
	  },
	};
  };
  
  export default getState;
  