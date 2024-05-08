<template>
  <header>
    <div class="nav-container">
      <h1>NOIR NOSH</h1>
      <nav>
        <router-link to="/home" class="nav-link">Home</router-link>
        <router-link to="/ourmenu" class="nav-link">Our Menu</router-link>
        <router-link to="/reservation" class="nav-link"
          >Reservation</router-link
        >
      </nav>
      <router-link v-if="!isLoggedIn" to="/signup" class="router-link">
        Sign Up
      </router-link>
      <router-link v-else to="/profile" class="router-link">
        Profile
      </router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const userInfo = localStorage.getItem('user-info');
      this.isLoggedIn = !!userInfo;
    },
  },
};
</script>

<style>
header {
  width: 100%;
  padding: 48px 140px;
}
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-container h1 {
  margin: 0;
  font-size: 24px;
}

.nav-container nav {
  display: flex;
  justify-content: space-between;
  width: 15%;
}

.nav-link {
  text-decoration: none;
  color: #888888;
  font-family: 'General Sans', sans-serif;
  font-size: 0.8em;
}

.nav-link:hover {
  color: #090909;
  font-weight: 600;
}

.router-link {
  display: inline-block;
  padding: 12px 14px;
  background-color: transparent;
  color: #090909;
  font-family: 'General Sans', sans-serif;
  font-size: 16px;
  text-decoration: none;
  border: solid 1.5px #090909;
}

.router-link:hover {
  background-color: #090909;
  border: none;
  color: white;
  transition: 0.3s all;
  font-weight: 600;
}
</style>
