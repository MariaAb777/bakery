<template>
    <section class="flex flex-col space-y-20 bg-cover bg-center bg-white py-20">
      <div class=" inset-0 flex flex-col justify-center items-center text-center space-y-4">
        <p class="text-[#CF8C0B]">⎯ patisserie ⎯</p>
        <h1 class="text-7xl text-blackColor">Lorem Ipsum</h1>
        <div class="w-5/12 space-y-8">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <!-- Follow Us Section -->
        <div class="flex gap-2 items-center">
          <span class="font-bold">Follow Us</span>
          <span class="text-orange">━━━━</span>
          <img src="../assets/fb.png" alt="FB" width="20px" height="10px" />
          <img src="../assets/instagram.png" alt="Instagram" width="20px" height="10px" />
        </div>
      </div>
      <div class="w-full flex justify-center flex-wrap gap-4">
        <ProductCard
          v-for="(product, index) in products"
          :key="index"
          :image="product.image"
          :productName="product.name"
          :description="product.description"
          :price="product.price"
          :sizes="product.sizes"
        />
      </div>
    </section>
  </template>
  
  <script setup>
  import ProductCard from './ProductCard.vue'
  
  const products = [
    {
      image: 'https://pngmagic.com/product_images/Gold-Sand-solid-color-background.jpg',
      name: 'Pain au Cranberry',
      description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
      price: 10.0,
      size: 'Small',
      sizes: ['Small', 'Medium', 'Large'],
    },
    {
      image: 'https://pngmagic.com/product_images/Gold-Sand-solid-color-background.jpg',
      name: 'Pain au Cranberry',
      description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
      price: 5.0,
      sizes: ['Small', 'Medium', 'Large'],
    },
    {
      image: 'https://pngmagic.com/product_images/Gold-Sand-solid-color-background.jpg',
      name: 'Pain au Cranberry',
      description: 'A delightful spiral pastry filled with light French vanilla cream and studded with seasonal berries.',
      price: 2.5,
      sizes: ['Small', 'Medium', 'Large'],
    }
    
  ]
  </script>
  