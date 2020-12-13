import Vue from 'vue';
import Vuex from 'vuex';

import cellar from '@/store/modules/cellar';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cellar,
  },
  strict: process.env.NODE_ENV !== 'production',
});
