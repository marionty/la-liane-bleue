<template>
  <div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 text-center">
    <q-btn
      :label="attributes.title"
      :style="`background:${attributes.color}`"
      :href="attributes.link"
    ></q-btn>
  </div>
</template>

<script setup>
defineProps({
  attributes: Object,
});
</script>
