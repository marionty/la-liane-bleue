<template>
  <div class="flex text-white text-center full-width-banner bg-primary">
    <div class="title">
      <div class="text-h2 q-mb-lg">
        {{ title }}
      </div>
      <div class="text-h6">{{ subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
  title: String,
  subtitle: String,
});
</script>
<style scoped>
.full-width-banner {
  height: 300px;
}

.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
}
</style>
