<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button id="home-button">
            <img src="../assets/logo.svg">
            <ion-title>BANQY</ion-title>
          </ion-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button>
            <ion-icon slot="icon-only" name="information-circle-outline"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="background">
      <div class="background">
        <div id="logo" padding>
          <img src="../assets/logo.svg">
          <a padding>Banqy</a>
        </div>
        <ion-card>
          <div id="back-card-1">
            <img src="../assets/clock.svg" padding>
          </div>          
          <ion-card-header>
            <ion-card-title>Tiempo real</ion-card-title>
            <ion-card-subtitle>Encuentra tu información médica en tiempo real y actualizada.</ion-card-subtitle>
          </ion-card-header>
        </ion-card>

        <ion-card>
          <div id="back-card-2">
            <img src="../assets/minimize-2.svg" padding>
          </div>          
          <ion-card-header>
            <ion-card-title>Sistema centralizado</ion-card-title>
            <ion-card-subtitle>Citas médicas a todas partes en un sólo lugar.</ion-card-subtitle>
          </ion-card-header>
        </ion-card>

        <ion-card>
          <div id="back-card-3">
            <img src="../assets/user-check.svg" padding>
          </div>          
          <ion-card-header>
            <ion-card-title>Intuitivo</ion-card-title>
            <ion-card-subtitle>Trabajamos para hacer tu vida más fácil.</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
        </div>
        <foot></foot>
    </ion-content>
  </div>
</template>

<style scoped>
#logo {
  display: flex;
  flex-direction: column;
}
#logo img {
  height: 25vh !important;
  align-self: center;
}

#logo a {
  color: #2068eb;
  align-self: center;
  font-size: 6rem;
  font-weight: 900;
  padding-bottom: 0px;
  margin-bottom: 0px;
  font-family: "Lato", sans-serif;
  font-family: "Nunito", sans-serif;
}

#home-button {
  font-family: "Lato", sans-serif;
  font-family: "Nunito", sans-serif;
}

.background {
  background-image: url(../assets/header-bg-right.svg);
  background-size: 100%;
  background-repeat: no-repeat;
}

ion-card img {
  max-height: 50%;
  height: 200px;
  object-fit: fill;  
}

#back-card-1 {
  background-color: #2cd1ff;
}

#back-card-2 {
  background-color: #18b0ff;
}

#back-card-3 {
  background-color: #1a94fa;
}

</style>


<script>
import foot from "../components/foot.vue";

export default {
  name: "home",
  components: {foot}
};
</script>
