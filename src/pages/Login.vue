<template>
  <div id="login-page">
    <div id="login">
      <h1 style="text-align: center;">Login</h1>

      <form>
        <label for="user"><b>Username</b></label>
        <input type="text" placeholder="Enter username" name="user" required>
        
        <label for="pass"><b>Password</b></label>
        <input type="password" placeholder="Enter password" name="pass" required>
        <p class="small-font"><a href="" onclick="event.preventDefault();" @click="forgotPassword();">Forgot your password?</a></p>

        <button id="login-btn" type="submit">Login</button> <br/>
        <label><input type="checkbox" checked="checked" name="remember"> Remember me</label> <br />

        <p>New here? Click <a href="register">here</a> to register.</p>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  created: function() {
    document.title = 'Login'
  },
  data() {
    return {}
  },
  methods: {
    forgotPassword: function() {
      alert("Damn that's tough buddy. Better contact the server admins.")
    }
  }
}
</script>

<style scoped>
#login-page {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url('http://pavbca.com/walldb/original/8/9/e/148800.jpg');
  background-repeat: no-repeat;
}

#login {
  background-color: white;
  width: 33%;
  padding: 16px;
  border: 3px solid #000000;
  border-radius: 5px;
}

#login > form > * {
  margin: 3px;
}

#login-btn {
  width: 100%;
  background-color: red;
  color: white;
  border: none;
}

.small-font {
  font-size: 11px;
}

input[type=text], input[type=password] {
  width: 100%;
}
</style>