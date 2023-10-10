<template>
  <div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7">
    <q-img
      :src="`http://localhost:1337${attributes.picture.data.attributes.url}`"
    ></q-img>
  </div>
</template>

<script setup>
defineProps({
  attributes: Object,
});
</script>
