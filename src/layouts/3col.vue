<script setup>
import Card from "../components/Card.vue";
import cinderella99 from "../assets/growersFlowers/Cinderella99.jpeg";
import GorillaZkittles from "../assets/growersFlowers/GorillaZkittles.jpeg";
import MobyDick from "../assets/growersFlowers/MobyDick.jpeg";
</script>
<template lang="">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-base-200 p-4 rounded-box">
      <Card :imageSrc="cinderella99" alt="Cinderella 99" />
    </div>
    <div class="bg-base-200 p-4 rounded-box">
      <Card :imageSrc="GorillaZkittles" alt="Gorilla Zkittles" />
    </div>
    <div class="bg-base-200 p-4 rounded-box">
      <Card :imageSrc="MobyDick" alt="Moby Dick" />
    </div>
  </div>
</template>
<script>
export default {
  name: "ThreeColLayout",
};
</script>
<style lang=""></style>
