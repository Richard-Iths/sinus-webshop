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
  min-height: 70vh;
  border-bottom: 5px solid #fff;

  @include desktop {
    min-height: 50vh;
    background-position: center center;
  }

  h2,
  h4 {
    color: getColor("secondary");
  }

  &__inner {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    min-height: 70vh;
    background-color: rgba($color: getColor("secondary"), $alpha: 0.5);
    @include desktop {
      min-height: 49.5vh;
    }
    @include largeDesktop {
      /* font-size: 1.5em; */
    }
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

      @include tablet {
        align-self: center;
      }
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
    max-width: 34rem;

    h4 {
      align-self: center;
    }
    h2 {
      &:last-of-type {
        align-self: flex-end;
      }
    }
    @include tablet {
    }
  }
  &__sale-text {
    color: #fff;
    text-shadow: 2px 2px getColor("secondary");
    /* text-shadow: 2px 2px #222; */
  }
}
</style>
