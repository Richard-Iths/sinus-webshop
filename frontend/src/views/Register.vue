<template>
  <div class="register">
    <Form>
      <div class="col-2">
        <label for="email">e-mail</label>
        <input
          type="text"
          v-model="user.email"
          name="email"
        />
      </div>
      <div class="col-2">
        <label for="password">password</label>
        <input type="password" v-model="user.password" name="password">
      </div>
      <div class="col-2">
        <label for="name">name</label>

        <input
          type="text"
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="col-2">
        <label for="street">street</label>
        <input
          type="text"
          v-model="user.address.street"
          name="street"
        />
      </div>
      <div class="col-2">
        <label for="zip">zip code</label>

        <input
          type="text"
          v-model="user.address.zip"
          name="zip"
        />
      </div>

      <div class="col-2">
        <label for="city">city</label>
        <input
          type="text"
          v-model="user.address.city"
          name="city"
        />
      </div>
      <p v-if="error">{{ error }}</p>
      <Button class="col-2" value="register" @click="register"/>
    </Form>
  </div>
</template>

<script>
import Form from "@/components/Form.vue";
import Button from '@/components/Button.vue';
export default {
  components: {
    Form,
    Button
  },
  methods: {
    async register() {
      this.error = await this.$store.dispatch('user/register', this.user)
    }
  },
  data() {
    return {
      error: null,
      user: {
        email: "",
        password: "",
        name: "",
        address: {
          city: "",
          zip: "",
          street: "",
        }
      }
    }
  },
};
</script>

<style lang="scss" scoped>
form {
  margin: 0 auto;
}
button {
  margin-left: calc(0.2rem + 2px);
}
</style>