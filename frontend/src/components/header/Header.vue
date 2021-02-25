<template>
  <header>
    <logo />
    <Nav />
  </header>
</template>
<script>
import Logo from "./Logo";
import Nav from "@/components/nav/Nav.vue";
export default {
  components: { Logo, Nav },
};
</script>
<style lang="scss" scoped>
header {
  background-color: #ddd9d9;
  padding: 2rem;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
}
</style>
