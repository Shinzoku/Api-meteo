const apiKey = 'YOUR_API_KEY'; // Remplace par ta clé API

async function getWeather() {
    const city = document.getElementById('cityInput').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === 200) {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <div id="elements-meteo">
                    <div class="element-meteo">
                        <h3><u>Températures</u></h3>
                        <p>Température: ${data.main.temp} °C</p>
                        <p>Ressenti: ${data.main.feels_like} °C</p>
                    </div>
                    <div class="element-meteo">
                        <h3><u>Conditions</u></h3>
                        <p>${data.weather[0].description}</p>
                    </div>
                    <div class="element-meteo">
                        <h3><u>Atmosphère</u></h3>
                        <p>Humidité: ${data.main.humidity} %</p>
                        <p>Pression: ${data.main.humidity} mbar</p>
                    </div>
                    <div class="element-meteo">
                        <h3><u>Vent</u></h3>
                        <p>Vitesse: ${data.wind.speed} m/s</p>
                        <p>Direction: ${data.wind.deg} °</p>
                        <p>Rafales: ${data.wind.gust} m/s</p>
                    </div>
                </div>
            `;
        } else {
            alert('Ville non trouvée');
        }
    } catch (error) {
        alert('Erreur de récupération des données');
    }
}