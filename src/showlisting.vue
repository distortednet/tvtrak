<template lang="html">
    <div id="shows">
      <div v-if="showlist">
        <h4 class="media-heading">{{showlist.name}}</h4>
        <span class="label label-warning">{{showlist.language}}</span>
        <span class="label label-info" v-if="showlist.genres[0]" v-for="genre in showlist.genres">{{genre}}</span>
        <span v-if="showlist.status === 'Running'" class="label label-success">{{showlist.status}}</span>
        <span v-else class="label label-danger">{{showlist.status}}</span>
        <br><br>
        <div class="well well-sm">{{showlist.summary.replace(/<(?:.|\n)*?>/gm, '')}}</div>





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
  props: ['showlist']
}

</script>
