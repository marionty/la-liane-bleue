<template>
  <q-page>
    <div class="row justify-center" v-if="blog">
      <BlogHeader
        :url="`http://localhost:1337${blog.attributes.photo.data.attributes.url}`"
        :title="blog.attributes.title"
        :author="blog.attributes.author"
        :date="blog.attributes.date"
      />

      <BlogContentWrapper
        :content="blog.attributes.content"
      ></BlogContentWrapper>
    </div>
  </q-page>
</template>

<script setup>
import axios from "axios";
import { ref, onMounted } from "vue";
import BlogHeader from "components/BlogHeader.vue";
import BlogContentWrapper from "components/BlogContentWrapper.vue";
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params);
// Déclarez une référence (ref) initialisée à null pour stocker les données du blog
const blog = ref(null);

// Utilisez le hook onMounted pour effectuer une action après que le composant a été monté
onMounted(async () => await fetchBlog());

// Définissez la fonction fetchBlog pour récupérer les données du blog depuis une API
async function fetchBlog() {
  // Effectuez une requête GET à l'URL spécifiée pour récupérer les données du blog
  const response = await axios.get(
    `http://localhost:1337/api/blogs?populate&filters[slug][$eq]=${route.params.slug}`
  );

  // Vérifiez si la réponse de la requête est OK (status 200)
  if (response.status === 200) {
    console.log(response.data.data);

    blog.value = response.data.data;
  }
}
</script>
