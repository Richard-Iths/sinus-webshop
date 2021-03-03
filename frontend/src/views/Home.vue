<template>
  <section class="home">
    <Commercial class="home__collection" btnText="SHOW ME!" :styleObj="sale">
      <div class="commercial__sale-container">
        <div class="commerical__sale-container__text-wrapper">
          <h2><span class="commercial__sale-text">NEW COLLECTIONS</span></h2>
          <h4>IN OUR</h4>
          <h2>
            <span class="commercial__sale-text">{{ sale.saleText }} SALE</span>
          </h2>
        </div>
      </div>
    </Commercial>
    <Newsletter class="home__newsletter" />
    <Commercial
      class="home__new-stuff"
      btnText="LET ME SEE!"
      :styleObj="newStuff"
    >
      <div class="commercial__sale-container">
        <div class="commerical__sale-container__text-wrapper">
          <h2>
            <span class="commercial__sale-text"
              >NEW {{ newStuff.saleText }}</span
            >
          </h2>
          <h4>IN OUR</h4>
          <h2>
            <span class="commercial__sale-text">BIG INVENTORY</span>
          </h2>
        </div>
      </div>
    </Commercial>
    <Commercial
      btnText="MATCH ME!"
      :styleObj="match"
      class="home__match bg-darker"
    >
      <div class="commercial__sale-container">
        <div class="commerical__sale-container__text-wrapper">
          <h2><span class="commercial__sale-text">MATCH GEAR</span></h2>
          <h4>YOUR TASTE</h4>
          <h2>
            <span class="commercial__sale-text">AWSOME POSSIBILITIES</span>
          </h2>
        </div>
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
  /* overflow: hidden;  */
  background-color: #222;

  @include desktop {
    display: grid;
    grid-template-areas:
      "collection newStuff"
      "newsletter newsletter"
      "match match";
    grid-template-columns: 49.6vw 49.6vw;
    grid-template-rows: 70vh 45vh 85vh;
  }
  .commercial__sale-text {
    color: getColor("primary");
    background: getColor("secondary");
    padding: 3rem;
    font-size: 1.2em;
    @include desktop {
      font-size: 1.5em;
    }
  }
  .commerical__sale-container__text-wrapper {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    min-height: 55vh;
    padding: 0 1rem;

    h4 {
      font-size: 0.9em;
      background-color: getColor("primary");
      color: getColor("Secondary");
      max-width: fit-content;
      padding: 1rem;
      @include desktop {
        font-size: 1.1em;
      }
    }
    h2 {
      align-self: center;
      text-align: center;
    }
    .text-color {
    }
  }
  .commercial__sale-container {
    @include desktop {
      min-width: fit-content;
      min-height: 68vh;
    }
    min-width: 100vw;
    min-height: 65vh;
  }

  &__new-stuff {
    filter: grayscale(75%);
    max-width: 100%;
    border-left: 5px solid rgba($color: getColor("primary"), $alpha: 0.5);
    .commerical__sale-container__text-wrapper {
      min-height: 47vh;
      margin-top: 10rem;
    }
    @include desktop {
      grid-area: newStuff;
      /* max-height: 70vh; */
      .commercial__sale-container {
        min-height: 53vh;
      }
      .commerical__sale-container__text-wrapper {
        margin-top: 0;
        min-height: 47vh;
      }
    }
  }

  &__match {
    .commerical__sale-container__text-wrapper {
      min-height: 47vh;
      margin-top: 10rem;
    }
    @include desktop {
      grid-area: match;
    }
  }

  &__newsletter {
    @include desktop {
      grid-area: newsletter;
    }
  }

  &__collection {
    @include tablet {
      background-position: center -25rem;
    }
    @include desktop {
      grid-area: collection;
    }
    .commercial__sale-container {
      min-height: 40vh;
      @include desktop {
        min-height: 53vh;
      }
    }
    .commerical__sale-container__text-wrapper {
      min-height: 47vh;
    }
  }
}
</style>
