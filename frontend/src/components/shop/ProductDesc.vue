<template>
  <article class="product-info" @click="$emit('clicked')">
      <p class="product-info--title">{{ product.title }}</p>
      <p class="product-info--desc">{{ product.shortDesc }}</p>
      <p class="product-info--price">{{ product.price }} SEK</p>
      <slot></slot>
    </article>
</template>

<script>
export default {
    props: {
        product: Object
    }
}
</script>

<style lang="scss" scoped>
.product-info{
    padding: 2rem;
    
    &--title {
      font-family: "Fjalla One", sans-serif;
      text-transform: uppercase;
      font-size: 2rem;
    }
    &--desc {
      text-transform: lowercase;
    }
}
</style>