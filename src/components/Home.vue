<template>
  <NavBar />
  <main>
    <div class="home">
      <div class="hm-container">
        <h1>
          Where Every Bite Transcends Taste and Becomes a Symphony of Luxury
        </h1>
        <article>
          <p>
            Discover a Symphony of Flavors Crafted with Precision and Presented
            in a Setting of Unmatched Luxury. Elevate Your Dining Experience at
            Noir Nosh.
          </p>
          <router-link to="/reservation" class="reservation"
            >Book a reservation</router-link
          >
          <router-link to="/ourmenu" class="ourmenu"
            >Explore our menu</router-link
          >
        </article>
      </div>
      <img
        src="../assets/table.jpg"
        alt="Table du restaurant"
        width="1512"
        height="700"
        max-heigth="720
      "
      />
    </div>
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
.main {
  width: 1fr;
}

.home {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 140px;
  width: 70%;
  margin: 0 auto;
}

.hm-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 25px;
}

.hm-container h1 {
  font-family: 'General Sans', sans-serif;
  font-size: 48px;
  color: #090909;
  font-weight: 700;
  line-height: 58px;
  width: 40%;
}

.hm-container article {
  width: 35%;
}

.hm-container article p {
  font-family: 'General Sans', sans-serif;
  font-size: 18px;
  color: #090909;
  font-weight: 400;
  line-height: 28px;
  text-align: justify;
}

.reservation {
  display: inline-block;
  padding: 12px 14px;
  background-color: #090909;
  color: white;
  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  text-decoration: none;
  margin-top: 10px;
  margin-right: 10px;
}

.reservation:hover {
  transition: 0.3s all;
  font-weight: 600;
}

.ourmenu {
  display: inline-block;
  padding: 12px 14px;
  background-color: transparent;
  color: #090909;
  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  text-decoration: none;
  border: solid 1.5px #090909;
}

.ourmenu:hover {
  background-color: #090909;
  border: none;
  color: white;
  transition: 0.3s all;
  font-weight: 600;
}

.hm-container img {
  width: 100%;
  object-fit: ;
}
</style>
