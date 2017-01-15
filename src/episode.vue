<template lang="html">
    <div id="episode ">
    <img v-if="episode.image" v-bind:src="episode.image.medium"><br><br>
    [SE-{{episode.season}}-EP-{{episode.number}}] {{episode.airdate}}
    <a v-bind:href="episode.url" target="_blank">{{episode.name}}

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
