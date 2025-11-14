<script setup>
import ContactUsForm from "../components/ContactUsForm.vue";
</script>
<template>
  <div>
    <ContactUsForm />
  </div>
</template>
<script>
export default {
  name: "Contact",
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
};
</script>
<style lang=""></style>
