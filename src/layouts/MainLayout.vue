<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <router-link to="/">
          <q-img
            src="logo.png"
            alt="Logo de La liane bleue"
            class="q-ml-md q-mr-md"
          />
        </router-link>
        <q-space></q-space>

        <!-- Bouton du menu hamburger pour les écrans étroits -->
        <q-btn
          v-show="isMobile"
          icon="menu"
          flat
          color="black"
          class="q-mx-sm"
          @click="showMenu = !showMenu"
        ></q-btn>

        <!-- Menu complet pour les écrans larges -->
        <div v-show="isWideScreen">
          <router-link :to="{name:'home'}">
            <q-btn text-color="black" class="q-mx-xs" flat>Accueil</q-btn>
          </router-link>
          <router-link :to="{name:'galerie'}">
            <q-btn text-color="black" class="q-mx-xs" flat>Galerie</q-btn>
          </router-link>
          <router-link :to="{name:'activites'}">
            <q-btn text-color="black" class="q-mx-xs" flat>Activités</q-btn>
          </router-link>
          <router-link :to="{name:'apropos'}">
            <q-btn text-color="black" class="q-mx-xs" flat>À propos</q-btn>
          </router-link>
          <router-link :to="{name:'blog'}">
            <q-btn text-color="black" class="q-mx-xs" flat>Blog</q-btn>
          </router-link>
          <router-link :to="{name:'contact'}">
            <q-btn text-color="black" class="q-mx-xs" flat>Contact</q-btn>
          </router-link>
        </div>
        <router-link :to="{name:'login'}">
        <q-btn
          v-if="isWideScreen"
          style="background: #deb887"
          text-color="black"
          class="q-mx-sm"
          flat
        >
          Connexion
        </q-btn>
        </router-link>

        <q-icon
          :name="showUserMenu ? 'another-icon-name' : biPersonCircle"
          color="black"
          size="30px"
          class="cursor-pointer"
          @click="toggleUserMenu"
        />
      </q-toolbar>
    </q-header>

    <!-- Menu latéral pour les écrans étroits -->
    <q-drawer
      v-if="isMobile && showMenu"
      v-model="showMenu"
      side="left"
      :width="250"
      overlay
    >
      <q-list>
        <q-item to="/">
          <q-item-section>Accueil</q-item-section>
        </q-item>
        <q-item to="/galerie">
          <q-item-section>Galerie</q-item-section>
        </q-item>
        <q-item to="/activites">
          <q-item-section>Activités</q-item-section>
        </q-item>
        <q-item to="/apropos">
          <q-item-section>À propos</q-item-section>
        </q-item>
        <q-item to="/blog">
          <q-item-section>Blog</q-item-section>
        </q-item>
        <q-item to="/contact">
          <q-item-section>Contact</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <FooterCard></FooterCard>
  </q-layout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { biPersonCircle } from "@quasar/extras/bootstrap-icons";
import FooterCard from "components/FooterCard.vue";


const showMenu = ref(false);
const showUserMenu = ref(false);

// Fonction pour mettre à jour les valeurs isMobile et isWideScreen
const updateWindowSize = () => {
  isMobile.value = window.innerWidth <= 900;
  isWideScreen.value = window.innerWidth > 900;
};

// Variables réactives pour la largeur de l'écran
const isMobile = ref(window.innerWidth <= 900);
const isWideScreen = ref(window.innerWidth > 900);

// Écouter l'événement de redimensionnement de la fenêtre
onMounted(() => {
  window.addEventListener("resize", updateWindowSize);
});
const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value;
};
</script>

<style scoped>
.q-toolbar {
  background-color: white;
}
.q-img {
  width: 100px;
}
q-btn {
}
</style>
