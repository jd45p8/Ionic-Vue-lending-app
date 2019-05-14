<template>
  <div class="ion-page">
    <ion-content>
      <ion-card class="card">
        <ion-card-header>
          <ion-card-title class="card-title">Formulario de préstamo</ion-card-title>
        </ion-card-header>
        <ion-card-content class="inputs">
          <ion-item>
            <ion-label class="subtitle" position="floating">Monto en pesos</ion-label>
            <ion-input
              type="number"
              inputmode="numeric"
              class="subtitle"
              @ionInput="monto = $event.target.value;"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label class="subtitle" position="floating">Plazo en meses</ion-label>
            <ion-input
              type="number"
              inputmode="numeric"
              class="subtitle"
              @ionInput="plazo = $event.target.value;"
            ></ion-input>
          </ion-item>
          <ion-item>
            <ion-label class="subtitle" position="floating">Número de pagos</ion-label>
            <ion-input
              type="number"
              inputmode="numeric"
              class="subtitle"
              @ionInput="cantPagos = $event.target.value;"
            ></ion-input>
          </ion-item>
          <ion-grid class="buttons">
            <ion-row align-items-center justify-content-center>
              <ion-col size="6">
                <ion-button size="large" expand="block" color="primary">Solicitar</ion-button>
              </ion-col>
              <ion-col size="6">
                <ion-button size="large" expand="block" color="danger" @click="close()">Cancelar</ion-button>
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-content>
      </ion-card>
    </ion-content>
  </div>
</template>

<style scoped>
ion-button {
  font-family: "Rubik", sans-serif;
}

.ion-page {
  padding-top: 5vh;
}

.card {
  padding-top:10px;
}

.card-title {
  text-align: center;
  font-size: 1.8rem;
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
export default {
  name: "Modal",
  data() {
    return {
      content: "Content"
    };
  },
  methods: {
    close() {
      this.$ionic.modalController.dismiss();
    }
  }
};
</script>