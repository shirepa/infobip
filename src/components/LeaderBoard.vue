<template>
<div>
  <h2>
    Clubs - English Premier ligue 16/17
</h2>
  <b-table class="leaderTable" striped hover :items="clubs" :fields="fields"></b-table>
</div>
</template>

<script>
  import { mapState } from 'vuex';

    export default {
        name: "LeaderBoard",
      computed: {
        ...mapState({
        clubs: state => state.league.table.clubs,
        fields: state => state.league.table.fields
        })
      }
    }
</script>

<style scoped>
.leaderTable{
  border-style: solid;
  border-width: 2px;
  border-color: antiquewhite;
  width: 95%;
  margin-left: 3%;
}
</style>
