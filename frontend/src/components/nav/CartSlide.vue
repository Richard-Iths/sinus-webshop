<template>
  <Transition :transitionObj="{ appear: true }">
    <section class="wrapper">
      <h2>Current Order</h2>
      <Cart @close="$emit('close')"/>
    </section>
  </Transition>
</template>
<script>
import Transition from "@/components/transition/Transition.vue";
import Cart from "@/components/shop/Cart.vue";

export default {
  components: { Transition, Cart },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: getColor("primary");
  position: fixed;
  right: 0;
  top: 0;
  min-height: 86.5vh;
  max-height: 86.5vh;
  min-width: 80vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  padding-top: 2rem;
  h2 {
    text-align: center;
    color: getColor("secondaryText");
  }
}
</style>
