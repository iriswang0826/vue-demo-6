<template>
  <div id="app">
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
    <!-- <router-view name="viewA"></router-view> -->
    <!-- <router-view name="viewB"></router-view> -->
    <router-link :to="{path:'apple', param:{color:'yellow'}}" tag="li">to apple</router-link>
    <router-link :to="{name:'bananaPage'}">to banana</router-link>
    <router-link :to="{path:'grape'}">to grape</router-link>
    <router-link :to="{path:'grape/red'}">to redgrape</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s
}
.fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
  opacity: 0
}
</style>
