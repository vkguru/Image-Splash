<template>
  <div>
    <header class="header">
      <div>
        <h3 class="header-text" v-show="loading === true">
          Searching for <span>"{{ title }}"</span>
        </h3>
        <h3 v-show="loading === false" class="header-text">
          Search Results for <span>"{{ title }}"</span>
        </h3>
      </div>
    </header>
    <Loading v-show="loading === true" />
    <div v-show="loading === false" class="photo">
      <div v-for="photo in allPhotos" :key="photo.id" class="photo_grid">
        <img
          @click="image(photo)"
          class="image_grid"
          :src="`${photo.urls.regular}`"
          :alt="`${photo.alt_description}`"
        />
        <div class="overlay">
          <div class="image_des">
            <p>{{ photo.user.name }}</p>
            <p class="loc">{{ photo.user.location }}</p>
            <p v-if="photo.user.location === null">-</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="this.img" style="display: block;" class="modal">
      <p @click="close()" class="close">X</p>
      <div v-html="img" class="modal-data"></div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "./Loading";
export default {
  name: "SearchPhotos",
  components: {
    Loading
  },
  data() {
    return {
      title: sessionStorage.getItem("search"),
      loading: true,
      img: ""
    };
  },
  mounted() {
    setTimeout(() => {
      this.setLoadingState(false);
    }, 3000);
  },
  methods: {
    ...mapActions(["photoSearch", "imageClicked"]),
    image(id) {
      this.img = `
        <img src="${id.urls.full}"/>
        <div class="para">
          <p>${id.user.name}</p>
          <p>${id.user.location}</p>
        </div>
      `;
    },
    close() {
      this.img = "";
    },
    setLoadingState(value) {
      this.loading = value;
    }
  },
  computed: mapGetters(["allPhotos"]),
  created() {
    this.photoSearch(this.title);
  }
};
</script>

<style lang="scss">
.header-text {
  font-size: 3rem;
  color: #394b68;

  & span {
    color: #7a879c;
  }
}

@media screen and (max-width: 768px) {
  .header {
    padding: 7rem 2rem;
    text-align: center;
  }
}
</style>
