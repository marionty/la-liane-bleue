<template>
   <div>
    <h2>Résumé de la réservation</h2>

    <p><strong>Voyageurs:</strong> {{ travelers }}</p>
    <p><strong>Date d'arrivée:</strong> {{ formattedArrivalDate }}</p>
    <p><strong>Date de Départ:</strong> {{ formattedDepartureDate }}</p>
    <p><strong>Nombre de Nuits:</strong> {{ numberOfNights }}</p>
    <p><strong>Coût total :</strong> {{ totalCost }}€</p>
    <router-link to="/" class="button">Modifier la recherche</router-link>
  </div>
  <div>
    <h2>Liste des logements disponibles</h2>
    <div class="row justify-center location-card q-col-gutter-x-xl">
    <div class="col-12 col-md-4" v-for="rental in rentals" :key="rental.id">
      <q-card>
        <q-img :src="`http://localhost:1337${rental.attributes.cover.data.attributes.url}`" alt="Photo du logement"></q-img>
        <q-card-section>
          <div class="text-h6">{{ rental.attributes.name }}</div>
          <div>{{ rental.attributes.content }}</div>
        </q-card-section>
        <q-card-actions>
          <q-btn
            label="Réserver ce logement"
            @click="createReservation(rental.id)"
          />
        </q-card-actions>

      </q-card>
    </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import axios from 'axios';
import { useRoute } from "vue-router";

const route = useRoute();
const rentals = ref([]);

async function getRentals() {
  const response = await axios.get("http://localhost:1337/api/rentals?populate=cover");
  rentals.value = response.data.data;
}
onMounted(async () => {
  await getRentals();
});


async function createReservation(rentalId) {
  // Convertir les dates d'arrivée et de départ en format "YYYY-MM-DD"
  const arrivalDate = new Date(route.query.arrivalDate).toISOString().split('T')[0];
  const departureDate = new Date(route.query.departureDate).toISOString().split('T')[0];

  const data = {
    arrivalDate: arrivalDate,
    departureDate: departureDate,
      travelers: parseFloat(route.query.travelers),
      rental : rentalId,

    }
  const response = await axios.post("http://localhost:1337/api/reservations", {data},
        );

  console.log(response.data.data);
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
  const date1 = new Date(arrivalDate.value); // Commencez par la date d'arrivée
  const date2 = new Date(departureDate.value);
  const differenceInTime = date2.getTime() - date1.getTime();

  if (differenceInTime < 0) {
    console.warn("La date d'arrivée est après la date de départ.");
    return 0; // Vous pouvez choisir de retourner 0 ou de traiter autrement cette situation
  }

  return Math.round(differenceInTime / (1000 * 3600 * 24));
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
<style scoped>

</style>
