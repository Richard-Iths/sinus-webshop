<template>
  <div class="collapsable">
    <div class="collapsable__header">
      <h2>{{ title }}</h2>
      <navIcon
        @click.native="toggleCollapsed"
        :icon="icon"
        iconSize="icon--big"
      />
    </div>

    <slot v-if="!isCollapsed"></slot>
  </div>
</template>
<script>
import NavIcon from "@/components/nav/NavIcon.vue";
export default {
  components: { NavIcon },
  props: {
    title: {
      type: String,
      required: true,
    },
    collapsedIcon: {
      type: String,
      required: true,
    },
    uncollapsedIcon: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isCollapsed: true,
      icon: this.collapsedIcon,
    };
  },
  methods: {
    toggleCollapsed() {
      this.isCollapsed = !this.isCollapsed;
      if (this.isCollapsed) {
        this.icon = this.collapsedIcon;
      } else {
        this.icon = this.uncollapsedIcon;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.collapsable {
  &__header {
    display: flex;
    justify-content: space-between;
  }
}
</style>
