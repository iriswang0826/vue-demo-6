<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>
    <button @click="getParam">get param</button>
    <button @click="addOne">add one</button>
    <button @click="minusOne">minus one</button>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'msg': 'this is apple page',
        'price': 5
      }
    },
    methods: {
      getParam () {
        console.log(this.$route.params)
      },
      addOne () {
        this.$store.dispatch('increase', this.price)
      },
      minusOne () {
        this.$store.commit('decrement', this.price)
      }
    }
  }
</script>
