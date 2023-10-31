<template>
  <q-page padding>
    <q-card class="q-mb-md">
      <q-card-section
        class="header-background text-white text-center q-gutter-md"
      >
        <div class="text-h4 q-my-md">
          <q-icon name="done_all" size="2em" class="q-mr-md" />
          Réservation Confirmée
        </div>
      </q-card-section>

      <!-- Location Details Section -->
      <q-card-section class="q-mt-md">
        <div class="row justify-center q-gutter-md">
          <div>
            <q-icon name="calendar_today" class="q-mr-sm" />Arrivée :
            {{ formatDate(reservationDetails.arrivalDate) }}
          </div>
          <div>
            <q-icon name="calendar_today" class="q-mr-sm" />Départ :
            {{ formatDate(reservationDetails.departureDate) }}
          </div>
          <div>
            <q-icon name="group" class="q-mr-sm" />Voyageurs :
            {{ reservationDetails.travelers }}
          </div>
          <div>
            <q-icon name="home" class="q-mr-sm" />
            Nom de la location: {{ rental.name }}
          </div>
          <div>
          <q-icon name="payment" class="q-mr-sm total-cost" />
          <strong>Coût total :</strong> {{ totalCost }}€
        </div>
        </div>

      </q-card-section>

      <q-card flat class="q-mt-lg">
        <q-card-section>
          <div class="text-h6 q-mb-md">Informations complémentaires</div>
          <p>
            Un email vous sera envoyé avec les détails de votre séjour. Il
            inclura également les conditions générales de vente et le Règlement
            intérieur à lire et à signer.
          </p>
          <q-divider inset class="q-my-md" />
          <p>
            Pour valider définitivement votre réservation, un acompte de 30% est
            requis. Les détails de paiement vous seront communiqués par email.
          </p>
          <q-divider inset class="q-my-md" />
          <p class="text-center">
            <q-icon name="info" size="lg" color="blue" class="q-mr-md" />
            Nous restons à votre disposition pour toute question ou précision.
            Merci de votre confiance !
          </p>
        </q-card-section>
      </q-card>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();
const reservationDetails = ref({});
const rental = ref({});
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
    maxNights: null,
    night2Persons: 61,
    night4Persons: 66,
  },
];
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
const numberOfNights = computed(() => {
  const arrivalDate = new Date(reservationDetails.value.arrivalDate);
  const departureDate = new Date(reservationDetails.value.departureDate);
  return (departureDate - arrivalDate) / (1000 * 60 * 60 * 24);


});

const travelers = ref(0);
async function getReservation(reservationId) {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/reservations/${reservationId}/?populate=rental`
    );

    reservationDetails.value = response.data.data.attributes;
    rental.value = response.data.data.attributes.rental.data.attributes;
    travelers.value = String(reservationDetails.value.travelers);
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des détails de la réservation:",
      err.response
    );
  }
}

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}

onMounted(() => {
  const reservationId = route.params.reservationId;
  getReservation(reservationId);
});
</script>

<style scoped>
.location-image {
  border-radius: 15px;
  max-width: 100%;
  height: auto;
}

.header-background {
  background: url("public/header.JPG") center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 300px;
  color: #ffffff; /* change to any color you like for better visibility */
}
</style>
