<template>
  <div class="row justify-center">
    <component
      v-for="comp in content"
      :key="comp.id"
      :is="getComponent(comp)"
      :attributes="comp"
    >
    </component>
  </div>
</template>

<script setup>
import { markRaw } from "vue";
import BlogButton from "components/BlogButton.vue";
import BlogText from "components/BlogText.vue";
import BlogTitle from "components/BlogTitle.vue";
import BlogPicture from "components/BlogPicture.vue";
defineProps({
  content: Array,
});

const components = {
  "blog.button": BlogButton,
  "blog.title": BlogTitle,
  "blog.picture": BlogPicture,
  "blog.text": BlogText,
};

function getComponent(comp) {
  return markRaw(components[comp.__component]);
}
</script>
<style scoped>
.blog-wrapper {
  max-width: 800px; /* Limit the width for readability */
  margin: 0 auto;
  padding: 20px; /* Some general padding */
}

.blog-component {
  margin-bottom: 20px; /* Spacing between the components */
}

</style>
