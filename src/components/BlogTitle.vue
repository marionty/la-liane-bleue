<template>
  <div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7 text-center">
    <h3>{{ attributes.text }}</h3>
  </div>
</template>

<script setup>
defineProps({
  attributes: Object,
});
</script>
