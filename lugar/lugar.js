const axios = require('axios');

const getLugarLatLng = async(dir) => {
  const encodedURL = encodeURI(dir);
  // console.log(encodedURL);

  const instance = axios.create({
    baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encodedURL}`,
    headers: {'X-RapidAPI-Key': 'a1e245c428msh05c3b8fd00ccf74p165ae5jsn6ddd15a355a7'}
  });

  const respuesta = await instance.get();

  if (respuesta.cod === 400){
    throw new ERROR(`No hay resultados para ${dir}`);
  }

  const data = respuesta.data;
  const direccion = data.name;
  const lat = data.coord.lat;
  const lng = data.coord.lon;

  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}
