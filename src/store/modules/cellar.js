import CellarService from '@/service/CellarService';

export default {
  namespaced: true,
  state: {
    loaded: false,
    cellarId: '',
    items: [],
  },
  mutations: {
    loaded(state, loadedValue) {
      state.loaded = loadedValue;
    },
    set(state, cellar) {
      state.cellar = cellar;
    },
  },
  actions: {
    get(context, ownerId) {
      return CellarService.get(ownerId)
        .then((cellar) => {
          context.commit('set', cellar);
          context.commit('loaded', true);
        });
    },
  },
  getters: {
    loaded: (state) => state.loaded,
    cellar: (state) => state.cellar,
  },
};
