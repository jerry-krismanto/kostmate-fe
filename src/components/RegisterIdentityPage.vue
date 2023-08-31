<script setup></script>

<template>
  <div class="h-screen py-36 px-4">
    <div class="grid grid-cols-1 justify-items-center m-4">
      <img src="https://picsum.photos/100" alt="Profile Picture" class="rounded-full" />
    </div>
    <div>
      <form action="" class="grid grid-cols-1 justify-items-center">
        <div class="grid grid-cols-1 m-2">
          <input
            placeholder="Nama Lengkap"
            type="text"
            name="fullname"
            id="fullname"
            class="border border-black rounded-sm p-1"
          />
        </div>
        <div class="grid grid-cols-1 m-2">
          <input
            placeholder="NIK"
            type="text"
            name="nik"
            id="nik"
            class="border border-black rounded-sm p-1"
          />
        </div>
        <div class="grid grid-cols-1 m-2">
          <input
            placeholder="Nomor WA"
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            class="border border-black rounded-sm p-1"
          />
        </div>
        <div class="grid grid-cols-1 m-2 text-center">
          <label for="ktp">Upload KTP</label>
          <input type="file" name="ktp" id="ktp" class="border border-black rounded-sm p-1" />
        </div>
        <div class="grid grid-cols-1 m-2">
          <RouterLink to="return">
            <button
              type="submit"
              class="focus:outline-none text-white bg-purple-400 hover:bg-purple-500 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:focus:ring-purple-900"
            >
              Register
            </button>
          </RouterLink>
        </div>
      </form>
    </div>
  </div>
</template>
