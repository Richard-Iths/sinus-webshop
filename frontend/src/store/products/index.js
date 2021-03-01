import { productsConstants as Mutations } from "@/store/constants";
import * as API from "@/api";

const products = {
  namespaced: true,
  state: () => ({
    products: [],
    productsById: {},
  }),
  getters: {
    getProducts: (state) => state.products,
    getProductById: (state) => (id) => state.productsById[id],
  },
  mutations: {
    [Mutations.SET_PRODUCTS](state, products) {
      state.products = products;

      products.forEach((product) => {
        state.productsById[product._id] = product;
      });
    },
    [Mutations.UPDATE_PRODUCTS](state, product) {
      state.products.push(product);
      state.productsById[product._id] = product;
    },
  },
  actions: {
    async getProducts({ commit }) {
      const response = await API.getProducts();
      commit(Mutations.SET_PRODUCTS, response);
    },
    async postProduct({ commit, rootGetters }, product) {
      try {
        const token = rootGetters["user/getUserToken"];
        const data = await API.postProduct(product, token);
        console.log(data);
        commit(Mutations.UPDATE_PRODUCTS, data.product);
      } catch (error) {
        return error;
      }
    },
  },
};

export default products;
