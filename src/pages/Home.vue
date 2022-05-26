<template>
  <div id="canvas">
    <board></board>
  </div>
</template>

<script>
import Board from '@/components/Board.vue'

export default {
  components: {
    Board
  },
  data() {
    return {}
  }
}
</script>

<style scoped>
#canvas {
  height: 100vh;
}
</style>