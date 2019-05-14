<template>
  <div class="ion-page">
    <ion-fab vertical="bottom" horizontal="end" slot="fixed">
      <ion-fab-button  @click="openUserLendingModal">
        <ion-icon name="add"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </div>
</template>

<script>
import UserLendingModal from "../modals/UserLendingModal.vue";

export default {
  name: "userLending",
  methods: {
    openUserLendingModal() {
      return this.$ionic.modalController.create({
        component: UserLendingModal
      }).then(m => m.present())
    }
  }
};
</script>
