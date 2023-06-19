export class AuthUser {
  constructor($axios) {
    this.$axios = $axios;
  }

  validateUser = async (payload) => {
    return await this.$axios.post(`/auth/login`, payload);
  };
}
