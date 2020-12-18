<template>
  <header class="header">
    <div>
      <h3 class="header-text">
        Search Result for <span>"{{ title }}"</span>
      </h3>
    </div>

    <div v-for="photo in allPhotos" :key="photo.id">
      <img
        class="image_grid"
        :src="`${photo.results.urls.regular}`"
        :alt="`${photo.alt_description}`"
      />
    </div>
  </header>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SearchPhotos",
  data() {
    return {
      title: sessionStorage.getItem("search")
    };
  },
  methods: {
    ...mapActions(["photoSearch"])
  },
  computed: mapGetters(["result"]),
  created() {
    this.photoSearch(this.title);
  }
};
</script>

<style lang="scss" scoped>
.header-text {
  font-size: 3rem;
  color: #394b68;

  & span {
    color: #7a879c;
  }
}
</style>
