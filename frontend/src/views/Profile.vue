<template>
  <div>
    <Form class="details">
      <h1 class="col-2">your details</h1>
      <div class="col-2">
        <img src="../assets/edit.svg" alt="edit" class="edit" @click="edit" />
      </div>
      <div class="col-1">
        <label for="email">e-mail</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.email"
          name="email"
        />
      </div>

      <div class="col-1">
        <label for="name">name</label>

        <input
          :disabled="!editing"
          type="text"
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="col-1">
        <label for="street">street</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.street"
          name="street"
        />
      </div>
      <div class="col-1">
        <label for="zip">zip code</label>

        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.zip"
          name="zip"
        />
      </div>

      <div class="col-1">
        <label for="city">city</label>
        <input
          :disabled="!editing"
          type="text"
          v-model="user.address.city"
          name="city"
        />
      </div>

      <Button class="col-2" value="save" @click="save" v-if="editing" />
    </Form>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
import Form from "@/components/Form.vue";
export default {
  name: "Profile",
  components: {
    Button,
    Form,
  },
  data() {
    return {
      user: {
        email: "customer@example.com",
        name: "David Lundholm",
        role: "customer",
        address: {
          street: "Tokitokvägen 4",
          zip: "123 46",
          city: "Tokbergaskogen",
        },
        orderHistory: [],
      },
      editing: false,
    };
  },
  methods: {
    edit() {
      this.editing = !this.editing;
    },
    save() {
      this.editing = false;
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-transform: uppercase;
}

.edit {
  width: 2rem;
  cursor: pointer;
  align-self: flex-end;
}
</style>