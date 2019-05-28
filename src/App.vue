<template>
  <v-app v-on:click.ctrl="toAdmin()">
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  },
  methods: {
    toAdmin(){
      this.$routes.push({ path: '/admin' })
    }
  }
}
</script>
