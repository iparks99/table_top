<template>
  <div id="register-page">
    <div id="register">
      <h2>Register a new account</h2>

      <form @submit="register">
        <label for="user"><b>Choose your username</b></label>
        <input type="text" placeholder="Enter username" v-model="username" name="user" required>
        
        <label for="pass1"><b>Enter your password</b></label>
        <input type="password" placeholder="Enter password" v-model="password1" name="pass1" required>

        <label for="pass2"><b>Enter your password again</b></label>
        <input type="password" placeholder="Enter password" v-model="password2" name="pass2" required>

        <button id="register-btn" type="submit">Register</button> <br/>

        <p id="error-text"></p>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { sha256hashPassword } from '@/auth/authGuard'

export default {
  created: function() {
    document.title = 'Register'
  },
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
    }
  },
  methods: {
    register: async function(e) {
      e.preventDefault()
      if (this.password1 !== this.password2) {
        document.getElementById('error-text').textContent = 'Passwords do not match!'
        return
      }

      // Hash password so we're not sending it as plaintext!
      const password_digest = await sha256hashPassword(this.password1)

      axios.post('/register', {
        username: this.username,
        password: password_digest,
      }).then((response) => {
        console.log(response)
        if (response.data && response.data.success) {
          this.$router.push('/login')
        }
      }).catch(function(error) {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
#register-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('http://pavbca.com/walldb/original/8/9/e/148800.jpg');
  background-repeat: no-repeat;
}

#register {
  background-color: white;
  width: 33%;
  padding: 16px;
  border: 3px solid #000000;
  border-radius: 5px;
}

#register > form > * {
  margin: 3px;
}

#register-btn {
  width: 100%;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
}

#register-btn:hover {
  opacity: 0.5;
}

#error-text {
  font-size: 11px;
  color: red;
  text-align: center;
}

input[type=text], input[type=password] {
  width: 100%;
}
</style>