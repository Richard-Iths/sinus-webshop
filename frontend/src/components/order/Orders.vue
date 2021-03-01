<template>
  <CollapsableBox
    collapsedIcon="keyboard_arrow_down"
    uncollapsedIcon="keyboard_arrow_up"
    :title="'Order number ' + order._id"
  >
    <OrderDetails :items="order.items" />
    <div class="order-total">
      <h2>Total:</h2>
      <h2>{{ order.orderValue }}</h2>
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
};
</script>

<style lang=""></style>
