<script setup>
import Card from "../components/Card.vue";
import cinderella99 from "../assets/growersFlowers/Cinderella99.jpeg";
import GorillaZkittles from "../assets/growersFlowers/GorillaZkittles.jpeg";
import MobyDick from "../assets/growersFlowers/MobyDick.jpeg";
import { ref } from "vue";

const titles = ref(["Cinderella 99", "Gorilla Zkittles", "Moby dick"]);
const images = ref([cinderella99, GorillaZkittles, MobyDick]);
const currentIndex = ref(0);
</script>

<template lang="">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div
      v-for="(title, index) in titles"
      :key="index"
      class="bg-base-200 p-4 rounded-box"
    >
      <Card :imageSrc="images[index]" :title="title" :alt="title" />
    </div>
  </div>
</template>
