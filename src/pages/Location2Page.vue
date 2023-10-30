<template>
  <div class="header-container">
    <page-header
      subtitle="Location à Saint-Leu, Île de la Réunion"
      title="Bourbon"
    ></page-header>
  </div>
  <q-page-container class="q-ma-lg">
    <!-- Informations sur le bungalow -->
    <div class="row q-mt-lg q-pa-lg">
      <!-- Image -->
      <div class="col-12 col-md-6">
        <q-img src="bourbon.JPG" alt="Bungalow à Saint-Leu" class="rounded" />
      </div>
      <!-- Description -->
      <div class="col-12 col-md-6">
        <div class="description-container">
          <h3>Description de la location</h3>
          <p>
            Capacité: de 2 ou 4 personnes <br /><br />
            La location « Alizés », d’une superficie de 40m², comprenant une
            chambre avec 2 couchages, d'un séjour avec 2 couchages, d'une
            cuisine équipée, d'une salle de douche avec toilettes et une
            varangue. Située au rez-de-jardin, elle vous offre une vue
            imprenable sur l’océan.
          </p>
          <h4>Services</h4>
          <ul class="services-list">
            <li>Climatisation</li>
            <li>Wi-Fi gratuit</li>
            <li>Télèvison satellite, écran plat</li>
            <li>
              Linge de maison fourni (draps, taies, serviettes de toilette et
              serviettes de bain).
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Conditions de réservation et Contact -->
    <div class="row q-mt-lg q-pa-lg">
      <!-- Conditions de réservation -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg reservation-card rounded">
          <h3>Conditions de Réservation</h3>
          <p>
            Un acompte de 30% doit être versé pour finaliser la réservation de
            la location.
          </p>
        </q-card>
      </div>

      <!-- Contact -->
      <div class="col-12 col-md-6">
        <q-card flat bordered class="q-pa-lg contact-card rounded">
          <h3>Contactez-nous</h3>
          <p>
            Pour toute demande d'information, n'hésitez pas à nous contacter via
            le formulaire de contact
          </p>
        </q-card>
      </div>
    </div>
    <div class="col-12 col-md-4">
      <LocationBar />
    </div>
  </q-page-container>
</template>

<script setup>
import PageHeader from "components/PageHeader.vue";
import LocationBar from "src/components/LocationBar.vue";
</script>

<style scoped>
.header-container {
  text-align: center;
  background-color: #deb787;
  padding: 20px;
  border-radius: 5px;
}

.description-container {
  padding-left: 30px;
}

.services-list {
  list-style-type: none;
  padding-left: 0;
}

.services-list li::before {
  content: "✓ ";
  color: green;
}

.reservation-card,
.contact-card {
  background-color: #f5f5f5;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}
</style>
