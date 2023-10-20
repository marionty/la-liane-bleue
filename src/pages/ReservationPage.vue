<template>
  <div>
    <h2>Résumé de la réservation</h2>

    <p><strong>Voyageurs:</strong> {{ travelers }}</p>
    <p><strong>Date de Départ:</strong> {{ formattedDepartureDate }}</p>
    <p><strong>Date d'Arrivée:</strong> {{ formattedArrivalDate }}</p>
    <p><strong>Nombre de Nuits:</strong> {{ numberOfNights }}</p>
    <p><strong>Coût total :</strong> {{ totalCost }}€</p>
    <router-link to="/" class="button">Modifier la recherche</router-link>
  </div>
  <div v-if="rental">
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
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";

const route = useRoute();

const rental = ref(null);

onMounted(async () => await fetchRental());

async function fetchRental() {
  try {
    const response = await axios.get(
      "http://localhost:1337/api/rentals?populate=cover"
    );

    if (response.status === 200 && response.data.data.length > 0) {
      rental.value = response.data.data[0];
    }
  } catch (error) {
    console.error(
      "Une erreur est survenue lors de la récupération des données de location:",
      error
    );
  }
}

const tariffs = [
  {
    maxNights: 7,
    night2Persons: 75,
    night4Persons: 95,
  },
  {
    maxNights: 14,
    night2Persons: 70,
    night4Persons: 86,
  },
  {
    maxNights: 21,
    night2Persons: 65,
    night4Persons: 68,
  },
  {
    maxNights: null, // no upper limit
    night2Persons: 61,
    night4Persons: 66,
  },
];


const travelers = ref(route.query.travelers);
const departureDate = ref(route.query.departureDate);
const arrivalDate = ref(route.query.arrivalDate);

// Date formatting
const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formattedDepartureDate = computed(() => formatDate(departureDate.value));
const formattedArrivalDate = computed(() => formatDate(arrivalDate.value));

const numberOfNights = computed(() => {
  const date1 = new Date(departureDate.value);
  const date2 = new Date(arrivalDate.value);
  const differenceInTime = date2.getTime() - date1.getTime();
  return differenceInTime / (1000 * 3600 * 24);
});

const applicableTariff = computed(() => {
  // trouver le tarif applicable en fonction du nombre de nuits
  return (
    tariffs.find(
      (tariff) => !tariff.maxNights || numberOfNights.value <= tariff.maxNights
    ) || tariffs[tariffs.length - 1]
  ); // default to the last tariff if none are found
});

const totalCost = computed(() => {
  if (travelers.value == "2") {
    return applicableTariff.value.night2Persons * numberOfNights.value;
  } else if (travelers.value == "4") {
    return applicableTariff.value.night4Persons * numberOfNights.value;
  }
  return 0; // par défaut, si le nombre de voyageurs n'est pas reconnu
});
</script>
