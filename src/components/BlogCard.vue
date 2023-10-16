<template>
  <div :class="isFirstBlog ? 'large-card' : 'small-card'">
    <q-img :src="url" style="max-width: 100%"></q-img>

    <div class="text-h5">{{ title }}</div>
    <div>{{ author }} - {{ date }}</div>
    <div class="card-button">
      <router-link :to="`/blogs/${slug}`">
        <q-btn class="custom-button">{{ button }}</q-btn>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { url, title, author, date, button, slug, isFirstBlog } = defineProps([
  "url",
  "title",
  "author",
  "date",
  "button",
  "slug",
  "isFirstBlog",
]);
</script>

<style scoped>
.large-card {
  width: 70%;
  height: 800px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.small-card {
  width: 30%; /* Largeur des petites cartes */
  margin-right: 10px; /* Marge entre les cartes */
}
</style>
