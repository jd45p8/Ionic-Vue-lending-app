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
      </ion-toolbar>
    </ion-header>
    <ion-content class="background">
      <div class="background">
        <!--Logo de la aplicación-->
        <div id="logo" padding>
          <img src="../assets/logo.svg">
          <a padding>Banqy</a>
        </div>
        <ion-card>
                <div id="back-card-1">
                  <img src="../assets/target.svg" padding>
                </div>
                <ion-card-header>
                  <ion-card-title class="card-title">Nuestra misión</ion-card-title>
                  <ion-card-subtitle
                    class="card-subtitle"
                  >Somos una empresa financiera localizada en Colombia que realiza prestamos rápidos para todos nuestros clientes, con el mejor apoyo para el crecimiento y progreso de sus clientes. Una empresa que cumple con los objetivos de liderazgon con eficiencia, rentabilidad, utilidad y generacion de valor que esperan los accionistas.</ion-card-subtitle>
                </ion-card-header>
        </ion-card>
        <ion-card>
                <div id="back-card-1">
                  <img src="../assets/eye.svg" padding>
                </div>
                <ion-card-header>
                  <ion-card-title class="card-title">Nuestra visión</ion-card-title>
                  <ion-card-subtitle
                    class="card-subtitle"
                  >Somos una empresa sostenible y lider en la industria, con expectativas de crecimiento altas que crece con el progreso de sus clientes, de su equipo humano, de sus accionistas y del país.</ion-card-subtitle>
                </ion-card-header>
        </ion-card>
      <!--Se incluye el footer de la aplicación-->
      <foot></foot>
      </div>
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
  font-family: "Rubik", sans-serif;
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

.card-title {
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
  text-align: justify;
  text-justify: inter-word;
}

.card-subtitle {
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem;
  text-align: justify;
  text-justify: inter-word;
}
</style>


<script>
  import foot from "../components/foot.vue";
  export default {
    name: "about",
    components: {foot}
  };
</script>
