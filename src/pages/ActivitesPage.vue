<template>
  <page-header title="Découvrez nos activités à Saint-Leu"></page-header>
  <q-page-container>
    <div class="row justify-center">
      <div
        class="col-12 col-md-5"
        v-for="(activity, index) in activities"
        :key="index"
      >
        <div class="q-pa-md">
          <q-card>
            <q-img :src="activity.image" :alt="activity.name" class="q-pa-md" />
            <q-card-section>
              <h3 class="text-h6">{{ activity.name }}</h3>
              <p>{{ activity.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div v-if="weatherData" class="weather-card">

    <div class="weather-content">
      <div class="weather-icon">
        <img :src="'https://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'" :alt="weatherData.weather[0].description" />
      </div>
      <div class="weather-main">
        <h3>{{ weatherData.main.temp }}°C</h3>
        <p><strong>{{ weatherData.weather[0].description }}</strong></p>
      </div>
      <div class="weather-details">
        <div>
          <img src="path_to_humidity_icon.png" alt="Humidity">
          <p>{{ weatherData.main.humidity }}%</p>
        </div>
        <div>
          <img src="path_to_wind_icon.png" alt="Wind">
          <p>{{ weatherData.wind.speed }} m/s</p>
        </div>
      </div>
    </div>
    <div>
    <h2>actuelle à {{ weatherData.name }}</h2></div>
  </div>
  </q-page-container>

</template>

<script setup>
import { onMounted, ref } from "vue";
import axios from "axios";
import PageHeader from "components/PageHeader.vue";

const activities = ref([
  {
    name: "Randonnée au Piton de la Fournaise",
    description:
      "Partez à l'aventure et découvrez l'un des volcans les plus actifs au monde. La randonnée au Piton de la Fournaise est une expérience inoubliable.",
    image: "activite1.jpg",
  },
  {
    name: "Plongée sous-marine à Saint-Leu",
    description:
      "Explorez les fonds marins spectaculaires de Saint-Leu. La plongée sous-marine vous permettra de découvrir une faune et une flore marines exceptionnelles.",
    image: "activite2.jpg",
  },
  {
    name: "Dégustation de cuisine créole",
    description:
      "Ne manquez pas l'occasion de savourer la délicieuse cuisine créole de l'île de la Réunion. Les plats locaux sont un régal pour les papilles.",
    image: "activite3.jpg",
  },
  {
    name: "Dégustation de cuisine créole",
    description:
      "Ne manquez pas l'occasion de savourer la délicieuse cuisine créole de l'île de la Réunion. Les plats locaux sont un régal pour les papilles.",
    image: "activite3.jpg",
  },
]);

const weatherData = ref(null);
const error = ref(null);
const city = ref("Saint-Leu");  // Changez cette valeur ou liez-la à un champ de saisie pour spécifier d'autres villes.

onMounted(async () => {
  try {
    const response = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city.value,
        appid: "5126debd56b0f7f32045ca79bc1cf3c0",
        units: "metric", // Pour obtenir les températures en Celsius
        lang: "fr" // Pour obtenir les descriptions en français
      }
    });
    weatherData.value = response.data;
  } catch (err) {
    error.value = "Erreur lors de la récupération des données météo: " + err;
  }
});
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}


.weather-card {
  background-image: url("public/meteo.jpeg");
  background-size: cover;
  background-position: center;
  color: white;
  margin: 20px 0;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  flex-direction: row;
  align-items: center;

}

.weather-icon, .weather-main, .weather-details {
  flex: 1;
  text-align: center;
}

.weather-background img {
  width: 80px;
  margin-bottom: 10px;
}

.weather-details {
  display: flex;
  justify-content: space-between;
}

.weather-error {
  margin: 20px 0;
  color: red;
  text-align: center;
}
</style>
