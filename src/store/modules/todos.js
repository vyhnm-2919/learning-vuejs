import request from '../../api/axios'
import { GET_TODOS } from '../../constants'

const todos = {
  namespaced: true,
  state: () => ({ todos: [] }),
  mutations: {
    MARK_COMPLETED: (state, idPayload) => {
      state.todos.map(todo => {
        if (todo.id === idPayload) {
          todo.completed = !todo.completed
        }
        return todo
      })
    },
    DELETE_TODO: (state, idPayload) => {
      state.todos = state.todos.filter(todo => todo.id !== idPayload)
    },
    ADD_TODO: (state, newTodo) => {
      return state.todos.push(newTodo)
    },
    UPDATE_TODO: (state, newTodo) => {
      return state.todos.push(newTodo)
    },
    GET_ALL_TODOS: (state, allTodos) => {
      state.todos = [...allTodos]
    },
    GET_TODO_FOR_UPDATE: (state, todo) => {
      state.todo = todo
      state.isEdit = true
    }
  },
  actions: {
    async deleteTodo({ commit }, idPayload) {
      try {
        await request.delete(`${GET_TODOS}/${idPayload}`)
        commit('DELETE_TODO', idPayload)
      } catch (error) {
        console.log(error)
      }
    },
    async addTodo({ commit }, newTodo) {
      try {
        const response = await request.post(GET_TODOS, newTodo)
        if (response && response.status === 201) {
          commit('ADD_TODO', newTodo)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async getAllTodo({ commit }) {
      try {
        const response = await request.get(GET_TODOS)
        if (response && response.status === 200) {
          commit('GET_ALL_TODOS', response.data)
        }
      } catch (error) {
        console.log(error)
      }
    },
    async updateTodo({ commit }, todoUpdate) {
      try {
        const response = await request.patch(
          `${GET_TODOS}/${todoUpdate.id}`,
          todoUpdate
        )
        if (response && response.status === 201) {
          console.log(response.data)
        }
        commit('UPDATE_TODO', todoUpdate)
      } catch (error) {
        console.log(error)
      }
    },
    getTodoForUpdate({ commit }, todo) {
      commit('GET_TODO_FOR_UPDATE', todo)
    },
    async markCompleted({ commit }, newTodo) {
      try {
        const response = await request.patch(`${GET_TODOS}/${newTodo.id}`, {
          completed: !newTodo.completed
        })
        if (response && response.status === 200) {
          commit('MARK_COMPLETED', newTodo.id)
        }
      } catch (error) {
        console.log(error)
      }
    }
  },
  getters: {
    doneTodos(state) {
      return state.todos.filter(todo => todo.completed)
    },
    progress: (state, getters) => {
      const doneTodos = getters.doneTodos
      return Math.round((doneTodos.length / state.todos.length) * 100)
    },
    getTotalTodos(state) {
      return state.todos.length
    }
  }
}

export default todos
