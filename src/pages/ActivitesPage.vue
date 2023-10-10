<template>
  <page-header title="Découvrez nos activités à Saint-Leu"></page-header>
  <q-page-container>
    <div class="row justify-center">
      <div
        class="col-12 col-md-5"
        v-for="(activity, index) in activities"
        :key="index"
      >
        <div class="q-pa-md">
          <q-card>
            <q-img :src="activity.image" :alt="activity.name" class="q-pa-md" />
            <q-card-section>
              <h3 class="text-h6">{{ activity.name }}</h3>
              <p>{{ activity.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>
  </q-page-container>
</template>

<script setup>
import { ref } from "vue";
import FooterCard from "components/FooterCard.vue";
import PageHeader from "components/PageHeader.vue";

const activities = ref([
  {
    name: "Randonnée au Piton de la Fournaise",
    description:
      "Partez à l'aventure et découvrez l'un des volcans les plus actifs au monde. La randonnée au Piton de la Fournaise est une expérience inoubliable.",
    image: "activite1.jpg",
  },
  {
    name: "Plongée sous-marine à Saint-Leu",
    description:
      "Explorez les fonds marins spectaculaires de Saint-Leu. La plongée sous-marine vous permettra de découvrir une faune et une flore marines exceptionnelles.",
    image: "activite2.jpg",
  },
  {
    name: "Dégustation de cuisine créole",
    description:
      "Ne manquez pas l'occasion de savourer la délicieuse cuisine créole de l'île de la Réunion. Les plats locaux sont un régal pour les papilles.",
    image: "activite3.jpg",
  },
]);
</script>

<style scoped>
.q-pa-md {
  padding: 16px;
}
</style>
