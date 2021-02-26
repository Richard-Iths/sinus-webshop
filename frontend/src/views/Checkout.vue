<template>
  <div class="checkout">
    <CheckoutForm :disabled="disableForm" class="form" v-if="!user" @save-info="saveInfo" @edit="edit"/>
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue"

export default {
  name: "Checkout",
  components: {
    CheckoutForm,
  },
  data() {
    return {
      anonymousUser: undefined,
      disableForm: false,
    }
  },
  computed: {
    user () {
      const user = this.$store.getters['user/getUser']
      if (Object.keys(user).length === 0) {
        return false
      } else {
        return user
      }
    },
    cart () {
      return this.$store.getters['cart/getCart']
    }
  },
  methods: {
    saveInfo(user) {
      this.anonymousUser = user
      this.disableForm = true
    },
    edit() {
      this.disableForm = false
    }
  },
};
</script>

<style lang="scss" scoped>
.checkout {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 90%;
}
</style>