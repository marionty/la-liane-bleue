<template>
  <div class="col-12 col-sm-10 col-md-9 col-lg-8 col-xl-7">
    <div class="q-pa-lg text-center text-content">
      <p>{{ attributes.text }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  attributes: Object,
});
</script>
<style scoped>
.text-content {
  text-align: justify;
}
</style>

