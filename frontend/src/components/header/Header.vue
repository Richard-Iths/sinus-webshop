<template>
  <header>
    <logo />
  </header>
</template>
<script>
import Logo from "./Logo";
export default {
  components: { Logo },
};
</script>
<style lang="scss" scoped>
header {
  background-color: getColor("secondary");
  padding: 2rem;
  display: flex;
  /* flex-wrap: wrap; */
  justify-content: space-between;
}
</style>
