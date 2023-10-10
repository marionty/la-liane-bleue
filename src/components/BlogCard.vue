<template>
  <q-card class="card-articles">
    <q-card-section horizontal class="card-image">
      <q-img :src="url" style="max-width: 450px"></q-img>
      <q-card-section class="card-section">
        <div class="text-h5">{{ title }}</div>
        <div>{{ author }} - {{ date }}</div>
        <div class="card-button">
          <router-link :to="`/blogs/${slug}`">
            <q-btn class="custom-button">{{ button }}</q-btn>
          </router-link>
        </div>
      </q-card-section>
    </q-card-section>
  </q-card>
</template>
<script setup>
defineProps({
  url: String,
  title: String,
  author: String,
  date: String,
  button: String,
  slug: String,
});
</script>
<style scoped>
.card-articles {
  width: 70%;
  height: 300px;
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex; /* Utilisez la mise en page flexbox */
  flex-direction: column;
}
.card-image {
  width: 100%;
  height: 100%;
}
.card-section {
  margin: 20px;
}
.card-button {
  display: flex;
  justify-content: flex-end;
}
.custom-button {
  background-color: #deb787;
  padding: 10px 20px;
  cursor: pointer;
}
</style>
