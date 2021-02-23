<template>
  <div class="home">
    <h1>Home</h1>
  </div>
</template>

<script>
import * as API from "@/api";
export default {
  name: "Home",
  methods: {
    async auth() {
      const user = await API.authUser({
        email: "customer@example.com",
        password: "password",
      });
      console.log(user);
    },
    async register() {
      API.registerUser({
        name: "Richard",
        email: "richard@iths.se",
        password: "grillkorv",
        address: {
          street: "Tokitokvägen 3",
          zip: "123 45",
          city: "Tokberga",
        },
      });
    },
    async getAllProducts() {
      const products = await API.getProducts();
      console.log(products);
    },

    async getSingleProduct() {
      // const product = await API.getProductById("SxStsi9dmrmRzWtz");
    },
    async postOrder() {
      const order = await API.makeOrder({
        items: ["SxStsi9dmrmRzWtz", "SxStsi9dmrmRzWtz", "SxStsi9dmrmRzWtz"],
      });
      console.log(order);
    },
  },

  created() {
    // this.auth();
    // this.register();
    this.getAllProducts();
    // this.getSingleProduct();
    this.postOrder();
  },
};
</script>
