<template>
  <page-header
    subtitle="Location à Saint-Leu, Île de la Réunion"
    title="Alizés"
  ></page-header>
  <q-page-container>
    <!-- Informations sur la location -->
    <div class="row justify-center q-col-gutter-x-xl">
      <div class="col-12 col-md-5">
        <q-img
          src="alize.jpeg"
          alt="Bungalow à Saint-Leu"
          class="img-fluid transform"
        />
      </div>

      <div class="col-12 col-md-4">
        <h4>Description de la location</h4>
        <p>
          Capacité: de 2 ou 4 personnes <br /><br />
          La location « Alizés », d’une superficie de 40m², comprenant une
          chambre avec 2 couchages, d'un séjour avec 2 couchages, d'une cuisine
          équipée, d'une salle de douche avec toilettes et une varangue. Située
          au rez-de-jardin, elle vous offre une vue imprenable sur l’océan.
        </p>
        <h4>Services</h4>
        <ul>
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

    <!-- Tarifs -->
    <div class="tariffs mt-4">
      <h4>Tarifs</h4>
      <div class="row">
        <div class="col-12 col-md-3">
          <q-select
            id="selectedLocation"
            outlined
            v-model="selectedLocation"
            :options="[
              '1 semaine',
              '2 semaines',
              '3 semaines',
              '4 semaines ou +',
            ]"
            label="Durée du séjour"
            @input="updatePrices"
          >
          </q-select>
        </div>
        <div class="col-12 col-md-3">
          <q-select
            outlined
            v-model="selectedVoyageurs"
            :options="['2 voyageurs', '4 voyageurs']"
            label="Nombres de voyageurs"
            @input="updatePrices"
          >
          </q-select>
        </div>
        <div class="col-12 col-md-3">
          <q-input
            outlined
            disable
            v-model="nightPrice"
            label="Tarifs à la Nuitée"
          ></q-input>
        </div>
        <div class="col-12 col-md-3">
          <q-input
            outlined
            disable
            v-model="weekPrice"
            label="Tarifs à la semaine"
          ></q-input>
        </div>
      </div>
    </div>

    <!-- Conditions de réservation -->
    <div class="row">
      <div class="reservation-conditions col-12 col-md-6">
        <h4>Conditions de Réservation</h4>
        <p>
          Un acompte de 30% doit être versé pour finaliser la réservation de la
          location.
        </p>
      </div>

      <!-- Contact -->
      <div class="contact-info col-12 col-md-6">
        <h4>Contactez-nous</h4>
        <p>
          Pour toute demande d'information, n'hésitez pas à nous contacter via
          le formulaire de contact
        </p>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { ref, watch } from "vue";
import PageHeader from "components/PageHeader.vue";

const selectedVoyageurs = ref("");
const selectedLocation = ref("");
const nightPrice = ref("");
const weekPrice = ref("");

const tariffs = [
  {
    duration: "1 semaine",
    night2Persons: "75€",
    night4Persons: "95€",
    persons2: "525€",
    persons4: "665€",
  },
  {
    duration: "2 semaines",
    night2Persons: "70€",
    night4Persons: "86€",
    persons2: "490€",
    persons4: "602€",
  },
  {
    duration: "3 semaines",
    night2Persons: "65€",
    night4Persons: "68€",
    persons2: "455€",
    persons4: "476€",
  },
  {
    duration: "4 semaines ou +",
    night2Persons: "61€",
    night4Persons: "66€",
  },
];

const updatePrices = () => {
  const selectedTariff = tariffs.find(
    (tariff) => tariff.duration === selectedLocation.value
  );
  if (selectedTariff) {
    if (selectedVoyageurs.value === "2 voyageurs") {
      nightPrice.value = selectedTariff.night2Persons;
      weekPrice.value = selectedTariff.persons2;
    } else if (selectedVoyageurs.value === "4 voyageurs") {
      nightPrice.value = selectedTariff.night4Persons;
      weekPrice.value = selectedTariff.persons4;
    }
  } else {
    nightPrice.value = "";
    weekPrice.value = "";
  }
};

watch([selectedLocation, selectedVoyageurs], () => {
  updatePrices();
});
</script>

<style scoped>
.img-fluid {
  border: #deb787 solid 2px;
}
.transform {
  transform: translateX(10px) translateY(-19px);
}

.tariffs {
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
}
</style>
