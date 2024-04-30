<template>
  <div class="container">
    <h1>NOIR NOSH</h1>
    <div class="home">
      <p>
        Welcome to Noir Nosh! We are a food delivery service that specializes in
        delivering food from black-owned restaurants. We are proud to support
        black-owned businesses and provide our customers with delicious food.
      </p>
      <p>
        Sign up today to start ordering from your favorite black-owned
        restaurants!
      </p>

      <router-link to="/signup" class="router-link">Sign Up</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
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

.router-link {
  display: inline-block;
  padding: 10px 20px;
  margin-top: 20px;
  background-color: #090909;
  color: white;
  font-family: 'General Sans', sans-serif;
  font-size: 1.2em;
  text-decoration: none;
  border-radius: 5px;
}

.router-link:hover {
  background-color: #393939;
  transition: 0.3s all;
  font-weight: 700;
}
</style>
