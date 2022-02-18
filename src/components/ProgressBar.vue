<template>
  <div class="progress-barr bg-warning rounded" v-if="isAuthenticated">
    Progress: {{ progress }} %
  </div>
</template>

<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'ProgressBar',
  computed: { ...mapGetters('todos', ['progress']), ...mapState('auth',['isAuthenticated']) }
}
</script>

<style>
.progress-barr {
  padding: 5px;
  text-align: center;
  color: black;
}
</style>
