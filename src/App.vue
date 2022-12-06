<template>
  <div class="container">
    <Navbar />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar'
export default {
  name: 'App',
  components: { Navbar }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.container {
  padding: 25px;
  width: 400px;
  min-height: 550px;
  background-color: #eaddcf;
  text-align: center;
  border-radius: 20px;
  box-shadow: rgba(89, 78, 151, 0.15) 0px 48px 100px 0px;
  border: 1px solid rgba(140, 120, 81, 0.24705882352941178);
  position: relative;
}
input {
  outline: none;
}
li {
  list-style: none;
}
#app {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  background: #f9f4ef;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
