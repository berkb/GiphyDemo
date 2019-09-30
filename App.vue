<template>
  <div id="app">
    <search   v-on:SearchRequested="handleSearch"></search>
    <p class="loading" v-if="isLoading">LOADING</p>
    <preview :gifs=gifs></preview>
    <loadMore v-on:SearchRequested="created"></loadMore>
  </div>
</template>

<script>
import Search from './components/Search.vue'
import Preview from './components/Preview.vue'
import loadMore from './components/loadMore.vue'
export default {
  name: 'app',
  components: { Search, Preview, loadMore },
  data() {
    return {
      isLoading: true,
      gifs: []
    }
  },
  methods: {
    doQuery(url) {
      fetch(url)
      .then((res) => { return res.json() } )
      .then((res) => {
        this.gifs = res.data;
        this.isLoading = false;
      })
    },
    handleSearch(query) {
      this.gifs = [];
      this.isLoading = true;
      let apiKey = "dc6zaTOxFJmzC";
      let searchEndPoint = "https://api.giphy.com/v1/gifs/search?";
      let limit = 20;
      let url = `${searchEndPoint}&api_key=${apiKey}&q=${query}&limit=${limit}`;
      this.doQuery(url);
    }
  },
  created() {
    const url = 'http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=20';
    this.doQuery(url);
  },
  mounted () {

    // Detect when scrolled to bottom.
    const listElm = document.querySelector('#infinite-list');
    listElm.addEventListener('scroll', e => {
      if(listElm.scrollTop + listElm.clientHeight >= listElm.scrollHeight) {
        this.loadMore();
      }
    });

    // Initially load some items.
    this.loadMore();

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: rgb(0,118,143);
  background: linear-gradient(90deg, rgba(0,118,143,1) 0%, rgba(121,9,85,1) 100%, rgba(0,212,255,1) 100%);}

.loading{
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 50px;
}
</style>