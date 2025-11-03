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
        <a class="btn btn-primary" href="/downloads/The Medellín Empire.zip" download @click="onDownload">
          ▶ Play Now
        </a>
        <a class="btn" href="#about">Learn More</a>
      </div>
    </div>
  </section>

  <section id="about" class="container" style="padding:60px 0 100px;">
    <h2 class="reveal" style="margin:0 0 10px;">The Medellin Empire – A dzsungel mélyén nem menekülhetsz…</h2>
    <p class="reveal" style="color:var(--muted); max-width:820px;">
      A The Medellin Empire egy történetközpontú FPS, amely a dzsungel mélyén játszódik, <code>ahol a kartellnek dolgozva építesz bűnbirodalmat</code>Veszélyes küldetések
      <strong></strong> illegális bizniszek és halálos leszámolások várnak rád – itt nincs szabály, <code>csak hatalom,</code>pénz és túlélés. Emelkedj fel az alvilág élére… vagy tűnj el örökre.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const videoSrc = '/media/sample.mp4'
const poster = ''

function onDownload(e){
  console.log('Play Now clicked')
}

let observer

onMounted(() => {
  observer = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in-view')   // belép: beúszik
      } else {
        e.target.classList.remove('in-view')// kilép: eltűnik
      }
    }
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -10% 0px' // kis hiszterézis, hogy ne villogjon
  })

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>


