<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <form action="">
    <div class="grid grid-cols-1 justify-between m-4">
      <label for="email" class="">Email</label>
      <input type="email" name="email" id="email" class="border border-black" />
    </div>
    <div class="grid grid-cols-1 justify-between m-4">
      <label for="password">Password</label>
      <input type="password" name="password" id="password" class="border border-black" />
    </div>
    <div class="grid justify-center">
      <button type="submit" class="border border-black w-24 p-2 m-4 rounded-md">Login</button>
    </div>
  </form>
  <div class="text-center m-4">Belum Punya Akun? <RouterLink to="/register">Daftar</RouterLink></div>
</template>
