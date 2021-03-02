<template>
  <div class="checkout">
    <CheckoutForm
      :disabled="disableForm"
      class="form"
      v-if="!user"
      @save-info="saveInfo"
      @edit="edit"
    />
    <CartItem v-for="order in cart" :key="order.id" :order="order" />
    <p class="red" v-if="error">{{ error }}</p>
    <h4>
      Total: <span class="blue">{{ total }}</span> kr
    </h4>
    <Button class="margin-1" value="Place order" @click="placeOrder" />
  </div>
</template>

<script>
import CheckoutForm from "@/components/CheckoutForm.vue";
import CartItem from "@/components/shop/CartItem.vue";
import Button from "@/components/Button.vue";
export default {
  name: "Checkout",
  components: {
    CheckoutForm,
    CartItem,
    Button,
  },
  data() {
    return {
      anonymousUser: undefined,
      disableForm: false,
      error: undefined,
    };
  },
  computed: {
    user() {
      const user = this.$store.getters["user/getUser"];
      if (Object.keys(user).length === 0) {
        return false;
      } else {
        return user;
      }
    },
    cart() {
      return this.$store.getters["order/getCart"];
    },
    total() {
      return this.cart.reduce((prevVal, currentVal) => {
        return prevVal + currentVal.amount * currentVal.price;
      }, 0);
    },
  },
  methods: {
    saveInfo(user) {
      this.anonymousUser = user;
      this.disableForm = true;
    },
    placeOrder() {
      if ((this.cart.length !== 0 && this.anonymousUser) || this.user) {
        this.error = undefined
        this.$store.dispatch("order/makeOrder");
      } else {
        if (!this.anonymousUser) {
          this.error = "Please provide all information";
        } else {
          this.error = "No items in cart";
        }
      }
    },
    edit() {
      this.disableForm = false;
    },
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

.cart-products {
  width: 90%;
}

.blue {
  color: #2b6faf;
}

.red {
  color: red;
}

.margin-1 {
  margin: 1rem;
}
</style>