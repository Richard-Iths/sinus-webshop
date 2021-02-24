<template>
  <nav class="navigation">
    <nav-icon
      :class="rotate"
      :iconSize="icon.size"
      icon="segment"
      @click.native="roateMenuIcon"
    />
  </nav>
</template>
<script>
import NavIcon from "./NavIcon.vue";
export default {
  components: { NavIcon },
  computed: {
    rotate() {
      return this.rotateIcon ? "rotate-icon" : "rotate-default";
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
      },
      rotateIcon: false,
    };
  },
  methods: {
    roateMenuIcon() {
      this.rotateIcon = !this.rotateIcon;
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  i {
    margin-top: 1rem;
  }
  .rotate-icon {
    transform: rotate(-90deg);
    transition: all 0.5s ease;
  }
  .rotate-default {
    transition: all 0.5s ease;
  }
}
</style>
