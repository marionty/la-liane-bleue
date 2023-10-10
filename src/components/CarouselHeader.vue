<template>
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
    :style="`height: ${$q.screen.height - 50}px`"
  >
    <q-carousel-slide
      v-for="(slideItem, index) in slides"
      :key="index"
      :name="slideItem.name"
      :img-src="slideItem.imgSrc"
      :class="'slide-' + (index + 1)"
    >
      <div class="row justify-center">
        <div class="col-12 col-sm-10">
          <div class="custom-caption">
            <div class="text-h3">{{ slideItem.title }}</div>
            <div class="text-subtitle1">{{ slideItem.subtitle }}</div>
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

import LocationBar from "components/LocationBar.vue";

const slide = ref(1);
const autoplay = ref(true);

const slides = ref([
  {
    name: "1",
    imgSrc: "public/header.JPG",
    title: "Location saisonnière de charme à l’ île de la Réunion.",
    subtitle:
      "À quelques minutes de la plage, nos locations Alizés et Bourbon offrent une vue imprenable sur l’océan Indien.",
  },
  {
    name: "2",
    imgSrc: "public/header2.JPG",
    title: "Échappez-vous à Saint-Leu : Réservez Votre Location de Rêve",
    subtitle:
      "Évasion Tropicale avec Wifi Gratuit, Climatisation, et Plus Encore!",
  },
  {
    name: "3",
    imgSrc: "public/header3.JPG",
    title: "Saint-Leu, Votre Oasis de Détente à la Réunion",
    subtitle: "Plages, Culture, et Confort Exceptionnel à Votre Portée",
  },
]);
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  margin-top: 50px;
  color: white;
  background-color: rgba(0, 0, 0, 0.2);
}
slide-1 {
  background: url("public/header.JPG") center/cover;
}

slide-2 {
  background: url("public/header2.JPG") center/cover;
}

slide-3 {
  background: url("public/header3.JPG") center/cover;
}
</style>
