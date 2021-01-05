<template>
  <div>
    <div class="photo">
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

export default {
  name: "IndexPhotos",
  data() {
    return {
      loading: true,
      img: ""
    };
  },
  methods: {
    ...mapActions(["fetchPhotos", "imageClicked"]),
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
    }
  },
  computed: mapGetters(["allPhotos"]),
  created() {
    this.fetchPhotos();
  }
};
</script>

<style lang="scss">
@keyframes pulse-bg {
  0% {
    background-color: #f5f5f5;
  }
  50% {
    background-color: #e5e5e5;
  }
  100% {
    background-color: #f5f5f5;
  }
}

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
  position: relative;
  min-height: 200px;
  height: auto;
  cursor: zoom-in;
  background: #f5f5f5;
  animation: pulse-bg 1.2s infinite;

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

  & .overlay {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 20px;
    background-image: linear-gradient(transparent 36%, rgba(0, 0, 0, 0.87));
  }

  & .image_des {
    position: absolute;
    bottom: 20px;
    z-index: 2;
    color: #fff;

    & p {
      cursor: text;
    }

    .loc {
      font-size: 14px;
    }
  }
}

.modal {
  display: none;
  position: fixed;
  top: 0;
  background: #000000c9;
  width: 100%;
  height: 100%;
  padding: 50px;
  z-index: 1000;
}

.modal-data {
  width: 70%;
  margin: 30px auto 0;
  background: #fff;
  border-radius: 10px;

  & img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 10px 10px 0 0;
    background: rgb(226, 226, 226);
    animation: pulse-bg 1.2s infinite;
  }
}

.close {
  color: #fff;
  cursor: pointer;
  opacity: 0.8;
  float: right;
}

.para {
  padding: 20px 0 20px 50px;

  & p:nth-child(1) {
    font-size: 20px;
    color: #394b68;
    font-weight: bold;
    text-transform: capitalize;
    line-height: 30px;
  }

  & p:nth-child(2) {
    font-size: 14px;
    text-transform: capitalize;
    color: #7a879c;
    font-weight: bold;
  }
}

@media screen and (min-width: 1300px) {
  .photo_grid .image_des {
    width: 90%;
  }
}

@media screen and (max-width: 768px) {
  .photo {
    grid-template-columns: auto;
  }

  .photo_grid img {
    width: 100%;
    height: 400px;
  }

  .photo_grid:nth-child(5) {
    height: 400px;
  }

  .photo_grid .image_des {
    width: 100%;
  }

  .modal-data {
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .header {
    padding: 7rem 2rem;
  }

  .modal-data img {
    height: 300px;
  }

  #search {
    width: 100%;
  }
}
</style>
