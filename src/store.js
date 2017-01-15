import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    SearchResults: [],
    ShowResults: [],
    FavoriteShows: []
  },
  mutations: {
    addshow(state, show) {
      if(state.FavoriteShows.indexOf(show) == -1) {
        state.FavoriteShows.push(show);
      }

    },
    removeshow(state, show) {
      for(var i in state.FavoriteShows) {
        if(show == state.FavoriteShows[i].ShowDetails.id) {
          state.FavoriteShows.splice(i, 1);
        }
      }
    }
  }
});
