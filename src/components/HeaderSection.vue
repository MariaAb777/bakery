<template>
    <header class="flex justify-between items-center px-8">
      <div class="flex items-center space-x-4">
      <button>
        <img src="../assets/icon.png" alt="Icon" width="102px" height="89px" />
      </button>
        <ul class="flex space-x-6">
          <li v-for="item in menuItems" :key="item" class="hover:underline cursor-pointer">
            {{ item }}
          </li>
        </ul>
      </div>
      <button class="bg-white p-3 border-2 border-dashed relative">
        <img src="../assets/shop.png" alt="Shop Icon" class="cursor-pointer"  width="20px" height="20px"/>
        <div class="w-6 h-6  bg-black rounded-full text-white absolute -top-4 -right-3">{{ cartItemCount }}</div>
      </button>
    </header>
  </template>
  
  <script setup>

  import { ref } from 'vue';

  const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']
  const cartItemCount = ref(8) // Example cart item count

  </script>
  