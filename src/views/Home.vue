<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  created () { 
    this.$http.post('http://localhost:8888/api/private/v1/login',{
      username:'aaa',
      password:11111
    })
    .then(function (response) {
      console.log(response)
    })
    .catch((err) => {
      console.log(err)
    })
  }
}
</script>
