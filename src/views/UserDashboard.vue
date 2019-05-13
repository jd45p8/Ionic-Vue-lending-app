<template>
  <div id="app">
    <ion-app>
      <ion-tabs>
        <ion-tab tab="dashboard">
          <user-home></user-home>
        </ion-tab>
        
        <ion-tab tab="lending">
          <user-lending></user-lending>
        </ion-tab>

        <ion-tab tab="settings">
          <user-settings></user-settings>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="dashboard">
            <ion-label>Inicio</ion-label>
            <ion-icon name="home"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="lending">
            <ion-label>Préstamo</ion-label>
            <ion-icon name="cash"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="settings">
            <ion-label>Ajustes</ion-label>
            <ion-icon name="settings"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-app>
  </div>
</template>

<script>
import UserHome from './UserHome.vue';
import UserLending from './UserLending.vue';
import UserSettings from './UserSettings.vue'

export default {
  name: 'userDashboard',
  components:{
    UserHome,
    UserLending,
    UserSettings
  },
  methods: {

  }
}
</script>

