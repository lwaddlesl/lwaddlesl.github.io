<template>
  <div class="header">
    <router-link to="/">converter</router-link>
    <router-link to="portfolio"> portfolio</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style>
.header {
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 100px;
  background-color: rgb(221, 221, 221);
  align-items: center;
  font-size: 25px;
  border-bottom: 1px solid;
}
a {
  text-decoration: none;
  color: black;
  transition: 0.5s all;
}
a:hover {
  color: green;
}
</style>