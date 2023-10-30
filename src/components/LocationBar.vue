<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-6 col-md-2">
      <q-input
        @click="openArrivalPopup"
        style="padding-left: 10px"
        v-model="arrivalDate"
        mask="date"
        :rules="['date']"
        label="Date d'arrivée"
      >
        <template v-slot:prepend>
          <q-icon
            name="event"
            class="cursor-pointer"
            style="padding-right: 10px"
          >
            <q-popup-proxy
              ref="arrivalDatePopup"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="arrivalDate" minimal color="brown">
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

    <div class="col-12 col-sm-6 col-md-2">
      <q-input
        @click="openDeparturePopup"
        style="padding-left: 10px"
        v-model="departureDate"
        mask="date"
        :rules="['date']"
        label="Date de départ"
      >
        <template v-slot:prepend>
          <q-icon
            name="event"
            class="cursor-pointer"
            style="padding-right: 10px"
          >
            <q-popup-proxy
              ref="departureDatePopup"
              cover
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="departureDate" minimal color="brown">
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
    <div class="col-12 col-sm-6 col-md-1">
      <q-select
        style="padding-left: 10px"
        v-model="travelers"
        :options="['2', '4']"
        label="Voyageurs"
      />
    </div>
    <!-- Icône de loupe pour la recherche -->
    <div class="col-12 col-sm-6 col-md-1">
      <q-btn style="height: 50px; width: 100%" @click="makeReservation">
        <q-icon :name="biSearch" />
      </q-btn>
    </div>
  </div>
</template>

<script setup>
import { biSearch } from "@quasar/extras/bootstrap-icons";

import { ref } from "vue";
import { useRouter } from "vue-router";

const arrivalDatePopup = ref(null);

const openArrivalPopup = () => {
  arrivalDatePopup.value.show();
};
const departureDatePopup = ref(null);

const openDeparturePopup = () => {
  departureDatePopup.value.show();
};
const router = useRouter();

const travelers = ref("");
const departureDate = ref("");
const arrivalDate = ref("");

const makeReservation = () => {
  router.push({
    name: "reservation",
    query: {
      travelers: travelers.value,
      departureDate: departureDate.value,
      arrivalDate: arrivalDate.value,
    },
  });
};
</script>

<style scoped>
.q-select,
.q-input,
.q-btn {
  background-color: white !important;
  height: 50px !important;
  border-radius: 2px !important;
}
q-input:focus,
q-input:hover {
  background-color: white !important;
}
.q-btn:hover {
  background-color: #deb887 !important;
}
</style>
