<template>
  <article
    class="product-card"
    :style="{
      'background-image': 'url(' + imgSrc + ')'
    }"
  >
    <div class="product-info">
      <p class="product-info--title">{{ product.title }}</p>
      <p class="product-info--desc">{{ product.shortDesc }}</p>
      <p class="product-info--price">{{ product.price }} SEK</p>
    </div>
    <!-- <button @click="addToCart(product)">add to cart</button> -->
  </article>
</template>

<script>
export default {
  props: {
    product: Object
  },
  computed: {
    imgSrc() {
      return require(`@/assets/${this.product.imgFile}`);
    }
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("order/updateOrder", product);
    }
  }
};
</script>

<style lang="scss" scoped>
.product-card {
  min-width: 25rem;
  max-width: 30rem;
  min-height: 20rem;
  margin: 2rem;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  .product-info {
    padding: 1rem;
    border-radius: 0 1rem 0 0;
    width: 50%;
    
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: rgba(255, 255, 255, 0.8);

    &--title {
      font-family: "Fjalla One", sans-serif;
      text-transform: uppercase;
      font-size: 2rem;
    }
    &--desc {
      text-transform: lowercase;
    }
  }
  @media only screen and (min-width: 700px) {
    display: grid;
    place-items: center;
    justify-content: initial;

    .product-info {
      height: 100%;
      width: 100%;
      display: none;
    }

    &:hover {
      background-size: cover;
      background-position: top left;

      & > .product-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgba(255, 255, 255, 0.5);
      }
    }
  }
}
</style>