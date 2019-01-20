<template>
  <div id="app">
    <loading :active.sync="league.ready === false"
             :can-cancel="false"
             :is-full-page="true"></loading>
    <Nav></Nav>
    <router-view/>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex';
  import Nav  from './components/Nav';
  import Loading from 'vue-loading-overlay';
  import 'vue-loading-overlay/dist/vue-loading.css';
  export default {

  name: 'App',
    components:{
     Nav,
     Loading
    },
    computed: {
      ...mapState({
        league: state => state.league
      }),
    },
    mounted() {
     this.prepareData();
    },
    methods: {
      ...mapActions('league', {loadData: 'load' }),
      prepareData(){
        this.loadData();
      }
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
