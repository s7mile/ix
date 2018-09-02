<template>
  <div id="kakaoWrap">
    <app-header></app-header>
    <section>  
      <router-view/>
    </section>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import appHeader from './components/common/header.vue'
  import appFooter from './components/common/footer.vue'

  export default {
    name: 'App',
    components: {appHeader, appFooter}
  }
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
