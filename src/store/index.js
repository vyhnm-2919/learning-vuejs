import { createStore } from 'vuex'

import auth from './modules/auth'
import todos from './modules/todos'

const store = createStore({
  modules: {
    auth,
    todos
  }
})
console.log(store.todos);
export default store
