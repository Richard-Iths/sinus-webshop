<template>
    <div class="products">
      <div class="buttons" v-for="product in products" :key="product._id">
        <p>{{ product.title }}</p>
        <button @click="addToCart(product)">add to cart</button>
      </div>
    </div>
</template>

<script>

export default {
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    }
  },

  methods: {
    addToCart(product) {
      this.$store.dispatch("order/updateOrder", product);
    }
  },

  mounted() {
    this.$store.dispatch("products/getProducts");
    /*  this.$store.dispatch("user/login", {
      "email": "customer@example.com",
      "password": "password"
    }); */
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  .products {
    display: flex;
    flex-wrap: wrap;
    .buttons {
      margin: 1rem;
    }
  }
}
</style>