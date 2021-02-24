<template>
  <Form class="login">
    <div class="col-2">
      <label for="email">e-mail</label>
      <input type="text" name="email" v-model="email">
    </div>
    <div class="col-2">
      <label for="password">password</label>
      <input type="password" name="password" v-model="password">
    </div>
    <Button class="col-2" value="log in" @click="login"/>
  </Form>
</template>

<script>
import Button from "@/components/Button.vue"
import Form from "@/components/Form.vue"
export default {
  name: "Login",
  components: {
    Button,
    Form
  },
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    login() {
      
    }
  },
};
</script>

<style lang="scss" scoped>

</style>