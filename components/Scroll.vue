<template>
  <div class="scroll">
    <scroll-loader class="scroll" v-for="gif in gifs" :gifs=gifs :loader-method="getImagesInfo" :loader-enable="loadMore">
    <div>
      <ul>
        <li>
          <img :src="gif.images.fixed_height_small.url" />
        </li>
      </ul>
    </div>
    </scroll-loader>
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
    }
  }
}
</script>