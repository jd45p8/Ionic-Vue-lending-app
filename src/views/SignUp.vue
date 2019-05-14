<template>
  <div class="ion-page">
    <top-bar></top-bar>
    <ion-content>
      <ion-grid class="signup-grid">
        <ion-row class="signup-row" align-items-center justify-content-center>
          <ion-col size-xl="4" size-lg="6" size-md="6" size-sm="7" size-xs="12">
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title class="card-title">Crear Cuenta</ion-card-title>
              </ion-card-header>
              <ion-card-content class="inputs">
                <form>
                  <ion-item>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input required type="text"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input required type="email"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Nombre de Usuario</ion-label>
                    <ion-input required type="text"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input required type="password"></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label position="floating">Repetir contraseña</ion-label>
                    <ion-input required type="password"></ion-input>
                  </ion-item>
                  <ion-grid class="buttons">
                    <ion-row align-items-center justify-content-center>
                      <ion-col size="12">
                        <ion-button
                          size="large"
                          expand="block"
                          color="primary"
                          type="submit"
                        >Crear cuenta</ion-button>
                      </ion-col>
                    </ion-row>
                  </ion-grid>
                </form>
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
ion-button {
  font-family: "Rubik", sans-serif;
}

.card {
  padding-top: 15px;
}

.signup-grid {
  min-height: 78vh;
}

.signup-row {
  margin-top: 8%;
}

.card-title {
  text-align: center;
  font-size: 2.2rem;
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
import foot from "../components/foot.vue";
import topBar from "../components/topBar.vue";

export default {
  name: "signup",
  components: {
    foot,
    topBar
  }
};
</script>
