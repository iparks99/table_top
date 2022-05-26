<template>
  <div id="phaser-container">
    <ion-phaser
      id="game-board"
      v-bind:game.prop='game'
      v-bind:initialize.prop='initialize'
    />
  </div>
</template>

<script>
import Phaser from "phaser"

export default {
  data() {
    return {
      initialize: true,
      game: {
        width: "100%",
        height: "3000",
        type: Phaser.AUTO,
        // scale: {
        //   mode: Phaser.Scale.Fit,
        //   autoCenter: Phaser.Scale.CENTER_BOTH,
        // },
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A")
          },
          create() {
            this.helloWorld = this.add.text(
              this.cameras.main.centerX,
              this.cameras.main.centerY,
              "Hello World",
              { font: "40px Arial", fill: "#ffffff" }
            )
            this.helloWorld.setOrigin(0.5)
          },
          update() {
            this.helloWorld.angle += 1
          }
        // },
        // callbacks: {
        //   postBoot: function (game) {
        //     game.canvas.style.width = '100%';
        //     game.canvas.style.height = '100%';
        //   }
        }
      }
    }
  },
  methods: {
    initializeGame() {
      this.initialize = true
    }
  }
}
</script>

<style scoped>
#phaser-container, #game-board {
  height: 100vh;
}

canvas {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>