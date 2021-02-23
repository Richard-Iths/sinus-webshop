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
      console.log(products, "products");
    },
    async getSingleProduct() {
      const product = await API.getProductById("SxStsi9dmrmRzWtz");
      console.log(product, "singel product");
    },
  },

  created() {
    // this.auth();
    // this.register();
    // this.getProductsTest();
    this.getSingleProduct();
  },
};
</script>
