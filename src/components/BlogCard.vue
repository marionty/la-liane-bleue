<template>
  <div class="row justify-center">
    <div class="col-10">
      <q-img :src="url" fit="cover">
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
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const { url, title, author, date, button, slug } = defineProps([
  "url",
  "title",
  "author",
  "date",
  "button",
  "slug",
]);
</script>
<style scoped>
/* Positionnement des cartes */
.col-10{
  height: 400px;
  position: relative;
  margin-bottom: 20px;
  margin-top: 20px;
  overflow: hidden;
}
.q-img {
  width: 100%;
  height: 100%;
}
/* Amélioration de la superposition */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: white;
}

/* Espacement et mise en forme du contenu de la carte */
.top-content {
  display: flex;
  flex-direction: column;
  gap: 10px; /* Espacement entre les éléments du contenu supérieur */
}

.bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px; /* Espacement entre les éléments du contenu inférieur */
}

.author-date {
  font-size: 0.9em; /* Taille légèrement réduite pour que la date et l'auteur ne dominent pas */
}

.custom-button {
  padding: 8px 15px; /* Un peu plus de padding pour rendre le bouton plus attrayant */
  background-color: #deb887;
  color: white;
}
</style>
