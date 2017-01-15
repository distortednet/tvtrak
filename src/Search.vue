<template>
  <form v-on:submit.prevent id="searchform" class="form-group">
    <input class="form-control" type="text" placeholder="Search" v-model="find" v-on:keyup.enter="findshows"><br>
  </form>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'search',
  data () {
    return {
      find: null
    }
  },
  methods: {
    findshows: function() {
      this.$http.get('http://api.tvmaze.com/search/shows?q='+this.find).then((response) => {
        Vue.set(this.$store.state, 'SearchResults', response.body);
      }, (response) => {

      });
    }
  }
}

</script>

<style lang="css">

</style>
