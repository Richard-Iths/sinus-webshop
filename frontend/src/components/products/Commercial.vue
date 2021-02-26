<template>
  <section
    class="commercial"
    :style="{
      'background-image': 'url(' + getImage + ')',
    }"
  >
    <div class="commercial__inner">
      <slot></slot>
      <Button :value="btnText" />
    </div>
  </section>
</template>
<script>
import Button from "@/components/Button.vue";
export default {
  props: {
    btnText: {
      type: String,
      required: true,
    },
    styleObj: {
      type: Object,
      required: true,
      image: {
        type: String,
        required: true,
      },
    },
  },
  components: { Button },

  computed: {
    getImage() {
      return require(`@/assets/${this.styleObj.image}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.commercial {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center 0;
  max-height: 70vh;
  border-bottom: 3px solid #fff;
  h2,
  h4 {
    color: getColor("secondary");
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 69vh;
    background-color: rgba($color: getColor("secondary"), $alpha: 0.5);
    button {
      min-width: 25rem;
      margin: 3rem 2rem;
      display: block;
      align-self: flex-end;
      padding: 2rem;
      background-color: getColor("secondaryElements");
      border: 5px solid #fff;
      font-size: 1.2em;
      color: #fff;
    }
  }
  &__sale-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: rgba($color: getColor("primary"), $alpha: 0.7);
    margin: 0 auto;
    width: 80%;
    padding: 2rem;
    h4 {
      align-self: center;
    }
    h2 {
      &:last-of-type {
        align-self: flex-end;
      }
    }
  }
  &__sale-text {
    color: getColor("secondaryText");
    /* text-shadow: 2px 2px #222; */
  }
}
</style>
