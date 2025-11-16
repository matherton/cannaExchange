<script setup>
import Card from "../components/Card.vue";
import cinderella99 from "../assets/growersFlowers/Cinderella99.jpeg";
import GorillaZkittles from "../assets/growersFlowers/GorillaZkittles.jpeg";
import MobyDick from "../assets/growersFlowers/MobyDick.jpeg";
import { ref } from "vue";

const titles = ref(["Cinderella 99", "Gorilla Zkittles", "Moby dick"]);
const currentIndex = ref(0);
</script>
<template lang="">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-base-200 p-4 rounded-box">
      <Card
        :imageSrc="cinderella99"
        :title="titles[currentIndex]"
        alt="Cinderella 99"
      />
    </div>
    <div class="bg-base-200 p-4 rounded-box">
      <Card
        :imageSrc="GorillaZkittles"
        :title="titles[currentIndex + 1]"
        alt="Gorilla Zkittles"
      />
    </div>
    <div class="bg-base-200 p-4 rounded-box">
      <Card
        :imageSrc="MobyDick"
        :title="titles[currentIndex + 2]"
        alt="Moby dick"
      />
    </div>
  </div>
</template>
