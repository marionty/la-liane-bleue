<template>
  <div class="row">
    <!-- Carte de Connexion -->
    <div class="col-12 col-md-6">
      <q-card>
        <q-card-section>
          <h2>Connexion</h2>
          <q-form @submit.prevent="login">
            <q-input outlined v-model="loginData.email" label="Email" />
            <q-input outlined v-model="loginData.password" type="password" label="Mot de passe" />
            <q-btn label="Se connecter" type="submit" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
    <!-- Carte d'Inscription -->
    <div class="col-12 col-md-6">
      <q-card>
        <q-card-section>
          <h2>Inscription</h2>
          <q-form @submit.prevent="register">
            <q-select outlined v-model="registerData.civility" :options="['M.', 'Mme.']" label="Civilité" />
            <q-input outlined v-model="registerData.firstName" label="Prénom" />
            <q-input outlined v-model="registerData.lastName" label="Nom" />
            <q-input outlined v-model="registerData.email" label="Email" />
            <q-input outlined v-model="registerData.password" type="password" label="Mot de passe" />
            <q-input outlined v-model="registerData.address" label="Adresse" />
            <q-input outlined v-model="registerData.postalCode" label="Code Postal" />
            <q-input outlined v-model="registerData.phoneNumber" label="N° de téléphone" />
            <q-btn label="Créer un compte" type="submit" color="primary" />
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const loginData = ref({
  email: '',
  password: ''
});

const registerData = ref({
  civility: 'M.', // M. par défaut
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  address: '',
  postalCode: '',
  phoneNumber: ''
});

const login = async () => {
  try {
    const response = await axios.post("http://localhost:1337/api/rentals?populate=cover", {
      identifier: loginData.value.email,
      password: loginData.value.password
    });
    console.log(response.data);
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
  }
};

const register = async () => {
  try {
    const response = await axios.post("http://localhost:1337/api/rentals?populate=cover", {
      civility: registerData.value.civility,
      firstName: registerData.value.firstName,
      lastName: registerData.value.lastName,
      username: registerData.value.email, // Si le nom d'utilisateur est toujours l'email
      email: registerData.value.email,
      password: registerData.value.password,
      address: registerData.value.address,
      postalCode: registerData.value.postalCode,
      phoneNumber: registerData.value.phoneNumber
    });
    console.log(response.data);
  } catch (error) {
    console.error("Erreur lors de l'inscription:", error);
  }
};

</script>
