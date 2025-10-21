<template>
  <nav class="nav">
    
    
    <div class="inner">
      <div class="brand">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.88L18.18 22 12 18.77 5.82 22 7 14.15l-5-4.88 6.91-1.01L12 2z"/>
        </svg>
        <span>The Medellin Empire</span>
      </div>
      <div class="spacer"></div>
      <div class="nav-links">
        <RouterLink class="home-link" to="/">Home</RouterLink>
        <RouterLink to="/install">Telepítési útmutató</RouterLink>
        <RouterLink to="/contact">Kapcsolat</RouterLink>
      </div>
    </div>

  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
