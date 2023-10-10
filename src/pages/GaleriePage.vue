<template>
  <q-page>
    <page-header title="Galerie"></page-header>
    <div class="row custom-margin">
      <div class="col-md-4" v-for="photo in photos" :key="photo.id">
        <q-card class="photo-card">
          <q-img :src="photo.url" class="photo-image" />
          <button class="zoom-button" @click="openModal(photo.url)">+</button>
        </q-card>
      </div>
    </div>
    <div class="modal" ref="modal">
      <div class="modal-content">
        <button class="close-button" @click="closeModal">×</button>
        <img :src="selectedPhotoUrl" alt="Photo agrandie" />
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import PageHeader from "components/PageHeader.vue";

const photos = ref([
  { id: 1, url: "galerie1.JPG" },
  { id: 2, url: "galerie2.JPG" },
  { id: 3, url: "galerie3.JPG" },
  { id: 4, url: "galerie4.JPG" },
  { id: 5, url: "galerie5.jpg" },
  { id: 6, url: "galerie6.jpg" },
  { id: 7, url: "galerie7.jpg" },
  { id: 8, url: "galerie8.jpg" },
  { id: 9, url: "galerie9.jpg" },
  { id: 10, url: "galerie10.jpg" },
  { id: 11, url: "galerie11.jpg" },
  { id: 12, url: "galerie12.jpg" },
]);
const modal = ref(null);
const selectedPhotoUrl = ref("");

// Fonction pour afficher la modale avec la photo agrandie
function openModal(photoUrl) {
  selectedPhotoUrl.value = photoUrl;
  modal.value.style.display = "block";
}
// Fonction pour fermer la modale
function closeModal() {
  selectedPhotoUrl.value = ""; // Réinitialisez l'URL de la photo agrandie
  modal.value.style.display = "none";
}
/* Fonction pour fermer la modale
function closeModal() {
  modal.value.style.display = "none";
}

 Écoutez les clics en dehors de la modale pour la fermer
window.addEventListener("click", (event) => {
  if (event.target === modal.value) {
    closeModal();
  }
});*/
</script>

<style scoped>
.custom-margin {
  margin: 30px;
}
.photo-card {
  margin: 20px; /* Espace autour de chaque carte */
}

.photo-image {
  height: 250px;
}
/* Style par défaut pour le bouton de zoom */
.zoom-button {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  cursor: pointer;
}

/* Afficher le bouton lorsque l'utilisateur survole la photo */
.photo-card:hover .zoom-button {
  display: block;
}
/* Style pour la modale */
.modal {
  display: none;
  position: fixed;
  top: 8%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1;
  overflow: auto;
}

/* Style pour le contenu de la modale */
.modal-content {
  position: relative;
  margin: auto;
  display: block;
  max-width: 90%;
  max-height: 90%;
}

/* Style pour la photo agrandie */
.modal-content img {
  display: block;
  max-width: 100%;
  max-height: 100%;
  margin: auto;
}
/* Style pour le bouton "Fermer" */
.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
}

.close-button:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
