<template>
  <div class="col-12">
    <q-img :src="url" height="500px" class="styled-image">
      <div class="overlay">
        <h2 class="image-title">{{ title }}</h2>
        <div class="bottom-section">
          <h4 class="image-author">{{ author }}</h4>
          <h6 class="image-date">{{ formatDate(date) }}</h6>
        </div>
      </div>
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

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
}
</script>

<style scoped>
.styled-image {
  position: relative;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}

.image-title {
  font-size: 2em;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
  max-width: 60%;  /* largeur maximale définie à 70% de sa conteneur */
  text-align: center; /* pour centrer le texte à l'intérieur du titre */
  margin: 0 auto; /* pour centrer le titre lui-même */
}

.bottom-section {
  align-self: flex-start;
  display: flex;
  gap: 10px;
}

.image-author, .image-date {
  font-size: 1.2em;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.6);
}
</style>
