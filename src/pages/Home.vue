<script setup>
import { RouterView } from "vue-router";
import HeroSlideTransition from "../components/HeroSlideTransition.vue";
import ThreeColLayout from "../layouts/3col.vue";
import TwoColLayout from "../layouts/2col.vue";
import Carousel from "../components/Carousel.vue";
</script>
<template>
  <div>
    <RouterView />
    <HeroSlideTransition />
    <TwoColLayout />
    <ThreeColLayout />
    <Carousel />
  </div>
</template>
<script>
export default {
  name: "Home",
};
</script>
<style lang=""></style>
