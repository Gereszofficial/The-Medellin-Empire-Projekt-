<template>
  <section class="hero">
    <!-- Videó háttér. Cseréld le a /media/sample.mp4 fájlra a saját traileredet. -->
    <video
      autoplay
      muted
      loop
      playsinline
      :poster="poster"
      :src="videoSrc"
    ></video>

    <div class="hero-content container">
      <div class="badge">New • Fps • Story game</div>
      <h1 class="headline">The Medellin Empire <br/></h1>
      <p class="sub">
        Merülj el a dzsungel mélyén, és vedd fel a harcot a könyörtelen Medellín kartellel ebben az adrenalindús FPS-ben <em>Próbáld ki most ingyen!</em>  
      </p>
      <div class="cta">
        <a class="btn btn-primary" href="/downloads/MyGame-Setup.txt" download @click="onDownload">
          ▶ Play Now
        </a>
        <a class="btn" href="#about">Learn More</a>
      </div>
    </div>
  </section>

  <section id="about" class="container" style="padding:60px 0 100px;">
    <h2 style="margin:0 0 10px;">Mi ez az oldal?</h2>
    <p style="color:var(--muted); max-width:820px;">
      // <code>///</code> //
      <strong></strong> // <code>//</code>//
      ///
    </p>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const videoSrc = '/media/sample.mp4' // Cseréld saját videódra
const poster = '' // Ha van poszterképed, add meg (pl. '/media/poster.jpg')

function onDownload(e){
  // Később ide jöhet telemetria/backend hívás is
  console.log('Play Now clicked')
}
</script>
