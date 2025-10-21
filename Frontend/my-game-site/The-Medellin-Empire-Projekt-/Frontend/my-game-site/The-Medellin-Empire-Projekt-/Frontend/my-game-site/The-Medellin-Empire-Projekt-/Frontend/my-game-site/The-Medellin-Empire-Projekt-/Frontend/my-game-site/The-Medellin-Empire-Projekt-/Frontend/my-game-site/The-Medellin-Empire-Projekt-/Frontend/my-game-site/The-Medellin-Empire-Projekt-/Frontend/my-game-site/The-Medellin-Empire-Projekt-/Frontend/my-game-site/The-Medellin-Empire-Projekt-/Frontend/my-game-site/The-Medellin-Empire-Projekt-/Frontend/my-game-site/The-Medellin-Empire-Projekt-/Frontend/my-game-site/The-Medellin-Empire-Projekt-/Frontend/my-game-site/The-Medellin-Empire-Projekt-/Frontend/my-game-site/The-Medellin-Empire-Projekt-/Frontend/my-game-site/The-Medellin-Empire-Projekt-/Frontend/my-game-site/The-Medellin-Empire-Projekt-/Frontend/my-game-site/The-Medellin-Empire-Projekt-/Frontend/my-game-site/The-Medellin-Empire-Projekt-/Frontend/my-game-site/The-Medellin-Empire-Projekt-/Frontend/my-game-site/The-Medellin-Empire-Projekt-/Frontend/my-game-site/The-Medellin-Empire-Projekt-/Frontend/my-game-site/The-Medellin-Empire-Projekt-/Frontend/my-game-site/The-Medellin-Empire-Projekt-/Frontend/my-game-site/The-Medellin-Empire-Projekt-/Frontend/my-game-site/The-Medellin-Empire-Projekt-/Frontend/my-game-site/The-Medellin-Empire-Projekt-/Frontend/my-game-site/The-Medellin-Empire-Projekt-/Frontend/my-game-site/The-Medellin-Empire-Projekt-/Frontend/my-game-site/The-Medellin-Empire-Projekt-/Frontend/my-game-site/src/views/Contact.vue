<template>
  <section class="container" style="padding:120px 0 100px;">
    <h1 style="margin:0 0 14px;">Kapcsolat</h1>
    <p style="color:var(--muted); max-width:820px;">
      Kérdésed van a The Medellin Empire-rel kapcsolatban? Írj nekünk!
    </p>

    <form class="contact-form" @submit.prevent="onSubmit" style="max-width:680px; display:grid; gap:12px; margin-top:12px;">
      <input v-model="name" required placeholder="Neved" class="input"/>
      <input v-model="email" type="email" required placeholder="Email címed" class="input"/>
      <textarea v-model="msg" required placeholder="Üzenet" rows="6" class="input"></textarea>
      <button class="btn btn-primary" type="submit">Küldés</button>
    </form>

    <p v-if="sent" style="margin-top:10px; color:var(--muted);">Köszönjük! Hamarosan jelentkezünk.</p>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const name = ref('')
const email = ref('')
const msg = ref('')
const sent = ref(false)

function onSubmit(){
  // Backend bekötése később: POST /api/contact
  console.log('CONTACT_FORM', { name: name.value, email: email.value, msg: msg.value })
  sent.value = true
  name.value = ''
  email.value = ''
  msg.value = ''
}
</script>
