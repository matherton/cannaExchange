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
      <img
        src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
        alt="Pizza"
      />
    </div>
    <div class="carousel-item">
      <img :src="weed2" alt="weed2" />
    </div>
    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
        alt="Pizza"
      />
    </div>
    <div class="carousel-item">
      <img :src="weed3" alt="weed3" />
    </div>

    <div class="carousel-item">
      <img
        src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
        alt="Pizza"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Carousel",
};
</script>
<style lang=""></style>
