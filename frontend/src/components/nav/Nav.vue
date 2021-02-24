<template>
  <nav class="navigation">
    <nav-icon
      :class="`${rotate} hide-desktop`"
      :iconSize="icon.size"
      icon="segment"
      @click.native="toggleModal"
    />
    <Mobile v-if="isModal" />
  </nav>
</template>
<script>
import Mobile from "./Mobile.vue";
import NavIcon from "./NavIcon.vue";
export default {
  components: { NavIcon, Mobile },
  computed: {
    rotate() {
      return this.rotateIcon ? "rotate-icon" : "rotate-default";
    },
    isLoggedIn() {
      return this.$store.getters["user/getToken"];
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
      },
      rotateIcon: false,
      isModal: false,
    };
  },
  methods: {
    toggleModal() {
      this.isModal = !this.isModal;
      this.rotateIcon = !this.rotateIcon;
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  i {
    margin-top: 1rem;
    color: orangered;
  }
  .rotate-icon {
    transform: rotate(-90deg);
    transition: all 0.5s ease;
  }
  .rotate-default {
    transition: all 0.5s ease;
  }
  &__list {
    list-style-type: none;
  }
}
</style>
