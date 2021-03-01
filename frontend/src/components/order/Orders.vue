<template>
  <CollapsableBox
    class="orders"
    collapsedIcon="keyboard_arrow_down"
    uncollapsedIcon="keyboard_arrow_up"
    :title="'Order number ' + order._id"
  >
    <OrderDetails :items="order.items" />
    <div class="order-total">
      <h2>Total:</h2>
      <h2>{{ order.orderValue }}</h2>
    </div>
    <div class="order-time">
      <h2>Order time:</h2>
      <h2>{{ orderDate }}</h2>
    </div>
  </CollapsableBox>
</template>
<script>
import CollapsableBox from "@/components/utils/CollapsableBox.vue";
import OrderDetails from "./OrderDetails.vue";
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },
  components: { CollapsableBox, OrderDetails },
  computed: {
    orderDate() {
      return new Date(this.order.timeStamp).toString()
    }
  }
};
</script>

<style lang="scss" scoped>
.orders{
  font-size: 1.4rem;
}
.order-total{
  font-size: 1rem;
}
.order-time{
  font-size: 1rem;
}
</style>
