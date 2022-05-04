<template>
  <header class="header">
    <div id="search">
      <form @submit="onSubmit">
        <div class="form-group">
          <i class="fas fa-search ic"></i>
          <input
            type="search"
            class="search_input"
            placeholder="Search for photo"
            v-model="inputs"
          />
        </div>
      </form>
    </div>
  </header>
</template>

<script>
import { mapActions } from "vuex";
// import router from "vue-router";
export default {
  name: "Form",
  data() {
    return {
      inputs: ""
    };
  },
  methods: {
    ...mapActions(["photoSearch"]),
    onSubmit(e) {
      e.preventDefault();
      this.$router.push(`/search`);
      // window.location = "/search/";
      sessionStorage.setItem("search", this.inputs);
      console.log(this.inputs);
      this.photoSearch(this.inputs);
    }
  }
};
</script>

<style lang="scss" scoped>
$formBackground: #fff;

#search {
  width: 90%;
  margin: auto;
}

.form-group {
  display: flex;
  width: 100%;
  align-items: center;
}

.ic {
  position: relative;
  left: 40px;
}

.search_input {
  flex: 12;
  padding: 20px 15px;
  border: transparent;
  border-radius: 8px;
  font-size: 20px;
  text-indent: 50px;
  box-shadow: 5px 6px 20px 5px #7d7d7d2b;

  &::placeholder {
    font-family: inherit;
    font-size: 16px;
    color: rgb(85, 75, 97);
    text-indent: 50px;
  }
}
</style>
