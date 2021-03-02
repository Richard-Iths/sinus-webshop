<template>
  <article class="product">
    <i class="close icon material-icons" @click="$emit('close')"> close </i>
    <div :class="'image-container' + ' ' + padWheelClass">
      <img class="image" :src="imgSrc" :alt="product.shortDesc" />
    </div>
    <ProductDesc class="product-info" :product="product">
      <div class="size-container">
        <label for="size">SIZE</label>
        <select id="size">
          <option v-for="size in sizes" :key="size" :value="size">
            {{ size }}
          </option>
        </select>
      </div>
      <AddButton class="button" @click="addToCart" :value="'add to cart'" />
    </ProductDesc>
    <div class="desc-container">
      <h2>description</h2>
      <p class="desc-container--text">{{ product.longDesc }}</p>
    </div>
  </article>
</template>

<script>
import ProductDesc from "@/components/shop/ProductDesc.vue";
import AddButton from "@/components/Button.vue";

export default {
  components: { ProductDesc, AddButton },
  props: {
    product: Object
  },
  methods: {
    addToCart() {
      this.$store.dispatch("order/updateOrder", this.product);
    }
  },

  computed: {
    sizes() {
      switch (this.product.category) {
        case "board":
          return ["7'8", "8'0", "8'25"];
        case "wheels":
        case undefined:
          return ["52mm", "53mm", "54mm"];
        case "clothes":
          return ["XS", "S", "M", "L", "XL"];
        default:
          return [];
      }
    },
    padWheelClass() {
      return this.product.category == "wheels" || !this.product.category
        ? "pad-wheel-class"
        : this.product.category == "clothes"
        ? "pad-clothes-class"
        : "";
    },
    imgSrc() {
      return require(`@/assets/${this.product.imgFile}`);
    }
  }
};
</script>

<style lang="scss" scoped>
.product {
  .close {
    position: fixed;
    right: 5%;
    padding: 1rem 1rem 0 0;
    font-size: 4rem;
    cursor: pointer;
  }

  max-width: 90%;
  max-height: 90%;
  background-color: #fff;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 1fr 0.5fr auto;
  box-shadow: 0 0 1rem 0.5rem rgba(30, 30, 30, 0.7);

  overflow-y: auto;

  .image-container {
    grid-row: 1;
    grid-column: 1 / span 2;
    display: grid;
    place-items: center;

    &.pad-wheel-class {
      padding-top: 3rem;
      margin-bottom: -3rem;
    }
    &.pad-clothes-class {
      padding-top: 2rem;
    }
    .image {
      width: 80%;
    }
  }

  .product-info {
    grid-row: 2;
    grid-column: span 2;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &--title {
      text-transform: uppercase;
      font-size: 2rem;
    }

    .size-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      select {
        outline: none;
        border: 2px solid black;
        border-radius: none;
        padding: 0.7rem;
      }
    }

    .button {
      font-size: 2rem;
      padding: 1rem 0;
    }
  }
  .desc-container {
    text-align: center;

    grid-column: 1 / span 2;
    border-top: 2px solid gray;

    padding: 2rem;
    padding-bottom: 4rem;
    h2 {
      margin-bottom: 0.5rem;
    }
    &--text {
      text-align: left;
    }
  }
  @media only screen and (min-width: 700px) {
    max-height: 70%;
    max-width: 60rem;
    padding-left: 5rem;
    padding-right: 5rem;

    grid-template-rows: 1fr 1fr;

    .image-container {
      padding-top: 3rem;
      grid-row: 1;
      grid-column: 1;
    }
    .product-info {
      grid-row: 1;
      grid-column: 2;
    }
    .button {
      font-size: 2rem;
    }
    .close{
        position: relative;
    grid-column: 2;
    grid-row: 1;
    justify-self: right;
    align-self: start;
    }
  }
}
</style>