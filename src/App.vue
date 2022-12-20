<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template> 
<header>
    <nav class="Sidebar">
      <Sidebar />
        <a class="side-link"><RouterLink to="/eggplant">EGG PLANT</RouterLink></a>
        <a class="side-link"><RouterLink to="/kalabasa">KALABASA</RouterLink></a>
        <a class="side-link"><RouterLink to="/kingcrab">KING CRAB</RouterLink></a>
      </nav>
  </header>

  <RouterView />
</template>

<style Lang="scss">
*{
  background-color:alice blueviolet;
}
nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
  header .Sidebar {
    display: flex;
    place-items: flex-start;
    flex-direction: column;
    background-color:orangered;
    color: rgb(15, 14, 14);
    width: calc(10rem + 30px);
    min-height: 100vh;
    margin-top: -2px;
    padding: 20px;
    overflow: hidden;
    z-index: 99;
  }
  .side-link {
    background-color: transparent;
    text-decoration: none;
    margin: 10px 0;
    text-align: right;
    padding: 50px 0;
}  
  button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    z-index: 99;
    transition: color 0.5s ease-out;
  }
</style>
