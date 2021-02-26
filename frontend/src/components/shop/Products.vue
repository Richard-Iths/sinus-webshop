<template>
  <section class="products">
    <ProductCard 
      v-for="product in products"
      :key="product._id"
      :product="product"
    />
  </section>
</template>

<script>
import ProductCard from "@/components/shop/ProductCard.vue";

export default {
  components: { ProductCard },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    }
  },

  mounted() {
    this.$store.dispatch("products/getProducts");
  }
};
</script>

<style lang="scss" scoped>
  .products {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>