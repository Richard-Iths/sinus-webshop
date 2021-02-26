<template lang="">
  <div class="newsletter">
    <div class="newsletter__text">
      <h2>SIGN UP</h2>
      <h4>FOR OUR</h4>
      <h2>NEWSLETTER</h2>
      <h4>AND GAIN</h4>
      <h2>GREATE BENEFITS</h2>
    </div>
    <div class="newsletter__input-controller">
      <input type="email" name="email" placeholder="Email" />
    </div>
    <Button value="SIGN UP" />
  </div>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
};
</script>
<style lang="scss" scoped>
.newsletter {
  background-color: #222;
  min-height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 3px solid #fff;
  h4,
  h2 {
    color: #fff;
  }
  button {
    color: getColor("primary");
    background-color: getColor("secondaryElements");
    border: 6px solid getColor("primary");
    margin-top: 2rem;
    padding: 2rem;
    min-width: 25rem;
  }
  &__text {
    min-width: 50vw;
    display: flex;
    flex-direction: column;
    h2 {
      /* color: powderblue; */
      color: #f5f560;
      text-shadow: 2px 10px #222;
      letter-spacing: 1px;
      align-self: center;
      margin-top: 1rem;
      font-style: italic;
    }
    h4 {
      align-self: center;
      margin-top: 0.5rem;
    }
  }
  &__input-controller {
    margin-top: 5rem;
    input {
      border: none;
      outline: none;
      padding: 2rem;
      min-width: 25rem;
    }
  }
}
</style>
