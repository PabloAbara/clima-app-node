const axios = require('axios');

const getClima = async(lat,lon) => {
  // console.log(encodedURL);
  const encodedLon = encodeURI(lon);
  const encodedLat = encodeURI(lat);

  const respuesta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${encodedLat}&lon=${encodedLon}&appid=b9f0bf67eb44a8f74a79e2af19e80f17&units=metric`);


  return respuesta.data.main.temp;

  // if (respuesta.cod === 400){
  //   throw new ERROR(`No hay resultados para ${dir}`);
  // }

  // const data = respuesta.data;
  // const direccion = data.name;
  // const lat = data.coord.lat;
  // const lng = data.coord.lon;
}

module.exports = {
  getClima
}
