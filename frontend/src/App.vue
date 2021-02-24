<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Fjalla+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Cantarell:ital,wght@0,400;0,700;1,400;1,700&display=swap");

h1,
h2,
h3,
h4,
a,
button,
label {
  font-family: "Fjalla One", sans-serif;
  text-decoration: none;
  color: #000;
}

p, 
input{
  font-family: "Cantarell", sans-serif;
  color: #000;
}
</style>
