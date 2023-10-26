<template>
  <q-card>
    <q-card-section>
      <q-form
        @submit.prevent="register"
        style="max-width: 700px; margin: 0 auto"
      >
        <h2>Inscription</h2>
        <q-select
          outlined
          v-model="user.civility"
          :options="['M.', 'Mme.']"
          label="Civilité"
          class="q-mb-md"
        />
        <div class="row">
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.username"
              label="Nom"
              class="q-mr-md"
              :rules="[
                (val) => (val && val.length <= 60) || 'Maximum 60 caractères',
              ]"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.firstName"
              label="Prénom"
              :rules="[
                (val) => (val && val.length <= 60) || 'Maximum 60 caractères',
              ]"
            />
          </div>
        </div>
        <q-input
          outlined
          v-model="user.email"
          label="Email"
         :rules="[
            (val) =>
              (val && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)) ||
              'Entrez une adresse e-mail valide',
          ]"
        />
        <q-input
          outlined
          v-model="user.password"
          type="password"
          label="Mot de passe"
          :rules="[(val) => val.length >= 6 || 'minimum 6 caractères']"
        />
        <q-input
          outlined
          v-model="user.address"
          label="Adresse"
          :rules="[
            (val) => (val && val.length <= 120) || 'Maximum 120 caractères',
          ]"
        />
        <div class="row">
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.postalCode"
              label="Code Postal"
              class="q-mr-md"
              :rules="[
                (val) =>
                  (val && /^\d{1,5}$/.test(val)) ||
                  'Entrez un code postal valide (max. 5 chiffres)',
              ]"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.city"
              label="ville"
              :rules="[
                (val) => (val && val.length <= 60) || 'Maximum 60 caractères',
              ]"
            />
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.country"
              label="Pays"
              class="q-mr-md"
              :rules="[
                (val) => (val && val.length <= 60) || 'Maximum 60 caractères',
              ]"
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              outlined
              v-model="user.phoneNumber"
              label="N° de téléphone"
              :rules="[
                (val) =>
                  (val && /^\d{8,}$/.test(val)) || 'Entrez au moins 8 chiffres',
              ]"
            />
          </div>
        </div>

        <q-btn
          label="Créer un compte"
          color="primary"
          style="margin-bottom: 50px"
          @click="register"
        />
      </q-form>
    </q-card-section>
  </q-card>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import { useQuasar } from "quasar";
import { useRoute, useRouter } from "vue-router";
const $q = useQuasar();

const router = useRouter();
const route = useRoute();
const reservationId = route.params.reservationId;

const user = ref({
  civility: "",
  firstName: "",
  username: "",
  email: "",
  password: "",
  address: "",
  city: "",
  postalCode: "",
  country: "",
  phoneNumber: "",
  role: "",
});

async function createUser() {
  try {
   await axios.post("http://localhost:1337/api/users", {
      civility: user.value.civility,
      firstName: user.value.firstName,
      username: user.value.username,
      email: user.value.email,
      password: user.value.password,
      address: user.value.address,
      city: user.value.city,
      postalCode: user.value.postalCode,
      country: user.value.country,
      phoneNumber: user.value.phoneNumber,
      role: user.value.role,
      reservations: reservationId,
    });
    $q.notify({
      message: "votre compte a bien été créé",
      color: "green-9",
      position: "top",
    });

  } catch (error) {
    $q.notify({
      message: "Erreur d'enregistrement des coordonnées",
      caption: "Merci de réessayer ultérieurement",
      color: "red-9",
      position: "top",
    });
  }
}

const register = () => {
  createUser();
  navigateToConfirm();
};

const navigateToConfirm = (reservationId) => {
  const routeData = {
    name: "confirmation",
    params: { reservationId: reservationId },
  };
  router.push(routeData);
};

</script>
