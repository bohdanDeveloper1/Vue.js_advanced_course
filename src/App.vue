<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <b-container>
      <b-alert v-shadow show>Default Alert</b-alert>
    </b-container>

    <b-container class="alert-container">
      <b-alert v-shadow.fiolet show>Default Alert</b-alert>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
