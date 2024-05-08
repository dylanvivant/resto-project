<template>
  <NavBar />
  <main>
    <div class="home"></div>
  </main>
</template>

<script>
import NavBar from './NavBar.vue';

export default {
  name: 'HomePage',
  components: {
    NavBar,
  },
};
</script>

<style>
.home {
  width: 70%;
}

.home p {
  margin-bottom: 20px;
  font-family: 'General Sans', sans-serif;
  font-size: 1.2em;
  color: #090909;
  text-align: justify;
}
</style>
