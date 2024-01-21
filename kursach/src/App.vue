<script setup>
import Header from './components/header.vue'
</script>

<template>
  <div id="app" class="app">
    <router-view />
  </div>
<Header/>
</template>

<style>
.app {
  position: fixed;
  top: 55px;
  left: 0;
  width: 100%;
  z-index: 9999;
  margin-bottom: 10px;
}
</style>
