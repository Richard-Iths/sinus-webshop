<template>
  <section class="admin">
    <CollapsableBox
      title="Orders"
      collapsedIcon="arrow_circle_down"
      uncollapsedIcon="arrow_circle_up"
    >
      <p>This is collapsable box for orders</p>
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
export default {
  components: { CollapsableBox },
};
</script>
<style lang="scss" scoped></style>
