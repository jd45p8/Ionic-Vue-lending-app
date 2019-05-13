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
      <ion-title id="title">
        Crear Cuenta
      </ion-title>
      <form padding-right>
        <ion-row>
            <ion-col/>
            <ion-col align-items-center size="9">
                <ion-item>
                    <ion-label position="floating">Nombre</ion-label>
                    <ion-input></ion-input>
                </ion-item>
            </ion-col>
            <ion-col/>
        </ion-row>
        <ion-row>
            <ion-col/>
            <ion-col align-items-center size="9">
                <ion-item>
                    <ion-label position="floating">Email</ion-label>
                    <ion-input type="email"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col/>
        </ion-row>
        <ion-row>
            <ion-col/>
            <ion-col align-items-center size="9">
                <ion-item>
                    <ion-label position="floating">Usuario</ion-label>
                    <ion-input></ion-input>
                </ion-item>
            </ion-col>
            <ion-col/>
        </ion-row>
        <ion-row>
            <ion-col/>
            <ion-col align-items-center size="9">
                <ion-item>
                    <ion-label position="floating">Contraseña</ion-label>
                    <ion-input type="password"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col/>
        </ion-row>
        <ion-row>
            <ion-col/>
            <ion-col align-items-center size="9">
                <ion-item>
                    <ion-label position="floating">Repetir contraseña</ion-label>
                    <ion-input type="password"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col/>
        </ion-row>
        <ion-row>
          <ion-col/>
          <ion-col align-items-center size="5">
            <!-- <ion-button id="button"
              color="primary" 
              expand="block" 
              [disabled]="!userForm.valid" 
              (click)="loginForm()">Crear Cuenta</ion-button> -->
              <ion-button id="button" type="submit">Crear cuenta</ion-button>
          </ion-col>
          <ion-col/>
        </ion-row>
      </form>
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

</style>


<script>
// import foot from "../components/foot.vue";

export default {
  name: "signup",
//   components: {foot}
};
</script>
