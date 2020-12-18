<template>
  <div class="photo">
    <div v-for="photo in allPhotos" :key="photo.id" class="photo_grid">
      <!-- {{ photo }} -->
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
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "IndexPhotos",
  methods: {
    ...mapActions(["fetchPhotos"])
  },
  computed: mapGetters(["allPhotos"]),
  created() {
    this.fetchPhotos();
  }
};
</script>

<style lang="scss">
.photo {
  position: relative;
  width: 80%;
  height: auto;
  margin: -50px auto 100px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 5vh;
  grid-auto-flow: dense;
}

.photo_grid {
  height: auto;
  cursor: zoom-in;

  &:nth-child(2) {
    grid-row-end: span 1.2;
  }

  &:nth-child(3) {
    grid-row-end: span 2;
  }

  &:nth-child(4) {
    grid-row-end: span 2;
  }

  &:nth-child(5) {
    height: 300px;
  }

  &:nth-child(7) {
    grid-row-end: span 2;
  }

  & img {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: 5px;
    object-fit: cover;
  }

  & .image_des {
    position: absolute;
    margin-top: -7rem;
    padding: 2rem;
    z-index: 2;
    width: 31%;
    background: linear-gradient(
      to bottom,
      rgba(95, 95, 98, 0),
      rgba(0, 0, 0, 0.97)
    );
    color: #fff;

    & p {
      cursor: text;
    }

    .loc {
      font-size: 14px;
    }
  }
}
</style>
