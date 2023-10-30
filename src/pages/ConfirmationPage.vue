<template>
  <q-page padding>
    <q-card class="q-mb-md">
      <q-card-section class="bg-primary text-white text-center">
        <div class="text-h4 q-my-md">
          <q-icon name="done_all" size="2em" class="q-mr-md" />
          Réservation Confirmée
        </div>
      </q-card-section>

      <!-- Location Details Section -->
      <q-card-section>
        <div class="row items-center q-gutter-md">
          <div class="col-6 col-md-4"></div>
          <div class="col-6 col-md-8">
            <div>
              <q-icon name="calendar_today" class="q-mr-sm" />Arrivée :
              {{ reservationDetails.arrivalDate }}
            </div>
            <div>
              <q-icon name="calendar_today" class="q-mr-sm" />Départ :
              {{ reservationDetails.departureDate }}
            </div>
            <div>
              <q-icon name="group" class="q-mr-sm" />Voyageurs :
              {{ reservationDetails.travelers }}
            </div>
            <div>{{ rental }}</div>
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
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";

const route = useRoute();

const reservationDetails = ref({});
const rental = ref({});

async function getReservation(reservationId) {
  try {
    const response = await axios.get(
      `http://localhost:1337/api/reservations/${reservationId}/?populate=rental`
    );

    reservationDetails.value = response.data.data.attributes;
    rental.value = response.data.data.attributes.rental.data.attributes.name;
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des détails de la réservation:",
      err.response
    );
  }
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
</style>
