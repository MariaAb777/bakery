<template>
    <div class="bg-white">
      <div class="relative mb-4">
        <img :src="image" alt="Product Image" class="rounded-md w-[480px] h-[450px] object-cover" />
      </div>
      <div class="text-sm font-semibold text-gray-700">
        {{ productName }}
      </div>
  
      <div class="text-gray-500 text-xs mb-2">
        {{ description }}
      </div>
  
      <div class="flex items-center mb-2">
        <select class="text-xs rounded-md p-1 mr-2 text-black bg-[#CF8C0B1A] bg-opacity-40" v-model="selectedSize">
          <option v-for="size in sizes" :key="size">{{ size }}</option>
        </select>
        <div class="flex items-center">
          <button @click="decrement" class="text-sm font-bold px-2 bg-orange bg-opacity-20 text-orange rounded-l-md">-</button>
          <div class="text-sm px-2 border-t border-b border-gray-300">{{ quantity }}</div>
          <button @click="increment" class="text-sm font-bold px-2 bg-orange bg-opacity-20 text-orange rounded-r-md">+</button>
        </div>
        <div class="ml-auto text-sm font-bold">
          ${{ price * quantity }}
        </div>
      </div>
  
      <button @click="addToCart" class="w-full bg-orange text-black bg-opacity-20 rounded-md py-2 text-sm font-bold">
        <span class="text-orange">+</span> Add to Cart
      </button>
    </div>
  </template>
  
  <script setup>
  import { ref, defineProps } from 'vue'
  
  const props = defineProps({
    image: {
      type: String,
      required: true
    },
    productName: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    sizes: {
      type: Array,
      required: true
    }
  })
  
  const quantity = ref(1)
  const selectedSize = ref('Small')
  
  function increment() {
    quantity.value++
  }
  
  function decrement() {
    if (quantity.value > 1) {
      quantity.value--
    }
  }
  
  function addToCart() {
    alert(`Added ${quantity.value} item(s) of ${props.productName} to cart.`)
  }
  </script>
  