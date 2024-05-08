<template>
  <div class="container">
    <h1>NOIR NOSH</h1>

    <h2>Connexion</h2>
    <div class="register">
      <input
        type="text"
        v-model="name"
        id="name"
        placeholder="Monsieur Exemple"
      />
      <input
        type="email"
        v-model="email"
        id="email"
        placeholder="entrevotremail@exemple.com"
      />
      <input
        type="password"
        v-model="password"
        id="password"
        placeholder="Mot de passe"
      />

      <button v-on:click="login">LogIn</button>
      <button v-on:click="signUp">Sign Up</button>
      <p v-if="errorMessage">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'SignUp',
  data() {
    return {
      name: '',
      email: '',
      password: '',
      errorMessage: '',
    };
  },
  methods: {
    async signUp() {
      try {
        let result = await axios.post('http://localhost:3000/users', {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        console.warn(result);

        if (result.status === 201) {
          localStorage.setItem('user-info', JSON.stringify(result.data));
          this.$router.push({ name: 'home' });
        }
      } catch (error) {
        if (error.response && error.response.status === 409) {
          this.errorMessage =
            'This email is already registered. Please log in.';
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
        }
      }
    },
    async login() {
      let result = await axios.post('http://localhost:3000/users/login', {
        email: this.email,
        password: this.password,
      });

      console.warn(result);

      if (result.status === 200) {
        localStorage.setItem('user-info', JSON.stringify(result.data));
        this.$router.push({ name: 'home' });
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 90vh;
}
h1 {
  font-family: 'Playfair Display', serif;
  font-size: 3em;
  color: #090909;
  font-weight: 900;
  margin-bottom: 50px;
}

h2 {
  font-family: 'General Sans', sans-serif;
  font-size: 1.5em;
  color: #090909;
  font-weight: 700;
  margin-bottom: 50px;
}

.register input {
  width: 70%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #090909;
  border-radius: 5px;
  font-family: 'General Sans', sans-serif;
}

.register input:focus {
  outline: none;
  border: 1px solid #393939;
  transition: 0.3s all;
  color: #090909;
}

.register button {
  width: 70%;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #090909;
  color: white;
  border: none;
  border-radius: 5px;
  font-family: 'General Sans', sans-serif;
  cursor: pointer;
  transition: 0.3s all;
  margin-bottom: 20px;
}

.register button:hover {
  background-color: #888888;
  font-weight: 500;
  transition: 0.3s all;
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
}
</style>
