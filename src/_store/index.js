import Vue from 'vue';
import Vuex from 'vuex';

import { league } from './league.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
      league
    }
});
