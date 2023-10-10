<template>
  <div class="contact-form-container">
    <h3 class="contact-title">Contactez-nous</h3>
  </div>
  <div class="card-container">
    <div class="row justify-center">
      <div class="col-8">
        <div class="row justify-center border">
          <q-card-section class="col-12 col-md-4 coordonnees">
            <div class="text-h4">Coordonnées</div>
            <p>
              Contactez nous pour toute question sur les locations ou sur votre
              réservation.<br />
              Pour réserver,
              <router-link to="/" class="reservation-link"
                >merci de vous rendre sur la page d'accueil.</router-link
              ><br /><br />
              <strong>La Liane Bleue</strong><br />
              Rue Alphonse Daudet,<br />
              Saint-Leu 97436,<br />
              La Réunion<br /><br />
              Mr Patrick Thevenard - Tél: 0624313820 <br />
              Mr Allan Thevenard - Tél: 0665941801<br /><br />
              Email: lalianebleue@gmail.com <br /><br />
              Aéroport de La Réunion Roland Garros <br />
              Itinaire d'un heure environ en voiture
            </p>
          </q-card-section>
          <q-card-section class="col-12 col-md-7">
            <q-form @submit="submitForm" class="form-container">
              <div class="row">
                <div class="col">
                  <q-input
                    v-model="nom"
                    label="Nom*"
                    outlined
                    dense
                    required
                    class="q-mb-md"
                  />
                </div>

                <div class="col pr-2">
                  <q-input
                    v-model="prenom"
                    label="Prénom*"
                    outlined
                    dense
                    required
                    class="q-mb-md"
                  />
                </div>
              </div>
              <q-input
                v-model="telephone"
                label="Télèphone*"
                outlined
                dense
                required
                class="q-mb-md"
              />
              <q-input
                v-model="email"
                label="Adresse Email*"
                outlined
                dense
                required
                class="q-mb-md"
              />

              <q-input
                v-model="sujet"
                label="Sujet*"
                outlined
                dense
                required
                class="q-mb-md"
              />

              <q-input
                v-model="message"
                label="Votre message*"
                outlined
                dense
                required
                type="textarea"
                class="q-mb-md"
              />
              <p>* Champs obligatoires pour la soumission du formulaire</p>
              <div class="text-left q-mt-md">
                <q-btn
                  type="submit"
                  label="Envoyer"
                  style="background: #deb887"
                />
              </div>
            </q-form>
          </q-card-section>
        </div>
      </div>
    </div>
  </div>

  <div class="map-container">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2947682387753!2d55.290684376102625!3d-21.18044617846438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2182979fe3e95a8f%3A0x15f30757c9462d7b!2sRue%20Alphonse%20Daudet%2C%20Saint-Leu%2097436%2C%20La%20R%C3%A9union!5e0!3m2!1sfr!2sfr!4v1694511666750!5m2!1sfr!2sfr"
      width="100%"
      height="400"
      style="border: 0"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Importez Axios au début de votre fichier
import axios from "axios";

// Dans votre composant Vue.js, ajoutez une méthode pour gérer l'envoi du formulaire
/*const submitForm = async () => {
  try {
     Créez un objet avec les données du formulaire
    const formData = {
      nom: nom.value,
      prenom: prenom.value,
      telephone: telephone.value,
      email: email.value,
      sujet: sujet.value,
      message: message.value,
    };

     Effectuez une requête POST pour envoyer les données à Strapi
    const response = await axios.post(
      "http://localhost:1337/votre-route-api",
      formData
    );

    if (response.status === 200) {
      console.log("Formulaire soumis avec succès !");
      // Réinitialisez les valeurs des champs du formulaire ici si nécessaire
    }
  } catch (error) {
    console.error("Erreur lors de la soumission du formulaire", error);
  }
};*/
</script>

<style scoped>
.coordonnees {
  margin-top: 40px;
}
.text-h4 {
  margin-bottom: 10px;
}
p {
  line-height: 1.8;
}
.reservation-link {
  color: #deb887;
}
.form-container {
  max-width: 800px; /* Ajustez la largeur selon vos préférences */
  margin: 0 auto; /* Centre le formulaire horizontalement */
  padding: 50px; /* Ajoute de la marge autour du formulaire */
}
.contact-form-container {
  background-image: url("/contact.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 400px;
  display: flex; /* Utilisez Flexbox pour centrer le contenu verticalement */
  flex-direction: column; /* Alignez le contenu en colonne */
  justify-content: center; /* Centrez le contenu verticalement */
  align-items: center; /* Centrez le contenu horizontalement */
}

.contact-title {
  /*background: rgba(255, 255, 255, 0.4);  Arrière-plan semi-transparent */
  padding: 10px; /* Espace autour du texte */
  border-radius: 10px; /* Coins arrondis */
  margin: 0; /* Supprime la marge par défaut du titre */
  width: 30%;
  text-align: center;
  color: white;
}
.col + .col {
  margin-left: 10px; /* Ajustez la valeur pour contrôler l'espace entre les colonnes */
}
.border {
  border: 1px solid #deb787;
  border-radius: 5px;

  margin-top: 40px;
}
.map-container {
  margin: 40px; /* Ajustez la valeur selon vos préférences */
}
</style>
