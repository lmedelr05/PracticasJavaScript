const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "6b1a06c4658fd8bd6263ad3b2b63e7e6";

const inputCity = document.querySelector('#city');
const btnBuscar = document.querySelector('#btnBuscar');
const fetchApi = url => fetch(url).then(response => response.json());

async function getClima(lat, lon) {
    const url = `${UrlBase}lat=${lat}&lon=${lon}&appid=${ApiKey}`;
    console.log(url);
    const clima = await fetchApi(url);
    console.log(clima);
    const GradosC = clima.main.temp - 273.15;
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = `Temperatura: ${GradosC.toFixed(2)}°C`;
    if (GradosC >= 25) {
        document.body.style.backgroundColor = 'red';
    } else if (GradosC >= 10) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue';
    }
}

navigator.geolocation.getCurrentPosition(
    position => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        getClima(lat, lon);
    }
);

async function getClimaByCity(city) {
    const url = `${UrlBase}q=${city}&appid=${ApiKey}`;
    const clima = await fetchApi(url);
    console.log(clima);
    const GradosC = clima.main.temp - 273.15;
    document.querySelector('#left h2').innerHTML = clima.name;
    document.querySelector('#left h3').innerHTML = `Temperatura: ${GradosC.toFixed(2)}°C`;
    if (GradosC >= 20) {
        document.body.style.backgroundColor = 'red';
    } else if (GradosC >= 10) {
        document.body.style.backgroundColor = 'green';
    } else {
        document.body.style.backgroundColor = 'blue';
    }
}

btnBuscar.addEventListener('click', () => {
    const city = inputCity.value;
    if (city) {
        getClimaByCity(city);
    }
});