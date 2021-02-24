import {userConstants as Mutations} from '@/store/constants'
import * as API from '@/api'

const user = {
  state:() => ({
    user:{},
    userOrderHistory: [],
    userOrderHistoryById = {},
    token:'',
  }
),
getters:{
  getUser: (state) => state.user,
  getUserToken: (state) => state.token,
  getUserOrderHistory: (state) => state.user.items,
  getUserOrderHistoryById: (state) => (id) => state.userOrderHistoryById[id]
},
mutations:{
  [Mutations.LOGIN]:(state,data) => {
    state.userOrderHistory = data.items;
    state.user = data.user;
    state.token = data.token;

    if(data.items.length !== 0) {
    data.items.forEach(order => {
      state.userHistoryById[order.id] = order;
    })
  }
  },
  [Mutations.UPDATE_USER]: (state,user) => {
      state.user = user;
  },
  [Mutations.UPDATE_ORDER_HISTORY]: (state,order) => {
    state.userOrderHistory.push(order);
    state.userOrderHistoryById[order.id] = order
  }
},
actions:{
  login: async ({commit},userObj) => {
    try {
      const userData = await API.loginUser(userObj);
      const orderHistory = await API.getUserOrders(data.token);
      const data = {...userData,...orderHistory};
      commit(Mutations.LOGIN,data);
    } catch (error) {
      return error.message;
    }

  },
  updateUser: async ({commit,getters},userObj) => {
    try {
        const token = getters.getUserToken;
        await API.patchUser(userObj,token)
        const userUpdate = await API.getUserProfile(token);
        commit(Mutations.UPDATE_USER);
    } catch (error) {
      return error.message
    }
  },
  updateOrderHistory: async ({commit},order) =>{
    commit(Mutations.UPDATE_ORDER_HISTORY,order);
  }
},
},



export default user;