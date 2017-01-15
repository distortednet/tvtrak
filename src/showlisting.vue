<template lang="html">
    <div id="shows">
      <div v-if="showlist">
        <strong>Show:</strong> <small>{{showlist.name}}</small><br>
        <strong>Language:</strong> <small>{{showlist.language}}</small><br>
        <strong>Genres:</strong> <small><span v-if="showlist.genres[0]" v-for="genre in showlist.genres">{{genre}} </span></small><br>
        <strong>Description</strong> <small><br>{{showlist.summary.replace(/<(?:.|\n)*?>/gm, '')}} ... </small>
      </div>
      <!-- this logic is dirty and can be optimized better to reduce code repetition. but it works for now. -->
      <div v-if="favoritelist">
        <strong>Show:</strong> <small>{{favoritelist.name}}</small><br>
        <strong>Language:</strong> <small>{{favoritelist.language}}</small><br>
        <strong>Genres:</strong> <small><span v-if="favoritelist.genres[0]" v-for="genre in favoritelist.genres">{{genre}} </span></small>
      </div>

    </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'shows',
  data () {
    return {
      find: null
    }
  },
  methods: {
    tpl: function() {
    }
  },
  props: ['showlist', 'favoritelist']
}

</script>
