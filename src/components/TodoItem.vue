<template>
  <b-list-group-item
    :class="[
      'todo-item d-flex justify-content-between align-items-center',
      todoProps.completed && 'is-completed'
    ]"
  >
    <input
      type="checkbox"
      :checked="todoProps.completed"
      @click="handleMarkCompleted(todoProps)"
    />
    {{ todoProps.title }}
    <div class="d-flex">
      <button class="btn-update flex-6" @click="getTodoForUpdate(todoProps)">
        Update
      </button>
      <button class="btn-delete flex-6" @click="deleteTodo(todoProps.id)">
        Delete
      </button>
    </div>
  </b-list-group-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'TodoItem',
  props: ['todoProps'],
  methods: {
    handleMarkCompleted(todoProps) {
      this.markCompleted(todoProps)
    },
    ...mapActions('todos', ['deleteTodo', 'getTodoForUpdate', 'markCompleted'])
  }
}
</script>

<style>
.todo-item {
  background: #fff;
  padding: 10px;
  margin: 0;
  overflow: hidden;
  border-bottom: 1px #ccc dotted;
}
.btn-delete {
  background: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  float: right;
  padding: 6px 12px;
}
.btn-update {
  margin-right: 1rem;
  background: #2861cc;
  border-radius: 5px;
  color: #fff;
  border: none;
  cursor: pointer;
  float: right;
  padding: 6px 12px;
}
.is-completed {
  background: #f2f2f2;
  color: #000;
}
input[type='checkbox'] {
  width: 30px;
  height: 30px;
  padding: 10px;
}
</style>
