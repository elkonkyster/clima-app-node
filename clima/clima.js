const axios = require('axios');

const getClima = async(lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9826cb36ce5fafdd706f0f63bbce1c88&units=metric`);

    return resp.data.main.temp;
}


module.exports = {
    getClima
}