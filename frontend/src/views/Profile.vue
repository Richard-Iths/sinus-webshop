<template>
  <div>
    <div class="details">
      <h1 class="col-2">your details</h1>
      <div class="col-2">
        <img
        src="../assets/edit.svg"
        alt="edit"
        class="edit"
        @click="edit"
      />
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

      
      <Button class="col-2" value="save" @click="save" v-if="editing"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  name: "Profile",
  components: {
    Button,
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
    }
  },
};
</script>

<style lang="scss" scoped>
label,
h1 {
  text-transform: uppercase;
}

label {
  color: #666666;
  padding-left: 0.2rem;
  margin-left: 2px;
}

input {
  padding: 0.2rem;
  border: 2px #ddd solid;
  margin-left: calc(0.2rem + 2px);
}

input[disabled] {
  background: transparent;
  border: none;
  margin: 2px;
}

input:focus {
  outline: none;
}

.col-2,
.col-1 {
  grid-column: auto/span 2;
  display: flex;
  flex-direction: column;
}

@media screen and (min-width: 800px) {
  .col-1 {
    grid-column: auto/span 1;
  }

  .col-2 {
    grid-column: auto/span 2;
  }
}

.details {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  padding: 1rem;
  gap: 1rem;
  max-width: 40rem;
}

.edit {
  width: 2rem;
  cursor: pointer;
  align-self: flex-end;
}
</style>