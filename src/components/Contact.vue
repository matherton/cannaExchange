<template>
  <div>
    <h1>Contact Us</h1>
    <form>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name" />
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="email" />
      <label for="message">Message:</label>
      <textarea id="message" v-model="message"></textarea>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  name: "ContactForm",
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
