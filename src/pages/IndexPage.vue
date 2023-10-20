<template>
  <div class="container">
    <div class="row">
      <div class="col-12 header">
        <div class="column justify-between full-height">
          <div class="col-12 col-md-4 text-white text-center q-mt-xl">
            <div class="text-h3">
              Location saisonnière de charme à l’ île de la Réunion.
            </div>
            <div class="text-h6">
              À quelques minutes de la plage, nos locations Alizés et Bourbon
              offrent une vue imprenable sur l’océan Indien.
            </div>
          </div>
<div class="col-12 col-md-2">
            <LocationBar></LocationBar>
   </div>
   </div>
  </div>
      <div class="col-12">
        <div class="text-h4 text-center q-py-lg">Nos locations</div>
      </div>
    </div>
    <!-- template -->

    <div class="row justify-center location-card q-col-gutter-x-xl">
      <div class="col-12 col-md-4" v-for="rental in rentals" :key="rental.id">
        <location-card :rental="rental"> </location-card>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <CarouselReviews></CarouselReviews>
      </div>
    </div>
    <div class="row justify-center horizontal-margin">
      <div class="col-10 col-md-4">
        <q-carousel
          animated
          v-model="slide"
          navigation
          infinite
          :autoplay="autoplay"
          arrows
          transition-prev="slide-right"
          transition-next="slide-left"
          @mouseenter="autoplay = false"
          @mouseleave="autoplay = true"
          height="400px"
        >
          <q-carousel-slide
            :name="1"
            img-src="public/presentation.JPG"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="2"
            img-src="public/presentation2.jpeg"
          ></q-carousel-slide>
          <q-carousel-slide
            :name="3"
            img-src="public/presentation3.JPG"
          ></q-carousel-slide>
        </q-carousel>
      </div>

      <!-- Colonne pour le texte -->

      <div class="col-10 col-md-4 text-container">
        <div class="text-h3" style="color: #deb887; margin-bottom: 20px">
          Plongez dans le Paradis Réunionnais
        </div>

        <p>
          Découvrez nos <strong>deux charmantes locations à Saint-Leu</strong>,
          climatisés et équipés pour votre confort. Profitez de la tranquillité
          d'une varangue privée, d'une cuisine équipée et d'un séjour convivial.
          <br />
          À quelques pas des plages du Four à Chaux et du dynamisme du
          centre-ville, nos hébergements vous offrent une expérience
          inoubliable. <br />
          Explorez les attractions à proximité, du musée Stella Matutina aux
          sites naturels et activités nautiques.
        </p>
        <div class="text-h6">
          Réservez dès maintenant pour vivre l'essence de la Réunion.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import LocationCard from "components/LocationCard.vue";
import CarouselHeader from "components/CarouselHeader.vue";
import CarouselReviews from "components/CarouselReviews.vue";
import FooterCard from "components/FooterCard.vue";

import { onMounted, ref } from "vue";

const slide = ref(1);
const autoplay = ref(true);

import { createApp } from "vue";
import LocationBar from "components/LocationBar.vue";
import axios from "axios";

const app = createApp({
  data() {
    return {
      slide,
      autoplay,
    };
  },
});

app.component("LocationCard", LocationCard);
app.component("CarouselHeader", CarouselHeader);
app.component("CarouselReviews", CarouselReviews);
app.component("FooterCard", FooterCard);

app.mount("#app");

const rentals = ref([]);
onMounted(async () => {
  rentals.value = await fetchRentals();
  console.log("onMounted", rentals.value);
});
async function fetchRentals() {
  const response = await axios.get(
    "http://localhost:1337/api/rentals?populate=cover"
  );

  if (response.status === 200) {
    console.log(response.data.data);
    return response.data.data;
  }
}
</script>

<style scoped>
.header {
  background: url("public/header.JPG");
  background-size: cover;
  height: 95vh;
}

.location-card {
  padding: 20px;
  margin: 20px 0;
}
.horizontal-margin {
  margin-top: 80px;
  margin-bottom: 80px;
}
.text-container {
  margin-left: 60px;
  margin-top: 10px;
}
p {
  line-height: 2; /* Réglez la valeur selon votre préférence */
}

/*.header {
  position: relative; /* Position relative pour le conteneur
}

.overlay-component {
  position: relative;
  z-index: 1;
}*/
</style>
