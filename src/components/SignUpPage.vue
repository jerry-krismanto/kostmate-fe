<script setup></script>

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
    <div class="grid grid-cols-1 justify-between m-4">
      <label for="confirm">Confirm Password</label>
      <input type="password" name="confirm" id="confirm" class="border border-black" />
    </div>
    <div class="grid justify-center">
      <RouterLink to="/identity">
        <button type="submit" class="border border-black w-24 p-2 rounded-md">Sign Up</button>
      </RouterLink>
    </div>
  </form>
</template>
