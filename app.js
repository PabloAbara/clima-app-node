const lugar = require('./lugar/lugar.js');
const clima = require('./clima/clima.js');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'Dirección de la ciudad para obtener el clima',
    demand: true
  }
}).argv;




  // const getInfo = (direccion) => {
  //   lugar.getLugarLatLng(direccion)
  //     .then(coord => {
  //       clima.getClima(coord.lat,coord.lng)
  //         .then(resp=> console.log(`El clima de ${direccion} es ${resp}`))
  //         .catch(err=> {
  //           console.log(`No se pudo determinar el clima de ${direccion}`);
  //       });
  //     })
  //     .catch(err=>{
  //       console.log(`No se pudo determinar el clima de ${direccion}`);
  //     });
  // }

  const getInfo = async (direccion) => {
    try {
      const coord = await lugar.getLugarLatLng(direccion);
      const temp = await clima.getClima(coord.lat,coord.lng);
      // console.log(temp);
      return `El clima de ${coord.direccion} es de ${temp}`;
    } catch (e) {
      return `No se pudo determinar el clima de ${direccion} por ${e}`;
    }
  }

  getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
