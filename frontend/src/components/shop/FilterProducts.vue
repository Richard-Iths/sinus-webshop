<template>
  <aside class="filter">
    <div class="wrapper">
        <Button value="categories" @click="openList" />
        <ul v-if="showList" id="filter-list">
        <li v-for="category in categories" :key="category">
            <input type="checkbox" @click="checked" :value="category" />{{ category }}
        </li>
        </ul>
    </div>
  </aside>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: { Button },
  data() {
    return {
      showList: false,
      filterArr: []
    };
  },
  computed: {
    products() {
      return this.$store.getters["products/getProducts"];
    },
    categories() {
      let categoryArray = [];
      this.products.forEach(product => {
        if (!categoryArray.includes(product.category) && product.category) {
          categoryArray.push(product.category);
        }
      });
      return categoryArray;
    }
  },
  methods: {
    openList() {
      this.showList = !this.showList;
    },
    checked(e) {
        if(e.target.checked){
            this.filterArr.push(e.target.value)
        } else{
            this.filterArr = this.filterArr.filter(element => element != e.target.value)
        }
        this.$emit('filter', this.filterArr)
    }
  }
};
</script>

<style lang="scss" scoped>
.filter {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .wrapper{
        height: 4rem;
        display: flex;
    }
  ul {
      position: relative;
      display: flex;
      align-items: center;
    li {
        padding: 1rem;
      list-style-type: none;
    }
  }
}
</style>