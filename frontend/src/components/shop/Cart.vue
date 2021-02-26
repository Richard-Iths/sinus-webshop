<template>
  <article class="cart">
      <h2>Cart</h2>
    <div class="list" v-for="product in cart" :key="product._id">
      <p>{{product.title}}</p>
      <p>{{product.amount}}</p>
      <button @click="decrease(product)">less</button>
      <button @click="increase(product)">more</button>
      <button @click="removeFromCart(product)">remove</button>
    </div>
    <button @click="makeOrder">make order</button>
  </article>
</template>

<script>
export default {
    computed: {
        cart(){
            return this.$store.getters['order/getCart']
        }
    },
    methods: {
        removeFromCart(product){
            this.$store.dispatch('order/removeFromOrder', product)
        },

        decrease(product){
            this.$store.dispatch('order/decreaseAmount', product)
        },
        increase(product){
            this.$store.dispatch('order/updateOrder', product)
        },
        makeOrder(){
            this.$store.dispatch('order/makeOrder')
        }
    }
}
</script>

<style lang="scss" scoped>
.cart{
    display:flex;
    .list{
        margin: 1rem;
    }
}
</style>