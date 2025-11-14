<script setup>
import weed1 from "../assets/weed1.png";
import weed2 from "../assets/weed2.png";
import weed3 from "../assets/weed3.png";
</script>

<template lang="">
  <div class="carousel carousel-center rounded-box">
    <div class="carousel-item">
      <img :src="weed1" alt="weed1" />
    </div>

    <div class="carousel-item">
      <img :src="weed2" alt="weed2" />
    </div>

    <div class="carousel-item">
      <img :src="weed3" alt="weed3" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
};
</script>
<style lang=""></style>
