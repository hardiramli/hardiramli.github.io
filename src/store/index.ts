import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// export function createStore(){
//   return new Vuex.Store({
    
//   })
// }

export default new Vuex.Store({
  state: {
    isUserSettingOpen: false,
    isUserNotificationOpen: false,
    isAuthenticated:false,
    layout:"simple-layout"
  },

  mutations: {
    setUserSettingOpen(state, payload) {
      state.isUserSettingOpen = payload;
    },
    setUserNotificationOpen(state, payload) {
      state.isUserNotificationOpen = payload;
    },
    setLogin(state, payload){
      state.isAuthenticated = payload;
    },
    setLayout(state,payload){
      state.layout = payload;
    }
  },
  actions: {
    openUserSetting(state, payload) {
      return new Promise((resolve, reject) => {
        state.commit("setUserSettingOpen", payload);
        resolve();
      });
    },
    openUserNotification(state, payload) {
      return new Promise((resolve, reject) => {
        state.commit("setUserNotificationOpen", payload);
        resolve();
      });
    },
    login ({commit, dispatch}, authData) {
      commit('setLogin', {isAuthenticated :true});
      commit('setLayout', 'app-layout');
    },
    logout({commit}){
      commit('setLogin',{isAuthenticated:false});
      commit('setLayout', 'simple-layout');
    }
  },

  getters: {
    isUserSettingOpen: state => {
      return state.isUserSettingOpen;
    },
    isAuthenticated:state =>{
      return state.isAuthenticated;
    },
    layout:state =>{
      return state.layout;
    }
  },

  modules: {}
});
