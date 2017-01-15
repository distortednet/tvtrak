<template lang="html">
    <div id="shows">
      <div v-if="showlist">
        <h4 class="media-heading">{{showlist.name}}</h4>
        <span class="label label-warning">{{showlist.language}}</span>
        <span class="label label-info" v-if="showlist.genres[0]" v-for="genre in showlist.genres">{{genre}}</span><br><br>
        <div class="well well-sm">{{showlist.summary.replace(/<(?:.|\n)*?>/gm, '')}}</div>
      </div>
      <!-- this logic is dirty and can be optimized better to reduce code repetition. but it works for now. -->
      <div v-if="favoritelist">
        <h4 class="media-heading">{{favoritelist.name}}</h4>
        <span class="label label-warning">{{favoritelist.language}}</span>
        <span class="label label-info" v-if="favoritelist.genres[0]" v-for="genre in favoritelist.genres">{{genre}}</span><br><br>
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
