<template>
  <div class="status-bar p-3" v-if="isAuthenticated">
    <p>Done</p>
    <b-list-group>
      <b-list-group-item
        v-for="todo in doneTodos"
        :key="todo.id"
        :class="[
          'todo-item d-flex justify-content-between align-items-center',
          todo.completed ? 'is-completed' : ''
        ]"
        >{{ todo.title }}</b-list-group-item
      >
    </b-list-group>
  </div>
</template>

<script>
import { mapGetters, mapState, mapActions } from 'vuex'
export default {
  name: 'StatusBar',
  computed: {
    ...mapGetters('todos', ['doneTodos']),
    ...mapState('auth', ['isAuthenticated'])
  },
  methods: { ...mapActions('todos', ['getAllTodo']) },
  created() {
    this.getAllTodo()
  }
}
</script>

<style scoped>
.todo-item {
  background: #fff;
  padding: 10px;
  margin: 0;
  overflow: hidden;
  border-bottom: 1px #ccc dotted;
}
.status-bar {
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
</style>
