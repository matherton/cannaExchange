<template>
  <div>
    <h1>Member Login</h1>
    <form>
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
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
<style lang=""></style>
