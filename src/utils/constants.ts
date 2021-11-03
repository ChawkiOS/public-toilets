export const BASE_URL =
  'https://download.data.grandlyon.com/ws/grandlyon/adr_voie_lieu.adrtoilettepublique_latest/all.json';

const initialPosition = { latitude: 45.764, longitude: 4.8357 };

export const initialRegion = {
  ...initialPosition,
  latitudeDelta: 0.015,
  longitudeDelta: 0.0121,
};

export const initialCamera = {
  zoom: 10,
  pitch: 0,
  heading: 0,
  altitude: 50000,
  center: initialPosition,
};
