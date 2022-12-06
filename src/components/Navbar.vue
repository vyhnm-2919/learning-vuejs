<template>
  <b-navbar
    toggleable="lg"
    type="dark"
    variant="info"
    class="d-flex align-items-center justify-content-between"
  >
    <div class="d-flex mb-3">
      <b-navbar-brand href="#" class="position-relative">
        <h2>Todoapps</h2>
        <div v-if="isAuthenticated" class="total-todos">
          {{ getTotalTodos }}
        </div>
      </b-navbar-brand>
    </div>

    <ProgressBar />

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item v-for="navItem in navbarList" :key="navItem.name">
          <router-link
            class="navbar-item text-decoration-none"
            :to="navItem.path"
          >
            {{ navItem.name }}
          </router-link>
        </b-nav-item>

        <b-nav-item>
          <b-button variant="link" class="btn btn-secondary" @click="toggleAuth">
            {{ isAuthenticated ? 'Logout' : 'Login' }}</b-button
          >
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import ProgressBar from './ProgressBar.vue'
export default {
  name: 'Navbar',
  components: { ProgressBar },
  computed: {
    ...mapState('auth', ['isAuthenticated']),
    ...mapGetters('todos', ['getTotalTodos'])
  },
  data() {
    return {
      navbarList: [
        {
          name: 'Home',
          path: '/'
        },
        {
          name: 'About',
          path: '/about'
        },
        {
          name: 'Todos',
          path: '/todos'
        },
        {
          name: 'Done',
          path: '/done'
        }
      ]
    }
  },
  methods: {
    ...mapActions('auth', ['toggleAuth'])
  }
}
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
ul {
  padding: 0;
  display: flex;
}
.navbar-item {
  list-style: none;
  padding: 6px 12px;
  cursor: pointer;
}
.navbar-item:hover {
  background: #f2f2f2;
}
.total-todos {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
  color: #fff;
  background: rgba(255, 51, 51, 0.726);
  width: 25px;
  height: 25px;
  top: 0;
  right: 0;
  transform: translate(100%, -50%);
}
.btn-add {
  border: none;
  padding: 6px 12px;
  background: #ad7409;
  color: #fff;
  outline: none;
  margin-right: auto;
  transition: all 0.3s linear;
}
.btn-add:hover {
  background: #6e4904;
  transition: all 0.3s linear;
}
.router-link-active.router-link-exact-active {
  color: red;
}
</style>
