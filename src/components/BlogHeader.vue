<template>
  <div class="col-12">
    <q-img :src="url" height="500px">
      <h2>{{ title }}</h2>
      <h4>{{ author }}</h4>
      <h6>{{ date }}</h6>
    </q-img>
  </div>
</template>
<script setup>
defineProps({
  url: String,
  title: String,
  author: String,
  date: String,
});
</script>
