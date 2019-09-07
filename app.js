const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;







const getInfo = async(direccion) => {

    try {
        let coords = await lugar.getLugarLatLng(argv.direccion);

        let temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${direccion} es de ${temp}`;
        //console.log(`El clima de ${direccion} es de ${temp}`);

    } catch (error) {
        //throw new Error(`No se pudo determinar el clima de ${direccion}`);
        return `No se pudo determinar el clima de ${direccion}`;
    }



    //el clima de  es de 
    // no se pudo determinar el clima de 

}


getInfo(argv.direccion).then(console.log).catch(console.log);