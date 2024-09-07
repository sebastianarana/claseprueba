<!-- src/layouts/MainLayout.vue -->
<template>
    <div>
      <header>
        <h1>My Vue App</h1>
      </header>
      <main>
        <slot></slot> <!-- Aquí se renderizan los componentes hijos -->
      </main>
      <footer>
        <p>Footer Content</p>
      </footer>
    </div>
  </template>
  
  <script setup>

  </script>
  
  <style scoped>
  /* Add layout-specific styles here */
  header {
    background-color: #f8f9fa;
    padding: 10px;
  }
  footer {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
  }
  </style>
  