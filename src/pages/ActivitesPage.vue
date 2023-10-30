<template>
  <page-header title="Découvrez nos activités à Saint-Leu"></page-header>
  <q-page-container>
    <div class="row justify-center">
  <div class="col-12 col-md-4" v-for="activite in activites" :key="activite.id">
    <div class="q-ma-md">
      <q-card :class="shadow-1" bordered class="activity-card">
        <!-- Image en arrière-plan avec un overlay noir -->
        <div class="card-image-container" :style="{ backgroundImage: 'url(http://localhost:1337' + activite.attributes.photo.data[0].attributes.formats.thumbnail.url + ')' }">
          <div class="card-overlay">
            <!-- Titre en grand en blanc sur l'overlay -->
            <h3 class="text-h4 q-ma-none">{{ activite.attributes.name }}</h3>
            <!-- Bouton en bas à droite -->
            <q-btn class="activity-btn" :href="activite.attributes.url">En savoir plus</q-btn>
          </div>
        </div>
        <!-- Description en dessous de l'image -->
        <q-card-section>
          <p>{{ activite.attributes.description }}</p>
        </q-card-section>
      </q-card>
    </div>
  </div>
</div>

    <div v-if="weather" class="weather-card">
      <div
        class="weather-details col-12 col-md-4 q-col-gutter-x-xl justify-center"
      >
        <div>
          <q-icon :name="biMoisture" />
          <p>{{ weather.main.humidity }}%</p>
        </div>
        <div>
          <q-icon :name="biWind" />
          <p>{{ weather.wind.speed }} m/s</p>
        </div>
      </div>
      <div class="weather-content col-12 col-md-4">
        <div class="weather-icon">
          <img
            :src="
              'https://openweathermap.org/img/w/' +
              weather.weather[0].icon +
              '.png'
            "
            :alt="weather.weather[0].description"
          />
        </div>
        <div class="weather-main">
          <h3>{{ weather.main.temp }}°C</h3>
          <p>
            <strong>{{ weather.weather[0].description }}</strong>
          </p>
        </div>
      </div>
      <div class="text-h2 col-12 col-md-8">
        actuelle à {{ weather.name }}
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { onMounted, ref} from "vue";
import axios from "axios";
import PageHeader from "components/PageHeader.vue";



const weather = ref(null);
const error = ref(null);
const city = ref("Saint-Leu");
import "weather-icons/css/weather-icons.css";
import { biMoisture, biWind } from "@quasar/extras/bootstrap-icons";

const activites = ref([]);



onMounted(async () => {
  try {
    const activitesResponse = await axios.get("http://localhost:1337/api/activites/?populate=photo");
    if (activitesResponse.status === 200 && activitesResponse.data.data.length > 0) {
      activites.value = activitesResponse.data.data;
      console.log(activitesResponse.data);
    }

    const weatherResponse = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
      params: {
        q: city.value,
        appid: "5126debd56b0f7f32045ca79bc1cf3c0",
        units: "metric",
        lang: "fr",
      },
    });
    weather.value = weatherResponse.data;

  } catch (err) {
    error.value = "Erreur lors de la récupération des données: " + err;
  }
});
</script>

<style scoped>
.activity-card {
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s ease;
  /*border:1px solid #deb887;*/
  min-height:415px;

}

.activity-card:hover {
  transform: translateY(-10px);
}

.card-image-container {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  background-size: cover;
  background-position: center;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background: rgba(0, 0, 0, 0.4);
  color: white;
}

.activity-btn {
  align-self: flex-end;
  background-color: #deb887;
  color: white;
}

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
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.text-h2 {
  margin-top: 200px;
}
.weather-icon,
.weather-main,
.weather-details {
  text-align: center;
}
.weather-icon img {
  width: 100px;
  height: auto;
}
.weather-details {
  display: flex;
  align-items: center;
}
.q-icon {
  font-size: 2.25rem;
  color: white;
  margin-bottom: 0.625rem;
}

.weather-details p {
  font-size: 1.5rem;
}

.weather-main h3 {
  font-size: 5rem;
}

.weather-main p {
  font-size: 1.25rem;
}
</style>
