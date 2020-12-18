<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
$backgroundColor: #dde2ea;

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  background-color: $backgroundColor;
  padding: 7rem;
}

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
