<template>
  <transition name="slide" :duration="{ enter: 500, leave: 500 }" appear>
    <div class="wrapper">
      <router-link to="/profile">
        <nav-icon
          :iconSize="icon.size"
          icon="manage_accounts"
          @click.native="toggleModal"
        />
      </router-link>

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
  </transition>
</template>
<script>
import NavIcon from "./NavIcon";
export default {
  components: { NavIcon },
  data() {
    return {
      icon: {
        size: "icon--big",
        search: "icon--medium",
      },
    };
  },
};
</script>
<style lang="scss">
.wrapper {
  background-color: #ddd9d9;
  position: fixed;
  right: 0;
  bottom: 0;
  min-height: 85%;
  min-width: 50vw;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;

  i {
    display: block;
    text-align: right;
  }

  .navigation-list {
    list-style-type: none;
    text-align: center;
    flex-grow: 1;
    margin-top: 5rem;
    &__item {
      margin: 2rem 0;
    }
  }
  .form-input {
    display: flex;
    flex-direction: column;
    align-self: flex-end;
    margin: 1rem 0;
    input {
      border: 3px solid #000;
      padding: 1rem 0rem 1rem 4rem;
      outline: none;
    }
    label {
      position: absolute;
      margin-top: 1rem;
      margin-left: 1rem;

      &:focus-within {
        i {
          margin-top: -5rem;
        }
      }
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(100%);
}
</style>
