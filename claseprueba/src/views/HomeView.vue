<!-- src/views/Home.vue -->
<template>
    <MainLayout>
      <ApiButton />
      <HolaMundo />
    </MainLayout>
  </template>
  
  <script setup>
  import MainLayout from '../layouts/MainLayout.vue';
  import ApiButton from '../components/ApiButtom.vue';
  import HolaMundo from '../components/HelloWorld.vue';
  </script>
  
  <style scoped>
  /* Add view-specific styles here */
  </style>
  