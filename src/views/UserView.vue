<template>
  <div id="app">
    <ion-app>
      <ion-tabs>
        <ion-tab tab="home">
          <router-view/>
        </ion-tab>
        
        <ion-tab tab="about">
          <router-view/>
        </ion-tab>

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="home">
            <ion-label>Inicio</ion-label>
            <ion-icon name="home"></ion-icon>
          </ion-tab-button>
          <ion-tab-button tab="about">
            <ion-label>Acerca de</ion-label>
            <ion-icon name="settings"></ion-icon>
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-app>
  </div>
</template>

<script>
export default {
  name: 'user-view',
  methods: {
    doRefresh: function(event){
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  }
}
</script>

