<template>
  <Transition :transitionObj="{ name: 'slide-left', appear: true }">
    <div class="wrapper">
      <div class="apu">
        <router-link to="/profile" v-if="isLoggedIn">
          <nav-icon
            :iconSize="icon.size"
            icon="manage_accounts"
            @click.native="toggleModal"
          />
        </router-link>
        <div class="apu__login-register" v-else>
          <Button value="Register" @click="showRegister" />
          <Button value="Login" @click="showLogin" />
        </div>
      </div>

      <ul class="navigation-list">
        <router-link to="">
          <li class="navigation-list__item"><h2>SHOP</h2></li>
        </router-link>
        <router-link to="">
          <li class="navigation-list__item"><h2>ABOUT</h2></li>
        </router-link>
        <router-link to="">
          <li class="navigation-ist__item"><h2>CONTACT</h2></li>
        </router-link>
      </ul>
      <div class="form-input">
        <label for="search"
          ><nav-icon
            :iconSize="icon.search"
            icon="search"
            @click.native="toggleModal"
        /></label>
        <input type="search" name="search" />
      </div>
    </div>
  </Transition>
</template>
<script>
import Transition from "@/components/transition/Transition.vue";
import NavIcon from "./NavIcon";
import Button from "@/components/Button.vue";

export default {
  components: { Transition, NavIcon, Button },
  computed: {
    isLoggedIn() {
      return this.$store.getters["user/getToken"];
    },
  },
  data() {
    return {
      icon: {
        size: "icon--big",
        search: "icon--medium",
      },
      showLoginModal: false,
      showRegisterModal: false,
    };
  },
  methods: {
    showRegister() {},
    showLogin() {},
  },
};
</script>
<style lang="scss" scoped>
.wrapper {
  background-color: #ddd9d9;
  position: fixed;
  left: 0;
  top: 0;
  min-height: 88%;
  min-width: 50vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: space-between;

  i {
    display: block;
    text-align: left;
    padding-top: 1rem;
    padding-left: 1rem;
    color: #4382ac;
  }
  .apu {
    margin-top: 2rem;
    &__login-register {
      display: flex;
      justify-content: space-evenly;
      button {
        min-width: 10rem;
        max-width: 34rem;
        background-color: #fff;
        color: #222;
        font-size: 1em;
        cursor: pointer;
        &:last-child {
          background-color: #4382ac;
          color: #fff;
        }
      }
    }
  }

  .navigation-list {
    list-style-type: none;
    text-align: center;
    /* flex-grow: 1; */
    &__item {
      margin: 2rem 0;
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin: 1rem 0;
    i {
      color: #222;
    }
    input {
      border: 3px solid #000;
      padding: 1rem 0rem 1rem 4rem;
      outline: none;
    }
    label {
      position: absolute;
      margin-top: 0.2rem;
    }
  }
}
</style>
