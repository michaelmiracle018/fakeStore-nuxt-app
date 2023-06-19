export class DisplayService {
  constructor($axios) {
    this.$axios = $axios;
  }

  // ========FETCH ALL PRODUCTS=======

  fetchAllProducts = async (body) => {
    // console.log(limit);
    return await this.$axios.get(`/products`);
  };
  // ========FETCH CATEGORY PRODUCTS=======

  fetchProductsCategory = async () => {
    return await this.$axios.get(`/products/categories`);
  };
  // ========FETCH SPECIFIC PRODUCTS=======

  fetchSpecificProduct = async (payload) => {
    return await this.$axios.get(`/products/category/${payload}`);
  };

  // ========FETCH SINGLE PRODUCTS=======
  fetchSingleProduct = async (payload) => {
    return await this.$axios.get(`/products/${payload}`);
  };
  
}
