<template lang="html">
    <div id="listing"><br>
      <strong>Show:</strong> <small>{{listing.name}}</small><br>
      <strong>Language:</strong> <small>{{listing.language}}</small><br>
      <strong>Genres:</strong> <small><span v-if="listing.genres[0]" v-for="genre in listing.genres">{{genre}} </span></small><br>
      <strong>Description</strong> <small><br>{{listing.summary.replace(/<(?:.|\n)*?>/gm, '')}} ... </small><br>
    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'listing',
  data () {
    return {
      find: null
    }
  },
  methods: {
    tpl: function() {
    }
  },
  props: ['listing']
}

</script>
