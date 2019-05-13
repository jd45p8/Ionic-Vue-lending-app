<template>
  <div class="ion-page">
    <top-bar></top-bar>
    <ion-content>
      <ion-grid class="login-grid">
        <ion-row class="login-row" align-items-center justify-content-center>
          <ion-col size-xl="4" size-lg="6" size-md="6" size-sm="7" size-xs="12">
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title class="card-title">Crear Cuenta</ion-card-title>
              </ion-card-header>
              <ion-card-content class="inputs">
		<ion-item>
                   <ion-label position="floating">Nombre</ion-label>
                   <ion-input></ion-input>
                </ion-item>
		<ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="email" type="email" inputmode="email"
						@ionInput="email = $event.target.value;"></ion-input>
                </ion-item>
		<ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password" inputmode="password" class="subtitle"
                  @ionInput="passwd = $event.target.value;"></ion-input>
                </ion-item>
				<ion-item>
                    <ion-label position="floating">Repetir contraseña</ion-label>
                    <ion-input type="password"></ion-input>
                </ion-item>
                <ion-grid class="buttons">
                  <ion-row align-items-center justify-content-center>
                    <ion-col siz="12">
                      <ion-button size="large" expand="block" color="secondary" @click="gotoDashboard">Crear</ion-button>
                    </ion-col>
                  </ion-row>
                </ion-grid>
              </ion-card-content>
            </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>
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
  font-family: 'Rubik', sans-serif;
}

#home-button {
  font-family: 'Rubik', sans-serif;
}

#title{
  margin-top: 1em;
  padding:0.5em;
  text-align: center;
}

#button{
  margin-top: 2em;
  display: block;
  margin-right: auto;
  margin-left: auto;
}

.label-floating{
  color:#838383;
}

.background {
  background-image: url(../assets/header-bg-right.svg);
  background-size: 100%;
  background-repeat: no-repeat;
}
ion-button {
  font-family: "Rubik", sans-serif;
}

.card {
  padding-top: 15px;
}

.login-grid {
  min-height: 78vh;
}

.login-row {
  margin-top: 8%;
}

.card-title {
  text-align: center;
  font-size: 2rem;
  font-family: "Rubik", sans-serif;
}

.subtitle {
  font-family: "Rubik", sans-serif;
  font-size: 1.2rem !important;
  color: black;
}

.input {
  width: 100%;
  font-family: "Rubik", sans-serif;
}

.buttons {
  margin-top: 15px;
}

.inputs {
  margin-bottom: 5px;
}

</style>


<script>
import topBar from "../components/topBar.vue";
import foot from "../components/foot.vue";

export default {
  name: "signup",
  components: {
    topBar,
    foot
  },
  data() {
    return {
      email: "",
      passwd: ""
    }
  },
  methods: {
    gotoDashboard() {
      
    }
  }
};
</script>
