<template>
  <div id="app"  class="container-fluid">

    <div class="content col-lg-6" id="content">
       <search></search>
        <div v-if="GetStore.SearchResults[0]" v-for="ShowListing in GetStore.SearchResults">
          <showlisting v-bind:showlist="ShowListing.show"></showlisting>
          <actionbar v-bind:show="ShowListing.show"><actionbar/>
       </div>
    </div>
    <div class="content col-lg-6" id="content">
      <ul class="nav nav-tabs ">
        <li class="active"><a data-toggle="tab" href="#home">Upcomming</a></li>
        <li><a data-toggle="tab" href="#menu1">All Favorites</a></li>
        <li><a data-toggle="tab" href="#menu2">Past Shows</a></li>
        <li><a data-toggle="tab" href="#menu3">Search debug</a></li>
        <li><a data-toggle="tab" href="#menu4">Favorite debug</a></li>
      </ul>
      <div class="tab-content">
        <div id="home" class="tab-pane fade in active"><br>
          <div class="" v-if="GetStore.FavoriteShows[0]" v-for="show in GetStore.FavoriteShows">
            <episode v-for="episode in show.Episodes.slice(0, 1)" v-bind:episode="episode" v-bind:showdetails="show.ShowDetails"></episode>
          </div>
        </div>
        <div id="menu1" class="tab-pane fade"><br>
          <div class="" v-if="GetStore.FavoriteShows[0]" v-for="show in GetStore.FavoriteShows">
            <episode v-for="episode in show.Episodes" v-bind:episode="episode" v-bind:showdetails="show.ShowDetails"></episode>
          </div>
        </div>
        <div id="menu2" class="tab-pane fade">
          wat
        </div>
        <div id="menu3" class="tab-pane fade">
          <pre v-if="GetStore.SearchResults[0]">{{GetStore.SearchResults}}</pre>
        </div>
        <div id="menu4" class="tab-pane fade">
          <pre v-if="GetStore.FavoriteShows[0]">{{GetStore.FavoriteShows}}</pre>
        </div>
      </div>
  </div>
<!--
bugs:
favorite button visual state not consistent between search results.

features:
use sqlite for db
make favorite list sticky so content follows as you scroll
set favorite list to default list when first opening app, can only be done after sqlite is in place
episodes are sorted by air dates, but tv series are not sorted by air dates. this can be resolved by looking at the updated field on this endpoint for example http://api.tvmaze.com/shows/82
sometimes, .replace for stripping html content from api results fails.
-->
</div>
</template>

<script>
import Vue from 'vue'
import search from './search.vue'
import actionbar from './actionbar.vue'
import showlisting from './showlisting.vue'
import episode from './episode.vue'


export default {
  name: 'app',
  data () {
    return {
      results: null,
    }
  },
  computed: {
    GetStore: function() {
      return this.$store.state;
    }
  },
  components: {
      search,
      actionbar,
      showlisting,
      episode
  }
}

</script>
