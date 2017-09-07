<template>
  <div id="app">
    {{ totalPrice }}
    <apple></apple>
    <banana></banana>
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
import Apple from './components/apple'
import Banana from './components/banana'
export default {
  name: 'app',
  components: {Apple, Banana},
  computed: {
    totalPrice () {
      // return this.$store.state.totalPrice
      return this.$store.getters.getTotal
    }
  },
  data () {
    return {

    }
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
