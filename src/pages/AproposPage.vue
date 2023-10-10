<template>
  <page-header title="Notre histoire"></page-header>
  <q-page-container class="page-container">
    <div class="row">
      <div class="col-md-12"></div>
    </div>
    <div class="row justify-center">
      <div class="col-md-10">
        <div class="row q-col-gutter-x-xl">
          <!-- Colonne pour les paragraphes -->
          <div class="col-12 col-md-6">
            <h4>La liane Bleue</h4>
            <p>
              <strong>
                Bienvenue sur notre site de réservation de deux locations
                uniques à l'île de la Réunion.</strong
              >
            </p>
            <p>
              Notre histoire est celle d'une aventure familiale, une histoire de
              père et fils qui partagent leur amour pour cette magnifique île
              tropicale.
            </p>
            <p>
              Tout a commencé il y a plusieurs années lorsque mon père, un
              amoureux de la nature et de la culture
              <strong>réunionnaise</strong>, a acquis ces deux propriétés
              exceptionnelles. Passionné par la préservation de la beauté
              naturelle de <strong>l'île de la réunion</strong>, il a transformé
              ces espaces en véritables havres de paix, alliant confort moderne
              et respect de l'environnement.
            </p>
            <p>
              Aujourd'hui, son fils et lui partagent cette passion et ont décidé
              d'ouvrir leurs portes aux voyageurs du monde entier pour qu'ils
              puissent découvrir à leurs tours, les trésors cachés de
              <strong>l'île de la Réunion.</strong>
            </p>
          </div>
          <!-- Colonne pour l'image -->
          <div class="col-12 col-md-6">
            <div class="image-container">
              <q-img
                src="apropos1.JPG"
                alt="Image de notre propriété"
                class="img-fluid position-relative image-frame"
                style="top: -50px; left: 0; height: 500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import PageHeader from "components/PageHeader.vue";
</script>

<style scoped>
.page-container {
  margin-top: 30px;
}
.image-frame {
  border: 5px solid #fff; /* Bordure blanche de 5 pixels */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5); /* Ombre légère */
}
</style>
