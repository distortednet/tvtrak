<template lang="html">
<div>
  <button class="btn btn-default glyphicon glyphicon" v-bind:class="[active ? 'glyphicon-heart' : 'glyphicon-heart-empty']" v-on:click="toggleclass"></button>
  <button class="btn btn-default glyphicon glyphicon glyphicon-send"></button>
  <button class="btn btn-default glyphicon glyphicon glyphicon-remove"></button>
  <!-- changed this from a favorite button to action bar. will have the ability to tweet shows, and filter shows from showing in your search. -->
  <br><br>

</div>
</template>

<script>
import Vue from 'vue'
export default {
  data () {
    return {
      active: false
    }
  },
  methods: {
    toggleclass: function() {
      this.active = !this.active;
      this.saveresults();
    },
    saveresults: function() {
      var httpurl = 'http://api.tvmaze.com/shows/'+this.show.id+'/episodes';
      this.$http.get(httpurl).then((response) => {
        if(this.active) {
          this.$store.commit('addshow', {"ShowDetails": this.show, "Episodes": this.sorter(response.body)});
        } else {
          this.$store.commit('removeshow', this.show.id);
        }
      });
    },
    sorter: function(arr) {
      return arr.sort(function(a, b){
        return new Date(b.airstamp) - new Date(a.airstamp);
      });
    }
 },
 props:['show']
}
</script>
