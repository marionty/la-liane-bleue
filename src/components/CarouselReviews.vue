<template>
  <q-carousel arrows animated v-model="slide" height="400px">
    <q-carousel-slide
      v-for="item in items"
      :key="item.name"
      :name="item.name"
      :img-src="item.src"
    >
      <div class="absolute-center custom-caption">
        <div class="text-h2">
          {{ item.title }}
        </div>
        <div class="text-subtitle1">{{ item.subtitle }}</div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

const slide = ref("first");

const items = [
  {
    name: "first",
    title: "Super séjour à Saint-Leu ! Hébergement impeccable.",
    subtitle: "Mountains",
    src: "public/reviews.jpeg",
  },
  {
    name: "second",
    title: "Le bungalow parfait pour des vacances réussies.",
    subtitle: "Famous City",
    src: "public/reviews2.jpeg",
  },
  {
    name: "third",
    title: "Emplacement idéal, proche de tout !",
    subtitle: "Famous Bridge",
    src: "public/reviews3.jpeg",
  },
];
</script>

<style scoped>
.custom-caption {
  text-align: center;
  padding: 12px;
  color: white;
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
