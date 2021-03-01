<template>
  <article class="order-details">
    <div class="order-details__item" v-for="item in items" :key="item.id">
      <div class="order-details__item__title-price-amount">
        <h2 class="order-details__text">{{ item.title }}</h2>
        <h2 class="order-details__text">{{ item.price }} kr / st</h2>
        <h2 class="order-details__text">{{ item.amount }} st</h2>
      </div>
      <div class="order-details__price-total">
        <h2>Total item price: {{ item.price * item.amount }} kr</h2>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.order-details {
  font-family: "Cantarell";
  font-weight: normal;
  &__item {
    &__title-price-amount {
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>
