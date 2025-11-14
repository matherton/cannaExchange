<script setup>
import CreateAccount from "../components/CreateAccount.vue";
</script>
<template>
  <div class="sign-up-page">
    <CreateAccount />
  </div>
</template>
<script>
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
    };
  },
};
</script>
<style lang="css">
.sign-up-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
