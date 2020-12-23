<template>
  <div>
    <div class="photo">
      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid loading">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid loading">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid loading">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>

      <div class="photo_grid">
        <div class="p_load">
          <p class="loading-p"></p>
          <p class="loading-p"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Loading"
};
</script>

<style lang="scss">
.photo-placeholder {
  height: 400px;
  background: rgb(226, 226, 226);
}

.photo_grid {
  &:nth-child(3) .p_load {
    margin-top: 24rem;
  }

  &:nth-child(4) .p_load {
    margin-top: 24rem;
  }

  &:nth-child(5) .p_load {
    margin-top: 10rem;
  }

  &:nth-child(7) .p_load {
    margin-top: 18rem;
  }
}

.photo_grid .p_load {
  position: absolute;
  margin-top: 4rem;
  padding: 2rem;
  z-index: 2;
  width: 31%;
  color: #fff;

  & .loading-p {
    width: 100%;
    height: 30px;
    background: rgb(228, 227, 227);
    margin-bottom: 10px;
  }
}
</style>
