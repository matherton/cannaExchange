<template>
  <div>
    <h1>Sign Up</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <button type="submit">Submit</button>
    </form>
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
<style lang=""></style>
