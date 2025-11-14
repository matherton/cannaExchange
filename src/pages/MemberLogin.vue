<script setup>
import LoginForm from "../components/LoginForm.vue";
</script>
<template>
  <div class="member-login-page">
    <LoginForm />
  </div>
</template>
<script>
export default {
  name: "MemberLogin",
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
<style lang="css">
.member-login-page {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>
