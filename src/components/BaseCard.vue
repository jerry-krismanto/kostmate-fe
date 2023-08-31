<script setup>
// eslint-disable-next-line no-unused-vars
const props = defineProps({
  month: String,
  status: String,
  action: String
})

const statusColor = () => {
  if (props.status === 'Belum Bayar') {
    return 'text-red-500'
  } else if (props.status === 'Sudah Bayar') {
    return 'text-green-500'
  } else {
    return 'text-yellow-500'
  }
}

console.log(statusColor())
</script>

<template>
  <div class="shadow-md p-3 rounded-md flex justify-between">
    <div>
      <h3 class="font-bold">{{ month }}</h3>
      <p :class="statusColor()">
        {{ status }}
      </p>
    </div>

    <button class="bg-purple-400 px-5 rounded-lg text-white font-bold">{{ action }}</button>
  </div>
</template>
