<template>
  <div>
    <ion-grid>
      <ion-row style="width: 100%">
        <ion-col size="12" size-md="6">
          <ion-card v-for="loan in loans" :key="loan.id">
            <ion-card-header>
              <ion-card-subtitle>{{ loan.id }} / {{ estado(loan) }}</ion-card-subtitle>
              <ion-card-title>${{ loan.acuerdo.monto }}</ion-card-title>
            </ion-card-header>

            <ion-card-content>{{ loan.pagos.length }} pagos</ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script>
import { loans, getUser } from "../feathers";

export default {
  data: () => ({
    loans: []
  }),

  methods: {
    async getLoans({ userId }) {
      const { data } = await loans.find({
        userId
      });

      this.loans = data;
    },

    estado({ estado }) {
      switch (estado) {
        case "esperando":
          return "EN ESPERA";
        case "aprobado":
          return "APROBADO";
        case "en_mora":
          return "EN MORA";
        case "rechazado":
          return "RECHAZADO";
        case "pagado":
          return "PAGADO";
      }
    }
  },

  async mounted() {
    const user = await getUser();
    await this.getLoans(user);
  }
};
</script>
