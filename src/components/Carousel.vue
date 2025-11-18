<script setup>
import weed1 from "../assets/weed1.png";
import weed2 from "../assets/weed2.png";
import weed3 from "../assets/weed3.png";
import cinfderella99 from "../assets/Cinderella99small.jpeg";
import gorrilaZkittles from "../assets/GorillaZkittlessmall.jpeg";
import mobyDick from "../assets/MobyDicksmall.jpeg";
</script>

<template lang="">
  <div class="carousel carousel-center rounded-box">
    <div class="carousel-item">
      <img :src="weed1" alt="weed1" />
    </div>

    <div class="carousel-item">
      <img :src="gorrilaZkittles" alt="Gorilla Zkittles" />
    </div>

    <div class="carousel-item">
      <img :src="weed2" alt="weed2" />
    </div>

    <div class="carousel-item">
      <img :src="cinfderella99" alt="Cinderella99" />
    </div>

    <div class="carousel-item">
      <img :src="weed3" alt="weed3" />
    </div>

    <div class="carousel-item">
      <img :src="mobyDick" alt="Moby Dick" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
};
</script>
<style lang=""></style>
