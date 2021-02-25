<template>
  <nav class="navigation">
    <NavIcon
      :class="`${rotate} hide-desktop`"
      :iconSize="icon.size"
      icon="segment"
      @click.native="toggleMenu"
    />
    <NavIcon
      :class="`${popup} hide-desktop`"
      :iconSize="icon.size"
      icon="shopping_cart"
      @click.native="toggleCart"
    />
    <MobileMenuSlide v-if="showMenu" />
    <CartSlide v-if="showCart" />
  </nav>
</template>
<script>
import MobileMenuSlide from "./MobileMenuSlide.vue";
import CartSlide from "./CartSlide";
import NavIcon from "./NavIcon.vue";
export default {
  components: { NavIcon, MobileMenuSlide, CartSlide },
  computed: {
    rotate() {
      return this.rotateIcon ? "rotate-icon" : "rotate-default";
    },
    popup() {
      return this.popoutIcon ? "popup-icon" : "popup-default";
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
      showMenu: false,
      showCart: false,
      popoutIcon: false,
    };
  },
  methods: {
    toggleMenu() {
      if (this.showCart) {
        this.showCart = !this.showCart;
        this.popoutIcon = !this.popoutIcon;
      }
      this.showMenu = !this.showMenu;
      this.rotateIcon = !this.rotateIcon;
    },
    toggleCart() {
      if (this.showMenu) {
        this.showMenu = !this.showMenu;
        this.rotateIcon = !this.rotateIcon;
      }
      this.showCart = !this.showCart;
      this.popoutIcon = !this.popoutIcon;
    },
  },
};
</script>
<style lang="scss" scoped>
.navigation {
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  background-color: peachpuff;
  left: 0;
  i {
    margin-top: 1rem;
    color: orangered;
    margin-right: 2rem;
  }
  .rotate-icon {
    transform: rotate(180deg);
    transition: all 0.5s ease;
  }
  .rotate-default {
    transition: all 0.5s ease;
  }
  .popup-icon {
    transform: scale(1.2);
    text-shadow: peachpuff;
    transition: all 0.5s ease;
  }
  .popup-default {
    transition: all 0.5s ease;
  }
  &__list {
    list-style-type: none;
  }
}
</style>
