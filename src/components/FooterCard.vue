<template>
  <footer class="text-black" style="background: #deb887">
    <!-- Première colonne avec l'image -->

    <div class="row justify-center">
      <div class="col-12 col-md-5 presentation">
        <router-link to="/">
          <q-img
            src="logo.png"
            alt="Logo de La liane bleue"
            class="q-ml-md q-mr-md"
          />
        </router-link>
        <p>
          Bienvenue sur <strong>La Liane Bleue</strong> - Votre source de
          réservation de charme à Saint-Leu, Ile de la Réunion.<br />
          Découvrez nos deux <strong>locations</strong> saisonnières
          exceptionnelles pour des vacances inoubliables. <br />Réservez dès
          aujourd'hui et explorez <strong>Saint-Leu</strong> en toute
          tranquillité.
        </p>
      </div>

      <!-- Deuxième colonne avec le menu -->
      <div class="col-12 col-md-2 menu">
        <ul class="list-unstyled">
          <div class="text-h6">MENU</div>
          <router-link to="/" class="nav-link">
            <li>Accueil</li>
          </router-link>
          <router-link to="/galerie" class="nav-link">
            <li>Galerie</li>
          </router-link>
          <router-link to="/activites" class="nav-link">
            <li>Activités</li>
          </router-link>
          <router-link to="/apropos" class="nav-link">
            <li>À propos</li>
          </router-link>
          <router-link to="/blog" class="nav-link">
            <li>Blog</li>
          </router-link>
          <router-link to="/contact" class="nav-link">
            <li>Contact</li>
          </router-link>
        </ul>
      </div>

      <!-- Troisième colonne avec les coordonnées de contact -->

      <div class="col-12 col-md-2 contacts">
        <div>
          <div class="text-h6">CONTACTS</div>
          <p>
            Mr Patrick Thevenard - Tél: <strong>0624313820</strong><br />
            Mr Allan Thevenard - Tél: <strong>0665941801</strong><br />
            Email: lalianebleue@gmail.com
          </p>
        </div>
        <div>
          <div class="text-h6">SUIVEZ-NOUS</div>
          <a
            href="https://www.facebook.com/?locale=fr_FR"
            target="_blank"
            class="icon-link"
          >
            <q-icon :name="biFacebook" size="30px" color="white"></q-icon>
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            class="icon-link"
          >
            <q-icon :name="biInstagram" size="30px" color="white"></q-icon>
          </a>
        </div>
      </div>

      <!-- Quatrième colonne avec les réseaux sociaux -->
    </div>
  </footer>
</template>

<script setup>
import { biFacebook, biInstagram } from "@quasar/extras/bootstrap-icons";
</script>

<style scoped>
footer {
  height: 100%;
}

.presentation {
  padding-left: 30px;
  padding-right: 80px;
  margin-top: 40px;
  margin-bottom: 40px;
}
.menu,
.contacts {
  margin-top: 35px;
  margin-bottom: 35px;
}
.text-h4 {
  text-decoration: none;
  margin-bottom: 20px;
  color: black;
}

.nav-link {
  text-decoration: none;
  color: black;
  transition: color 0.3s;
}
.nav-link:hover {
  text-decoration: underline;
}
.list-unstyled {
  padding-left: 0; /* Supprime le padding par défaut à gauche */
  list-style: none; /* Supprime les puces par défaut */
}
.icon-link {
  margin-right: 10px;
}
.text-h6 {
  margin-top: 10px;
  margin-bottom: 10px;
}
.q-img {
  width: 100px;
}
</style>
