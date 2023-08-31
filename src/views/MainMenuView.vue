<script setup>
import BaseCard from '../components/BaseCard.vue'
import { ref } from 'vue'

const month = ref('September')
const status = ref('Belum Bayar')
const action = ref('Bayar')
</script>

<template>
  <div class="grid grid-cols-1 justify-items-center">
    <div>
      <img src="https://picsum.photos/100" alt="Profile Picture" class="rounded-full" />
    </div>
    <div>
      <h3 class="border border-black rounded-md m-4 p-2 w-24 text-center font-bold">Due Date</h3>
      <h3 class="border border-black rounded-md m-4 p-2 w-24 text-center font-bold">Billing</h3>
    </div>
  </div>
  <BaseCard :month="month" :status="status" :action="action"></BaseCard>
  <div class="grid grid-cols-1 justify-items-center">
    <RouterLink to="/login" class="absolute bottom-0 m-4">
      <button
        class="focus:outline-none text-white bg-red-400 hover:bg-red-500 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-red-900"
      >
        Logout
      </button>
    </RouterLink>
  </div>
</template>
