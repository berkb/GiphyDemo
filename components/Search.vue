<template>
  <div class="search">
    <p v-if="query.length==0">Keyword can not be empty</p>
    <input type="text" id="search" name="search" v-model="query" @submit="checkForm" @keypress.enter="handleSearch" placeholder="Write Keywords" />
    <br>
    <button @click="handleSearch">Search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      query: ''
    }
  },
  methods: {
    handleSearch() {
      this.$emit('SearchRequested', this.query);
    },
    checkForm:function(e) {
      if(this.search) return true;
      this.errors = [];
      e.preventDefault();
    }
  }
}
</script>


<style>
  .search{
      text-align: center;
  }
  
  .search p{
      text-align: center;
      padding-top: 10px;
      font-family: 'Courier New', Courier, monospace;
  }
  .search input {
    padding: 10px 20px;
    border: 1px solid #CCC;
    border-radius: 5px;
    width: 400px;
    text-align: center;
  }
  .search button {
    padding: 5px 15px;
    border: 1px solid #CCC;
    background-color: #4183c4;
    color: #FFF;
    font-size: 16px;
    border-radius: 5px;
    text-align: center;
  }
</style>