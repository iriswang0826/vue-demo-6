<template>
  <div>
    <h1>{{ msg }}</h1>
    <p>{{ $route.params.color }}</p>

    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        'msg': 'this is grape page'
      }
    }
  }
</script>
