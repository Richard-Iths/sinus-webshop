<template>
  <section class="admin">
    <CollapsableBox
      title="Orders"
      collapsedIcon="arrow_circle_down"
      uncollapsedIcon="arrow_circle_up"
    >
      <Orders v-for="order in getOrders" :key="order._id" :order="order" />
    </CollapsableBox>
    <CollapsableBox
      title="Products"
      collapsedIcon="arrow_circle_down"
      uncollapsedIcon="arrow_circle_up"
    >
      <p>This is collapsable box for products</p>
    </CollapsableBox>
  </section>
</template>
<script>
import CollapsableBox from "@/components/utils/CollapsableBox.vue";
import Orders from "@/components/order/Orders.vue";
export default {
  components: { CollapsableBox, Orders },
  computed: {
    getOrders() {
      return this.$store.getters["user/getUserOrderHistory"];
    },
  },
  mounted() {},
};
</script>
<style lang="scss" scoped></style>
