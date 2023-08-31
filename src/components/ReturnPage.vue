<script setup></script>

<template>
  <div class="h-screen px-4 py-72">
    <div class="grid grid-cols-1 justify-items-center">
      <p class="m-4 text-center">Terima Kasih, Permintaan Anda Sedang Kami Proses</p>
      <RouterLink to="login">
        <button
          class="focus:outline-none text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-4 mb-2 dark:focus:ring-purple-900"
        >
          Kembali ke laman utama
        </button>
      </RouterLink>
    </div>
  </div>
</template>
