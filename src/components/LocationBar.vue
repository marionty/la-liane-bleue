<template>
  <div>
    <select v-model="location">
      <option value="1">Alizé</option>
      <option value="2">Bourbon</option>
    </select>

    <select v-model="travelers">
      <option value="2">2</option>
      <option value="4">4</option>
    </select>

    <input type="date" v-model="departureDate" />
    <input type="date" v-model="arrivalDate" />

    <button @click="makeReservation">Réserver</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const location = ref("");
const travelers = ref("");
const departureDate = ref("");
const arrivalDate = ref("");

const makeReservation = () => {
  router.push({
    name: "reservation",
    query: {
      location: location.value,
      travelers: travelers.value,
      departureDate: departureDate.value,
      arrivalDate: arrivalDate.value,
    },
  });
};
</script>
