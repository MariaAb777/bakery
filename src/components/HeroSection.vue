<template>
  <section class="relative h-screen bg-cover bg-center">
    <div class="absolute inset-0 flex flex-col justify-center items-center text-center space-y-4">
      <p class="text-[#CF8C0B]">⎯ {{ greeting }} ⎯</p>
      <h1 class="text-7xl text-blackColor">{{ title }}</h1>
      <h1 class="text-7xl text-blackColor">
        {{ subtitle }} <span class="font-bold">{{ highlight }}</span>
      </h1>
      <div class="w-5/12">
        {{ description }}
      </div>
      <button class="px-6 py-2 bg-orange bg-opacity-10 text-blackColor border border-orange font-bold">
        {{ buttonText }} <span class="text-orange">→</span>
      </button>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const greeting = ref('bonjour')
const title = ref('Serving Baked')
const subtitle = ref('Goods')
const highlight = ref('Every Day')
const description = ref('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.')
const buttonText = ref('Shop Now')
</script>
