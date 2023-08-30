<script setup></script>

<template>
  <div class="py-48 h-screen">
    <div class="grid grid-cols-1 justify-items-center m-2">
      <img src="https://picsum.photos/100" alt="" class="rounded-full" />
      <p class="m-2">Kostmate</p>
    </div>
    <div class="grid grid-cols-1 mt-8 justify-items-center">
      <RouterLink
        to="/login"
        class="text-center w-28 focus:outline-none text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-900"
      >
        Login
      </RouterLink>
      <RouterLink
        to="/register"
        class="text-center  w-28 focus:outline-none text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-purple-900"
      >
        Sign Up
      </RouterLink>
    </div>
  </div>
</template>
