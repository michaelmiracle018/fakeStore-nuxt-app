<template>
  <div>
    <section class="collection__container">
      <div class="collection__wrap">
        <div class="title">
          <h3>COLLECTION</h3>
          <h1>Our Top Collection</h1>
        </div>

        <div class="category__wrap">
          <div class="category__content">
            <Buttons
              v-for="item in categoryButton"
              :key="item.id"
              :item="item"
              :fetchCategoryProducts="fetchCategoryProducts"
            />
          </div>
        </div>
        <div>
          <div v-if="loadingProducts" class="card__container pb-5">
            <Loading />
          </div>
          <div v-else>
            <div class="card__container pb-5">
              <AllProducts
                v-for="item in allProducts"
                :key="item.id"
                :item="item"
              />
            </div>
          </div>

          <div class="select_wrap">
            <!-- @change="getFilteredList($event)" -->
            <!-- <select class="select" >
              <option value="" disabled>Select</option>
              <option value="20">20</option>
              <option value="16">16</option>
              <option value="12">12</option>
              <option value="8">8</option>
              <option value="4">4</option>
            </select> -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Buttons from "~/components/Buttons.vue";
import AllProducts from "~/components/AllProducts.vue";
import Loading from "~/components/Loading.vue";
import SkeletonLoad from "~/components/SkeletonLoad.vue";
import { Skeleton } from "vue-loading-skeleton";

export default {
  components: { Buttons, AllProducts, Loading, Skeleton },
  data() {
    return {
      loadingProducts: false,
      allProducts: [],
      categoryButton: [],
    };
  },
  computed: {
    getAllProducts() {
      return this.$store.getters["displayProducts/getAllProducts"];
    },
  },

  methods: {
    makeToast(variant, text) {
      this.$bvToast.toast(text, {
        title: "Notification",
        toaster: "b-toaster-top-center",
        variant,
        solid: true,
      });
    },
    // async getFilteredList(e) {
    // GET SELECTED NUMBER
    //   try {
    //     const limit = parseInt(
    //       e.target.options[e.target.options.selectedIndex].innerText
    //     );
    //     await this.$store.dispatch("displayProducts/fetchAllProducts", {
    //       limit,
    //     });
    //   } catch (error) {
    //     this.makeToast("danger", "An error occurred while fetching products");
    //   }
    // },

    async fetchAllProducts() {
      this.loadingProducts = true;
      try {
        const result = await this.$store
          .dispatch("displayProducts/fetchAllProducts")
          .then((res) => {
            // console.log(res);
            this.allProducts = res;
          });
        this.loadingProducts = false;
        return result;
      } catch (error) {
        if (error.status == 404) {
          this.makeToast("danger", "An error occurred while fetching products");
        }
      }
    },
    async fetchCategoryProducts(category) {
      this.loadingProducts = true;

      // console.log(category);
      try {
        const results = await this.$store
          .dispatch("displayProducts/fetchSpecificProduct", category)
          .then((res) => {
            this.allProducts = res;
          });
        this.loadingProducts = false;
      } catch (error) {
        if (error.status == 404) {
          this.makeToast("danger", "An error occurred while fetching buttons");
        }
      }
    },
    async fetchCategoryButton() {
      try {
        const result = await this.$store
          .dispatch("displayProducts/fetchProductsCategory")
          .then((res) => {
            // console.log(res);
            this.categoryButton = res;
          });
        return result;
      } catch (error) {
        if (error.status == 404) {
          this.makeToast("danger", "An error occurred while fetching buttons");
        }
      }
    },
  },

  mounted() {
    this.fetchAllProducts();
    // this.$store.dispatch("displayProducts/fetchAllProducts");
    this.fetchCategoryButton();
  },
};
</script>

<style lang="scss" scoped>
.collection__container {
  background: #e5e5e5;

  .collection__wrap {
    .title {
      text-align: center;
      font-family: "Montez-Regular";
      padding-bottom: 5rem;
      padding-top: 6.25rem;

      h3 {
        display: inline-block;
        border-bottom: 3px solid #ff5e3a;
        padding-bottom: 0.5rem;
        margin-bottom: 2rem;
        position: relative;
        &::before {
          content: "";
          position: absolute;
          bottom: -0.7rem;
          right: 2rem;
          width: 1rem;
          height: 1rem;
          border-radius: 50%;
          background-color: #ff5e3a;
        }
      }
      h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 25px;
        color: #000000;
      }
    }
    .category__wrap {
      .category__content {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
      }
    }
    .card__container {
      width: 95%;
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 1rem;
      place-self: center;
      position: relative;
      margin-top: 5rem;

      @media screen and (min-width: 48rem) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media screen and (min-width: 64rem) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media screen and (min-width: 90rem) {
        grid-template-columns: repeat(4, 1fr);
      }
    }
    .select_wrap {
      width: 100%;
      max-width: 1170px;
      margin: 0 auto;
    }

    .select {
      border: 2px solid #d9d9d9;
      width: 100px;
      height: 55px;
      padding: 7px;
      border-radius: 9px;
      background-color: transparent;
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 17px;
    }

    .select option {
      color: #000000;
    }
  }
}
</style>
