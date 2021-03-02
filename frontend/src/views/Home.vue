<template>
  <section class="home">
    <Commercial class="home__collection" btnText="SHOW ME!" :styleObj="sale">
      <div class="commercial__sale-container">
        <h2><span class="commercial__sale-text">NEW COLLECTIONS</span></h2>
        <h4>In our</h4>
        <h2>
          <span class="commercial__sale-text">{{ sale.saleText }} SALE</span>
        </h2>
      </div>
    </Commercial>
    <Newsletter class="home__newsletter" />
    <Commercial
      class="home__new-stuff"
      btnText="LET ME SEE!"
      :styleObj="newStuff"
    >
      <div class="commercial__sale-container">
        <h2>
          <span class="commercial__sale-text">NEW {{ newStuff.saleText }}</span>
        </h2>
        <h4>In our</h4>
        <h2>
          <span class="commercial__sale-text">INVENTORY</span>
        </h2>
      </div>
    </Commercial>
    <Commercial
      btnText="MATCH ME!"
      :styleObj="match"
      class="home__match bg-darker"
    >
      <div class="commercial__sale-container">
        <h2><span class="commercial__sale-text">MATCH GEAR</span></h2>
        <h4>YOUR TASTE</h4>
        <h2>
          <span class="commercial__sale-text">AWSOME POSSIBILITIES</span>
        </h2>
      </div>
    </Commercial>
  </section>
</template>

<script>
import Commercial from "@/components/products/Commercial.vue";
import Newsletter from "@/components/newsletter/Newsletter.vue";
export default {
  name: "Home",
  components: { Commercial, Newsletter },
  data() {
    return {
      sale: {
        image: "ralph-ravi-kayden-MnxiW9KinLA-unsplash.jpg",
        saleText: "SPRING",
      },
      newStuff: {
        image: "serenity-mitchell-NH2LVXsuGPg-unsplash.jpg",
        saleText: "BOARDS",
      },
      match: {
        image: "skate-hero-1.jpg",
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.home {
  @include tablet {
    display: grid;
    grid-template-areas:
      "collection newStuff"
      "newsletter newsletter"
      "match match";
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto auto;
  }
  @include desktop {
    grid-template-rows: 50vh 22.8vh auto;
  }
  &__collection {
    @include tablet {
      grid-area: collection;
      border-right: 5px solid getColor("primary");
    }
  }
  &__new-stuff {
    @include tablet {
      grid-area: newStuff;
    }
  }
  &__newsletter {
    @include tablet {
      grid-area: newsletter;
    }
  }
  &__match {
    @include tablet {
      grid-area: match;
    }
  }
}
</style>
