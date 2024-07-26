const apiKey = 'YOUR_API_KEY'; // Remplace par ta clé API

async function getWeather() {
    // Récupérer la valeur saisie par l'utilisateur dans le champ de texte
    const city = document.getElementById('cityInput').value;
    // Construire l'URL de l'API avec la ville saisie et la clé API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

    try {
        // Effectuer une requête fetch à l'URL de l'API
        const response = await fetch(url);
        // Convertir la réponse en JSON
        const data = await response.json();

        // Vérifier si le code de réponse est 200 (succès)
        if (data.cod === 200) {
            // Sélectionner l'élément où afficher les informations météorologiques
            const weatherDisplay = document.getElementById('weatherDisplay');
            // Mettre à jour le contenu HTML avec les informations météorologiques
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
            // Afficher une alerte si la ville n'est pas trouvée
            alert('Ville non trouvée');
        }
    } catch (error) {
        // Afficher une alerte en cas d'erreur de récupération des données
        alert('Erreur de récupération des données');
    }
}