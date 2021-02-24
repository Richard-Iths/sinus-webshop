import {productsConstants as Mutations} from '@/store/constants'
import * as API from '@/api'

const products = {
  namespaced: true,
  state:() => ({
    products: [],
    productsById: {}
  }
),
getters:{
  getProducts: (state) => state.products,
  getProductById: (state) => (id) => state.productsById[id]
},
mutations:{
  [Mutations.SET_PRODUCTS](state, products) {
    state.products = products

    products.forEach(product => {
        state.productsById[product._id] = product
    });
    console.log(state.productsById);
  }
},
actions:{
  async getProducts({commit}){
      const response = await API.getProducts()
      commit(Mutations.SET_PRODUCTS, response)
  }
},
}



export default products;