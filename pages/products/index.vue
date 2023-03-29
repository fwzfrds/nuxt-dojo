<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="item in products" :key="item.id">
        <ProductCard :product="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  layout: "products",
});

// fetch products
const { data: products } = await useFetch("https://fakestoreapi.com/products");

useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});
</script>

<style scoped>
</style>