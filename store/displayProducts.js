export const state = () => ({
  productBag: [],
  // categoryBag: [],
  limit: 0,
  singleProduct: [],
});

export const getters = {
  getAllProducts: (state) => state.productBag,
  // getCategoryBag: (state) => state.categoryBag,
};

export const mutations = {
  // === FETCH ALL PRODUCTS===
  FETCH_ALL_PRODUCTS(state, payload) {
    return (state.productBag = payload);
  },
  // =========FETCH PRODUCTS CATEGORY========
  FETCH_PRODUCTS_CATEGORY(state, payload) {
    state.categoryBag = payload;
  },
  // ===GET LIMIT===
  // GET_LIMIT(state, payload) {
  //   state.limit = payload;
  // },
  FETCH_SPECIFIC_PRODUCTS(state, data) {
    console.log(data);
    state.productBag = data;
  },
  FETCH_SINGLE_PRODUCT(state, data) {
    state.singleProduct = data;
  },
};

export const actions = {
  // ===GET ALL PRODUCTS===
  async fetchAllProducts({ commit }) {
    // console.log(payload);
    try {
      const { data } = await this.$displayService.fetchAllProducts();
      localStorage.setItem("fakeBag", JSON.stringify(data));

      commit("FETCH_ALL_PRODUCTS", data);
      // commit("GET_LIMIT", body.limit);

      return data;
    } catch (error) {
      throw error;
    }
  },

  // ====GET PRODUCTS CATEGORY=====
  async fetchProductsCategory({ commit }) {
    try {
      const { data } = await this.$displayService.fetchProductsCategory();
      commit("FETCH_PRODUCTS_CATEGORY", data);
      return data;
    } catch (error) {
      throw error;
    }
  },

  async fetchSpecificProduct({ commit }, payload) {
    try {
      const { data } = await this.$displayService.fetchSpecificProduct(payload);
      commit("FETCH_SPECIFIC_PRODUCTS", payload);

      return data;
    } catch (error) {
      throw error;
    }
  },

  async fetchSingleProduct({ commit }, { id }) {
    // console.log(payload);
    try {
      const { data } = await this.$displayService.fetchSingleProduct(id);
      console.log(data);

      commit("FETCH_SINGLE_PRODUCT", data);

      return data;
    } catch (error) {
      throw error;
    }
  },
};
