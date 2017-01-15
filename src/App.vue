<template>
  <div id="app" class="mdl-grid" >
    <div class="mdl-cell mdl-cell--6-col content" id="content">
       <search></search>
        <div v-if="GetStore.SearchResults[0]" v-for="ShowListing in GetStore.SearchResults">
        <showlisting v-bind:showlist="ShowListing.show"></showlisting>
        <favoritebutton v-bind:show="ShowListing.show"><favoritebutton/>

       </div>
    </div>
    <div class="mdl-cell mdl-cell--6-col content" id="content">
      <div class="" v-if="GetStore.FavoriteShows[0]" v-for="show in GetStore.FavoriteShows">
        <showlisting v-bind:favoritelist="show.ShowDetails"></showlisting>
        <episode v-for="episode in show.Episodes.slice(0, 5)" v-bind:episode="episode"></episode>
      </div>

    </div>
<!--
bugs:
weird inital refresh on search field
favorite button visual state not consistent between search results.

features:
use sqlite for db
make favorite list sticky so content follows as you scroll
set favorite list to default list when first opening app, can only be done after sqlite is in place
-->
</div>
</template>

<script>
import Vue from 'vue'
import search from './search.vue'
import favoritebutton from './favoritebutton.vue'
import showlisting from './showlisting.vue'
import episode from './episode.vue'
export default {
  name: 'app',
  data () {
    return {
      results: null,
      icon: "favorite_border",
    }
  },
  computed: {
    GetStore: function() {
      return this.$store.state;
    },
  },
  components: {
      search,
      favoritebutton,
      showlisting,
      episode
  }
}

</script>

<style>

</style>
