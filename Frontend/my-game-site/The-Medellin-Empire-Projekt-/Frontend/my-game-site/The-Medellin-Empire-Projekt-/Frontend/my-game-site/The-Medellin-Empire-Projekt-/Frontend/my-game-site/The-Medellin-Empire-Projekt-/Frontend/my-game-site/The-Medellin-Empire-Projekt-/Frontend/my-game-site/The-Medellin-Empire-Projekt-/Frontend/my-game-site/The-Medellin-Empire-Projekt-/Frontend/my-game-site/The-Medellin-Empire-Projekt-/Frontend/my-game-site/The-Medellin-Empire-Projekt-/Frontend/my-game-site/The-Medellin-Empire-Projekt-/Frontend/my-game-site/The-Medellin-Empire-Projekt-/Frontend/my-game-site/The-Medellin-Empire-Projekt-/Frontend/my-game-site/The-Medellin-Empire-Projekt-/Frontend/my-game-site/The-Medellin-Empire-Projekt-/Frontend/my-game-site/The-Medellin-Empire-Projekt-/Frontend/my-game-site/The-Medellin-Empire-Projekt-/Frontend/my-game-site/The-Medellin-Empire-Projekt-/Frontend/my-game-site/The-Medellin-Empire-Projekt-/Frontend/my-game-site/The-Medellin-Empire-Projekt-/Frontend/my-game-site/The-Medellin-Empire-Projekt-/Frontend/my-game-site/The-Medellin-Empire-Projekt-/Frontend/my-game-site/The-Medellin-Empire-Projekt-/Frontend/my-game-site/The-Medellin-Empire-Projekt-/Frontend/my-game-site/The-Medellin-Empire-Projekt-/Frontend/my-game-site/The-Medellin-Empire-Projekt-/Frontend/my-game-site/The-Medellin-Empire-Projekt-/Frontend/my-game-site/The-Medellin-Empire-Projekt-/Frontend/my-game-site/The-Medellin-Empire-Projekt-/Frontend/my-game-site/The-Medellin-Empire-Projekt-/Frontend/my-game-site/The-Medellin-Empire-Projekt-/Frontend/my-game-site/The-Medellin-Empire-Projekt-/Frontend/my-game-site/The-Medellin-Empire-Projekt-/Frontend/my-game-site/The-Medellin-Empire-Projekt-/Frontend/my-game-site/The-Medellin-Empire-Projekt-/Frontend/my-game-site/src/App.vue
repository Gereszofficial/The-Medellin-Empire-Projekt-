<template>
  <div>
    <NavBar />
    <RouterView />
    <footer class="footer">
      <div class="container">© {{ new Date().getFullYear() }} The Medellin Empire. All rights reserved.</div>
    </footer>
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue'
</script>
