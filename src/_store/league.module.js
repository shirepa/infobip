import { leagueService, championshipService } from '../_services';
const state = {
  ready: false,
  table: [],
  rounds: [],
  message: ''
}

const actions = {
   load({ dispatch, commit }) {

        const table = localStorage.getItem('table');
        const rounds = localStorage.getItem('rounds');
        if(table){
          commit('setData', { table, rounds })
        }
        else {
          leagueService.loadData()
            .then((data) => {
                commit('prepareTable', data);
              },
              (error) => {
                commit('loadFailure', error);
              }
            );
        }
    },
};

const mutations = {
    prepareTable(state, data) {
        let table = championshipService.prepareTable(data);
        let rounds = championshipService.processTable(data, table);
        localStorage.setItem('table', JSON.stringify(table));
        localStorage.setItem('rounds', JSON.stringify(rounds));
        state.message = '';
        state.table = table;
        state.rounds = rounds;
        state.ready = true;
    },
    setData(state, { table, rounds }){
      console.log(rounds);
      state.message = '';
      state.table = JSON.parse(table);
      state.rounds = JSON.parse(rounds);
      state.ready = true;
    },
    loadFailure(state, error){
      state.message = error.message;
      state.ready = true;
    }
};

export const league = {
    namespaced: true,
    state,
    actions,
    mutations
};
