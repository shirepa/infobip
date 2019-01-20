<template>
<div>
<h1>
  Rounds
</h1>
  <div class="container">
      <b-dropdown :text=dropValue offset="225" right  class="dropDown">
        <div class="dropItem" v-for="round in rounds">
        <b-dropdown-item @click="onChange(round)">{{round.number}}</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        </div>
      </b-dropdown>
  </div>
  <div v-if="this.matches.length !== 0" class ="matches">
   <div v-for="match in matches"  class="match">
    <div class="club">{{match.club1}}</div>
     <div class = "score">{{match.score1}}:{{match.score2}}</div>
     <div class="club">{{match.club2}}</div>
   </div>
  </div>
</div>
</template>

<script>
  import { mapState } from 'vuex';
    export default {
        name: "Rounds",
      data () {
        return {
          key: 0,
          matches:[]
        }
      },
      computed: {
        ...mapState({
          rounds: state => state.league.rounds
        }),
        dropValue(){
          console.log(this.key);
          if(this.key === 0){
            return 'Select round';
          }
          else{
            return "Round" + " " + this.key.toString();
          }
        }
      },
      methods: {
        onChange(value) {
          this.key = value.number;
          this.matches = value.matches;
        }
      }
    }
</script>

<style scoped>
.dropDown{

}
.dropItem{
  width: 20px;
  font-size: 12px;
}

.matches{
  margin-top: 3%;
}

.club{
  width: 300px;
  font-size: 24px;
  text-align: left;
  margin-left: 60px;
}

.score{
  width: 200px;
  font-size: 24px;
  background-color: black;
  color: white;
}

.match{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
