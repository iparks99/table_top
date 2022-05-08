<template>
  <div id="register-page">
    <div id="register">
      <h2>Register a new account</h2>

      <form>
        <label for="user"><b>Choose your username</b></label>
        <input type="text" placeholder="Enter username" name="user" required>
        
        <label for="pass1"><b>Enter your password</b></label>
        <input type="password" placeholder="Enter password" name="pass1" required>

        <label for="pass2"><b>Enter your password again</b></label>
        <input type="password" placeholder="Enter password" name="pass2" required>

        <button id="register-btn" type="submit">Register</button> <br/>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  created: function() {
    document.title = 'Register'
  },
  data() {
    return {}
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
}

input[type=text], input[type=password] {
  width: 100%;
}
</style>