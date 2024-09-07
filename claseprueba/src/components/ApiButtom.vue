<!-- src/components/ApiButton.vue -->
<template>
    <div>
      <button @click="fetchData">Fetch Data</button>
     
    </div>
    <div v-if="data">
        hola

    </div>
  </template>
  
  <script setup>
  import ApiService from '../services/ApiService';
  import { ref } from 'vue';
  const data = ref(null);
  
  const fetchData = async () => {
    try {
      const response = await ApiService.getData();
      data.value = response.data;
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  </script>
  
  <style scoped>
  /* Add component-specific styles here */
  </style>
  