<template>
  <Transition :transitionObj="{ appear: true }">
    <div class="wrapper">
      <h2>Products</h2>
    </div>
  </Transition>
</template>
<script>
import Transition from "@/components/transition/Transition.vue";

export default {
  components: { Transition },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: getColor("primary");
  position: fixed;
  right: 0;
  top: 0;
  min-height: 86.5vh;
  min-width: 50vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
}
</style>
