<script setup>
import { RouterLink } from "vue-router"; //RouterLink from "vue-router";
import logo from "../assets/logo.jpg";
</script>
<template lang="">
  <div class="navbar bg-base-100 shadow-sm">
    <div class="flex-1">
      <router-link to="/"
        ><img :src="logo" alt="HIGH EXCHANGE" :key="logo"
      /></router-link>
    </div>
    <div class="flex-none">
      <!-- Default Navbar shopping icons and functionality
        <div class="dropdown dropdown-center mr-4">
        <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
          <div class="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span class="badge badge-sm indicator-item">8</span>
          </div>
        </div>
        <div
          tabindex="0"
          class="card card-compact dropdown-content bg-base-100 z-1 mt-3 w-52 shadow"
        >
          <div class="card-body">
            <span class="text-lg font-bold">8 Items</span>
            <span class="text-info">Subtotal: $999</span>
            <div class="card-actions">
              <button class="btn btn-primary btn-block">View cart</button>
            </div>
          </div>
        </div>
      </div> -->
      <div class="dropdown dropdown-end">
        <div class="dropdown">
          <div tabindex="0" role="button" class="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-15 w-15"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabindex="-1"
            class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow dropMenu"
          >
            <li><router-link to="/">Home</router-link></li>
            <li><router-link to="/about">What we do</router-link></li>
            <li><router-link to="/sign-up">Sign up</router-link></li>
            <li><router-link to="/member-login">Members Login</router-link></li>
            <li><router-link to="/contact">Contact Us</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
};
</script>
<style lang="css">
.dropMenu li a {
  font-size: 1.25rem;
}
</style>
