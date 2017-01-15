<template lang="html">
<div>
  <button class="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab" :class="{ 'active': active }" @click="toggleclass">
    <i class="material-icons">{{ active ? icon1 : icon2 }}</i>
  </button><hr>
</div>


</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      active: false,
      icon1: 'favorite',
      icon2: 'favorite_border'
    }
  },
  methods: {
    toggleclass: function() {
      this.active = !this.active;
      var httpurl = 'http://api.tvmaze.com/shows/'+this.show.id+'/episodes';
      this.$http.get(httpurl).then((response) => {
        if(this.active) {
          var SortedEpisodes = response.body.sort(function(a, b){ return new Date(b.airstamp) - new Date(a.airstamp); });
          var combined = {"ShowDetails": this.show, "Episodes": SortedEpisodes};
          this.$store.commit('addshow', combined);
        } else {
          this.$store.commit('removeshow', this.show.id);
        }
      });
    }
 },
 props:['show']
}
</script>
