<template>
  <div class="ion-page">
    <top-bar></top-bar>
    <ion-content>
      <ion-grid class="login-grid">
        <ion-row class="login-row" align-items-center justify-content-center>
          <ion-col size-xl="4" size-lg="6" size-md="6" size-sm="7" size-xs="12">
            <ion-card class="card">
              <ion-card-header>
                <ion-card-title class="card-title">Iniciar Sesión</ion-card-title>
              </ion-card-header>
              <ion-card-content class="inputs">
                <form @submit.prevent="login">
                  <ion-item>
                    <ion-label class="subtitle" position="floating">Correo</ion-label>
                    <ion-input
                      class="subtitle"
                      clear-input
                      inputmode="email"
                      required
                      type="email"
                      :value="email"
                      @ionChange="email = $event.target.value"
                    ></ion-input>
                  </ion-item>
                  <ion-item>
                    <ion-label class="subtitle" position="floating">Contraseña</ion-label>
                    <ion-input
                      class="subtitle"
                      clear-input
                      inputmode="password"
                      required
                      type="password"
                      :value="passwd"
                      @ionChange="passwd = $event.target.value"
                    ></ion-input>
                  </ion-item>
                  <ion-grid class="buttons">
                    <ion-row align-items-center justify-content-center>
                      <ion-col siz="12">
                        <ion-button
                          size="large"
                          expand="block"
                          color="secondary"
                          type="submit"
                        >entrar</ion-button>
                      </ion-col>
                      <ion-col size="12">
                        <ion-button
                          size="large"
                          expand="block"
                          color="primary"
                          @click="gotoSignup"
                        >registrarse</ion-button>
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

<script>
import topBar from "../components/topBar.vue";
import foot from "../components/foot.vue";

import app from "../feathers";

export default {
  name: "login",
  components: {
    topBar,
    foot
  },
  data() {
    return {
      email: "",
      passwd: ""
    };
  },
  methods: {
    gotoSignup() {
      this.$router.push("/signup");
    },
    gotoDashboard() {
      const { to } = this.$route.query;

      if (to) {
        this.$router.push(to);
      } else this.$router.push("/dashboard");
    },

    async login() {
      const { email, passwd } = this;

      console.log({ email, passwd });

      try {
        const user = await app.authenticate({
          strategy: "local",
          correo: email,
          password: passwd
        });

        console.log({ user });

        this.gotoDashboard();
      } catch (e) {
        this.$ionic.toastController
          .create({
            header: "Error",
            message: "Por favor, verifique sus credenciales",
            position: "bottom",
            buttons: [
              {
                text: "Ok",
                role: "cancel",
                handler: () => {}
              }
            ]
          })
          .then(a => a.present());
      }
    }
  }
};
</script>

<style>
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
