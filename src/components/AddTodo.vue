<template>
  <button @click="toggleIsShow" class="d-block mb-4 btn btn-primary outline-none shadow-none">Add todo</button>
  <form @submit.prevent="onSubmit" v-if="isShow">
    <input
      type="text"
      placeholder="Enter the title"
      v-model="title"
      class="w-100"
    />
    <button type="submit" class="btn-add">+</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'AddTodo',
  data() {
    return {
      title: '',
      isShow: false
    }
  },
  methods: {
    ...mapActions('todos', ['addTodo']),
    onSubmit() {
      this.addTodo({
        title: this.title,
        completed: false
      })
      this.title = ''
    },
    toggleIsShow() {
      return (this.isShow = !this.isShow)
    }
  }
}
</script>

<style>
form {
  display: flex;
  padding: 2rem 0;
}
input[type='text'] {
  background-color: transparent;
  border: none;
  outline: none;
  height: 40px;
  font-size: 16px;
  border-bottom: 1px solid #ccc;
  -webkit-animation: all 0.25s;
  animation: all 0.25s;
}
.btn-add {
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  background-color: #8c7851;
  transition: all 0.25s;
  cursor: pointer;
  font-size: 18px;
}
.is-invalid::placeholder {
  color: red;
}
</style>
