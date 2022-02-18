<template>
  <div class="todos-component" v-if="isAuthenticated">
    <AddTodo />
    <b-list-group>
      <TodoItem v-for="todo in todos" :key="todo.id" :todoProps="todo" />
    </b-list-group>
  </div>
  <p v-else class="text-notLogin">
    You need to sisn in or sign up to use <b>Todos App</b>
  </p>
</template>

<script>
import TodoItem from './TodoItem'
import AddTodo from './AddTodo'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Todos',
  components: { TodoItem, AddTodo },
  computed: {
    ...mapState('auth', ['isAuthenticated']),
    ...mapState('todos', ['todos'])
  },
  methods: { ...mapActions('todos', ['getAllTodo']) },
  created() {
    this.getAllTodo()
  }
}
</script>

<style>
.todo-list {
  height: 400px;
  overflow-x: scroll;
}
.todo-list::-webkit-scrollbar {
  display: none;
}
</style>
