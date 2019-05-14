<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button @click="gotoHome()" id="home-button">
          <img src="../assets/logo.svg">
          <ion-title>BANQY</ion-title>
        </ion-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button @click="gotoAbout()">
          <ion-icon slot="icon-only" name="information-circle-outline"></ion-icon>
        </ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<style>
#home-button {
  font-family: 'Rubik', sans-serif;
}
</style>


<script>
export default {
  name: "topBar",
  methods: {
    gotoHome() {
      this.$router.push("/home");
    },
    gotoAbout() {
      this.$router.push("/about");
    }
  }
}
</script>

