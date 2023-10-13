const UrlBase = "https://api.openweathermap.org/data/2.5/weather?";
const ApiKey = "6b1a06c4658fd8bd6263ad3b2b63e7e6"   

const fetchapi = url => fetch(url).then(response => response.json());

;

navigator.geolocation.getCurrentPosition(
    position=>{
        const lat= position.coords.latitude;
        const lon= position.coords.longitude;
        getclima(lat,lon);
    }
);