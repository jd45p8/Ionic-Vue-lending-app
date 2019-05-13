<template>
  <div id="app">
    <ion-app>
      <ion-vue-router/>  
    </ion-app> 
  </div>
</template>

<script>

export default {
  name: 'app',
  data: () => {
    return {
      IonicRefreshIcon: "dynamicIcon",
      IonicRefreshMessage: "refreshMessage"
    }
  },
  methods: {
    doRefresh: function(event){
      setTimeout(() => {
        event.target.complete();
      }, 2000);
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Rubik');

#app {
  font-family: 'Rubik', sans-serif;
}
</style>


