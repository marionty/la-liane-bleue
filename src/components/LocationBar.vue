<template>
  <q-card class="custom">
    <div class="row">
      <div class="col-12 col-md-3">
        <q-select
          v-model="selectedLocation"
          :options="['Alizés', 'Bourbon']"
          label="Locations"
        >
        </q-select>
      </div>
      <div class="col-12 col-md-3">
        <q-input
          filled
          v-model="selectedDate"
          mask="date"
          :rules="['date']"
          :label="arrivalLabel"
          readonly
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="selectedDate" minimal color="brown">
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      style="background: #deb887"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-3">
        <q-input
          filled
          v-model="selectedDate"
          mask="date"
          :rules="['date']"
          :label="departureLabel"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="selectedDate" minimal color="brown">
                  <div class="row items-center justify-end">
                    <q-btn
                      v-close-popup
                      label="Close"
                      style="background: #deb887"
                      flat
                    />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="col-12 col-md-2">
        <q-select
          v-model="selectedVoyageurs"
          :options="['2', '4']"
          label="Voyageurs"
        />
      </div>
      <!-- Icône de loupe pour la recherche -->
      <div class="col-12 col-md-1 text-center">
        <div class="d-flex flex-center" style="margin-top: 10px">
          <q-icon
            :name="biSearch"
            class="cursor-pointer d-inline"
            color="black"
            @click="performSearch"
            size="2em"
          />
        </div>
      </div>
    </div>
  </q-card>
</template>
<script setup>
import { biSearch } from "@quasar/extras/bootstrap-icons";

import { ref } from "vue";
const selectedLocation = ref("");
const selectedDate = ref("");
const arrivalLabel = ref("Date d'arrivée");
const departureLabel = ref("Date de départ");
const selectedVoyageurs = ref("");
const performSearch = () => {
  // Logique de recherche à implémenter ici
  console.log("Effectuer une recherche");
};
</script>

<style scoped>
.custom {
  height: 50px;
  width: 50%;
  margin: 0 auto;
}
</style>
