<template>
  <div class="row justify-center" v-if="blog">
    <BlogHeader
      :url="`http://localhost:1337${blog.attributes.photo.data.attributes.url}`"
      :title="blog.attributes.title"
      :author="blog.attributes.author"
      :date="blog.attributes.date"
    />

    <BlogContentWrapper :content="blog.attributes.content"></BlogContentWrapper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";
import { useRoute } from "vue-router";
import BlogHeader from "components/BlogHeader.vue";
import BlogContentWrapper from "components/BlogContentWrapper.vue";

const route = useRoute();
const blog = ref(null);

onMounted(async () => {
  const response = await axios.get(
    `http://localhost:1337/api/blogs/?populate=photo,content,content.picture&filters[slug][$eq]=${route.params.slug}`
  );

  if (response.status === 200 && response.data.data.length > 0) {
    blog.value = response.data.data[0];
  }
});
</script>
