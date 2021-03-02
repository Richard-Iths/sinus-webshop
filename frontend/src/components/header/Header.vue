<template>
  <header>
    <logo />
    <DesktopNav />
  </header>
</template>
<script>
import Logo from "./Logo";
import DesktopNav from "@/components/nav/DesktopNav.vue";
export default {
  components: { Logo, DesktopNav },
};
</script>
<style lang="scss" scoped>
header {
  max-height: 15vh;
  background-color: getColor("secondary");
  padding: 2rem;
  display: flex;
  border-bottom: 5px solid getColor("primary");
  justify-content: space-between;
}
</style>
