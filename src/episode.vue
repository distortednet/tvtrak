<template lang="html">
    <div id="episode">

      <div class="media well well-sm">
        <div class="media-left media-middle">
          <a v-bind:href="episode.url" target="_blank"><img class="media-object" v-bind:src="[episode.image ? episode.image.medium : 'http://placehold.it/250x140']"></a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{showdetails.name}}</h4>
          <h5 class="media-heading">{{episode.name}}</h5>
          <span class="label label-success">SE-{{episode.season}}</span>
          <span class="label label-primary">EP-{{episode.number}}</span>
          <span class="label label-warning">{{episode.airdate}}</span><br><br>
          <span v-if="episode.summary">{{episode.summary.replace(/<(?:.|\n)*?>/gm, '')}}</span>
          <span v-else>No summary found for this episode of {{showdetails.name}}</span>
        </div>
    </div>

</template>

<script>
import Vue from 'vue'
export default {
  name: 'episode',
  data () {
    return {
      find: null
    }
  },
  props: ['episode', 'showdetails'],
}

</script>
