<script setup>
import Card from "../components/Card.vue";
</script>
<template lang="">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    <div class="bg-base-200 p-4 rounded-box"><Card /></div>
    <div class="bg-base-200 p-4 rounded-box"><Card /></div>
    <div class="bg-base-200 p-4 rounded-box"><Card /></div>
  </div>
</template>
<script>
export default {
  name: "ThreeColLayout",
};
</script>
<style lang=""></style>
