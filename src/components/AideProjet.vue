<template>
  <div class="row justify-center">
    <div class="col-12 col-sm-6 col-md-3">
      <q-input type="date" v-model="departureDate" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <q-input type="date" v-model="arrivalDate" />
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <q-input v-model="travelers">
        
      </q-input>
    </div>
    <div class="col-12 col-sm-6 col-md-3">
      <q-btn class="full-width full-height">Réserver</q-btn>
    </div>
  </div>
</template>
<script setup>

import { ref } from "vue";

import {useRoute} from "vue-router";
const router =

const travelers = ref("3");
const departureDate = ref('2023-10-01');
const arrivalDate = ref('2023-10-04');
</script>
