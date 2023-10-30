<template>
  <page-header title="Blog"></page-header>


      <div v-for="(blog, index) in blogs" :key="blog.id">
        <BlogCard
          :url="`http://localhost:1337${blog.attributes.photo.data.attributes.url}`"
          :title="blog.attributes.title"
          :author="blog.attributes.author"
          :date="blog.attributes.date"
          :button="blog.attributes.button"
          :slug="blog.attributes.slug"
          :isFirstBlog="index === 0"
        />
      </div>
     

</template>

<script setup>
import { onMounted, ref } from "vue";

import PageHeader from "components/PageHeader.vue";
import axios from "axios";
import BlogCard from "components/BlogCard.vue";

// Déclarez une référence (ref) initialisée à null pour stocker les données du blog
const blogs = ref([]);

// Utilisez le hook onMounted pour effectuer une action après que le composant a été monté
onMounted(async () => await fetchBlog());

// Définissez la fonction fetchBlog pour récupérer les données du blog depuis une API
async function fetchBlog() {
  // Effectuez une requête GET à l'URL spécifiée pour récupérer les données du blog
  const response = await axios.get(
    "http://localhost:1337/api/blogs/?populate=photo"
  );

  // Vérifiez si la réponse de la requête est OK (status 200)
  if (response.status === 200) {
    console.log(response.data.data);

    // Affectez les données de la réponse à la référence "blog"
    blogs.value = response.data.data;
  }
}
</script>

<style scoped></style>
