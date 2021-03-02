<template>
  <nav class="navigation">
    <NavIcon
      :class="`${rotate} hide-desktop`"
      :iconSize="icon.size"
      icon="segment"
      @click.native="toggleMenu"
    />
    <NavIcon
      :class="`${popup}`"
      :iconSize="icon.size"
      icon="shopping_cart"
      @click.native="toggleCart"
    />
    <MobileMenuSlide v-if="showMenu" @close="showMenu = false" />
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
  position: sticky;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
  bottom: 0;
  left: 0;
  max-height: 15vh;
  background-color: getColor("secondary");
  margin-top: auto;
  @include desktop {
    justify-content: flex-end;
  }
  .hide-desktop {
    @include desktop {
      display: none;
    }
  }
  i {
    margin-top: 1rem;
    /* color: #ff4500; */
    color: getColor("secondaryText");
    margin-right: 2rem;
  }
  .rotate-icon {
    transform: rotate(180deg);
    text-shadow: 10px 0px getColor("primary");
    transition: all 0.5s ease;
  }
  .rotate-default {
    transition: all 0.5s ease;
  }
  .popup-icon {
    transform: scale(1.2);
    text-shadow: 1px 0px getColor("primary");
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
