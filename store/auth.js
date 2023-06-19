export const state = () => ({
  loginToken: localStorage.getItem("signInToken"),
});

export const getters = {
  ifAuthenticated: (state) => {
    return state.loginToken !== null;
  },
};

export const mutations = {
  // ===GET USER AUTH===
  AUTH_USER(state, payload) {
    state.loginToken = payload.token;
  },
  // ===GET AUTH===
  CLEAR_AUTH(state) {
    state.loginToken = null;
  },
};

export const actions = {
  // ===LOGIN TO DASHBOARD===
  async validateUser({ commit }, payload) {
    try {
      const { data } = await this.$authUser.validateUser(payload);
      localStorage.setItem("fakeStoreToken", JSON.stringify(data.token));

      commit("AUTH_USER", data);
      //   commit("SET_ENTITIES", data.entities);
      return data;
    } catch (error) {
      throw error;
    }
  },
  // ===AUTO LOGIN===
  autoLogin({ commit }) {
    const token = localStorage.getItem("signInToken");
    if (!token) {
      return;
    }
    commit("AUTH_USER", {
      token: token,
    });
  },

  // ===LOGOUT===
  LOGOUT({ commit }) {
    commit("CLEAR_AUTH");
    localStorage.removeItem("signInToken");
    this.$swal({
      toast: true,
      text: "You have logout successfully.",
      icon: "success",
      timer: 3000,
      timerProgressBar: true,
      showConfirmButton: false,
      position: "top-end",
    });
    // router.replace('/')
  },
};
