<template>
  <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <h1 class="mb-4 text-2xl font-bold">User Info</h1>
    <div class="mb-4">
      <label for="name" class="hidden">Full Name</label>
      <input
        type="name"
        name="name"
        id="name"
        placeholder="Full Name"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="email" class="hidden">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <div class="mb-4">
      <label for="tel" class="hidden">Number</label>
      <input
        type="tel"
        name="tel"
        id="tel"
        placeholder="Telephone Number"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>

    <button
      type="submit"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-20 rounded focus:outline-none focus:shadow-outline"
    >
      Update
    </button>
  </form>
</template>

<script setup></script>
