import {userConstants as Mutations} from '@/store/constants'


const user = {
  state:() => ({
    user:{},
    userHistoryById = {},
    token:'',
  }
),
getters:{
  getUser: (state) => state.user,
  getUserToken: (state) => state.token,
  getUserHistory: (state) => state.user.items,
  getUserHistoryById: (state) => (id) => state.userHistoryById[id]
},
mutations:{},
actions:{},
},



export default user;