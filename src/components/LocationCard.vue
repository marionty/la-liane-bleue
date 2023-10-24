<template>
  <q-card>
    <q-img
      :src="`http://localhost:1337${rental.attributes.cover.data.attributes.url}`"
      height="300px"
      fit="cover"
    ></q-img>

    <q-card-section class="text-h6 text-center"
      >Location {{ rental.attributes.name }}</q-card-section
    >
    <q-card-section class="content-section">{{
      rental.attributes.content
    }}</q-card-section>
    <q-card-section class="text-center"
      ><em>{{ rental.attributes.subcontent }}</em></q-card-section
    >
    <div class="btn">
      <router-link :to="getReservationLink(rental.id)">
        <q-btn
          style="
            background: #deb887;
            color: black;
            width: 350px;
            margin-bottom: 30px;
            margin-top: 20px;
          "
          >{{ rental.attributes.button }}</q-btn
        >
      </router-link>
    </div>
  </q-card>
</template>

<script setup>
import { useRoute } from "vue-router";
defineProps({
  rental: Object,
});
const router = useRoute();

function getReservationLink(rentalId) {
  // Définissez ici la logique pour générer les liens en fonction de l'ID de la location
  if (rentalId === 1) {
    return "/location1";
  } else if (rentalId === 2) {
    return "/location2";
  } else {
    return "/";
  }
}
</script>

<style scoped>
.content-section {
  padding-left: 60px;
  padding-right: 60px; 
}
.btn {
  display: flex;
  justify-content: center;
}
</style>
