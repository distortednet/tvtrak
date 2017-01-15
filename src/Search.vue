<template>
  <form action="#" id="searchform" on:submit.prevent="onSubmit">
    <div class="mdl-textfield mdl-js-textfield">
      <input class="mdl-textfield__input" type="text" id="searchinput" v-model="find" v-on:keyup.enter="findshows">
    </div>
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
