<template>
    <div class='layout'>
      <main class='page-content'>
        <Nuxt />
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Default'
  }
  </script>
  
  <style scoped>
  .layout {
    background: #FFFFFF;
    justify-content: space-between;
    min-height: 100vh;
  }
  .page-content {
    flex: 1;
  }
  </style>
  