<template>
  <div id="not-found-page">
    <div id="container">
      Sorry, this page was not found.
    </div>
  </div>
</template>

<script>
export default {
  created: function() {
    document.title = '404 - Page Not Found'
  }
}
</script>

<style scoped>
#not-found-page {
  height: 100vh;
  background-image: url('https://i.pinimg.com/originals/b5/c4/8a/b5c48aa6bba344fbbe584db1977e2d96.jpg');
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  display: flex;
}

#container {
  opacity: 0.75;
  text-align: center;
  background-color: white;
  width: 33%;
  padding: 16px;
  border: 3px solid #000000;
  border-radius: 5px;
}
</style>