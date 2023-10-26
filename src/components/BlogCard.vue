<template>
  <div :class="isFirstBlog ? 'large-card' : 'small-card'">
    <q-img :src="url" style="max-width: 100%;">
      <div class="overlay">
        <div class="top-content">
          <div class="text-h5 card-title">{{ title }}</div>
        </div>
        <div class="bottom-content">
          <div class="author-date">{{ author }} - {{ date }}</div>
          <div class="card-button">
            <router-link :to="`/blogs/${slug}`">
              <q-btn class="custom-button">{{ button }}</q-btn>
            </router-link>
          </div>
        </div>
      </div>
    </q-img>
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

.large-card,
.small-card {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

.top-content {
  display: flex;
  flex-direction: column;
}

.card-title {
  padding: 5px;
  border-radius: 5px;
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.author-date {
  padding: 5px;
  border-radius: 5px;
}

.custom-button {
  background-color: #deb887;
  color: white;
}

.large-card {
  width: 60%;
  height: 800px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
}

.small-card {
  width: 30%;
  margin-right: 10px;
  



}

</style>
