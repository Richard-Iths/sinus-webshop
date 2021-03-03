<template>
  <section class="products">
    <ProductCard 
      v-for="product in products"
      :key="product._id"
      :product="product"
      @clicked="toggleModal"
    />
    <Modal v-if="showModal" @close="toggleModal">
      <ProductModal :product="activeProduct" @close="toggleModal"/>
    </Modal>
  </section>
</template>

<script>
import ProductCard from "@/components/shop/ProductCard.vue";
import Modal from '@/components/Modal.vue'
import ProductModal from '@/components/shop/ProductModal.vue'

export default {
  components: { ProductCard, Modal, ProductModal },
  data(){ return {
    showModal: false,
    activeProduct: {}
  }},
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    }
  },
  methods: {
    toggleModal(product) {
      this.activeProduct = product
      this.showModal = !this.showModal
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
    max-width: 1200px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>