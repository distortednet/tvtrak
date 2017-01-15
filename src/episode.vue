<template lang="html">
    <div id="episode">
      <div class="media">
        <div class="media-left media-middle">
          <a v-bind:href="episode.url" target="_blank"><img class="media-object" v-bind:src="[episode.image ? episode.image.medium : 'http://placehold.it/250x140']"></a>
        </div>
        <div class="media-body">
          <h4 class="media-heading">{{episode.name}}</h4>
          <span class="label label-success">SE-{{episode.season}}</span>
          <span class="label label-primary">EP-{{episode.number}}</span>
          <span class="label label-warning">{{episode.airdate}}</span>
        </div>
      </div><br>
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
  props: ['episode']
}

</script>
