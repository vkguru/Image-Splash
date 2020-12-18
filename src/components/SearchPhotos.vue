<template>
  <div>
    <header class="header">
      <div>
        <h3 class="header-text">
          Search Results for <span>"{{ title }}"</span>
        </h3>
      </div>
    </header>
    <div class="photo">
      <div v-for="photo in allPhotos" :key="photo.id" class="photo_grid">
        <img
          class="image_grid"
          :src="`${photo.urls.regular}`"
          :alt="`${photo.alt_description}`"
        />
        <div class="image_des">
          <p>{{ photo.user.name }}</p>
          <p class="loc">{{ photo.user.location }}</p>
          <p v-if="photo.user.location === null">-</p>
        </div>
      </div>
    </div>
  </div>
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
  computed: mapGetters(["allPhotos"]),
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
