<template>
  <div class="loadMore">
    <div><button @click="handleSearch">Load More</button></div>
  </div>
</template>

<script>
import Search from './Search.vue'
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('SearchRequested', this.query);
    }
  }
}
</script>

<style>
  .loadMore{
    clear: both;
    position: relative;
    height: 200px;
    margin-top: -200px;
    text-align: center;
  }
  .loadMore button {
    padding: 5px 15px;
    border: 1px solid #CCC;
    background-color: #4183c4;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
    bottom: 0;
  }
</style>