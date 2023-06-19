<template>
  <div>
    <main class="single_product_section my-5 py-5">
      <div class="single_item container">
        <div class="single_item_img">
          <img :src="singleProduct.image" alt="" />
        </div>
        <div class="single_product_info mt-5">
          <h1>{{ singleProduct.title?.substring(0, 25) }}...</h1>
          <h4>price : ${{singleProduct.price}}</h4>
          <h3>Some Info About Product :</h3>
          <p>{{singleProduct.description}}</p>
          <div class="single_item_btn">
            <button>Back To Product</button>
            <button>Add To Cart</button>
          </div>
        </div>
      </div>

      <div class="similar_product">
        <h1 class="pt-5 text-center">Similar Products</h1>
        <div class="card__container container pb-5">
          <RelatedProducts />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import RelatedProducts from "~/components/RelatedProducts";
export default {
  components: { RelatedProducts },
  data() {
    return {
      singleProduct: [],
    };
  },
  methods: {
    async fetchSingleProducts() {
      try {
        const body = {
          id: this.$route.params.id,
        };
        const results = await this.$store
          .dispatch("displayProducts/fetchSingleProduct", body)
          .then((res) => {
            this.singleProduct = res;
          });
        return results;
      } catch (error) {
        if (error.status == 404) {
          this.makeToast("danger", "An error occurred while fetching products");
        }
      }
    },
  },
  created() {
    this.fetchSingleProducts();
  },
};
</script>

<style lang="scss" scoped>
.single_product_section {
  font-family: "mothwing-demo";
  /* width: 90%;
	margin: auto; */

  .similar_product {
    background: rgba(226, 228, 207, 0.3);
  }

  .single_item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 48rem) {
      flex-direction: row;
      /* justify-content: start;
        align-items: flex-start; */
      gap: 3rem;
    }
  }
  .single_item_img img {
    width: 100%;
    max-width: 20rem;
    height: 100%;
    min-height: 20rem;
  }

  .single_product_info h1 {
    font-size: 2rem;
    color: #000;
    font-weight: 600;
  }

  .single_product_info h4 {
    font-size: 1.5rem;
    color: #000;
    font-weight: 300;
  }

  .single_product_info h3 {
    font-size: 1rem;
    font-weight: 700;
    color: rgb(150, 151, 128);
  }

  .single_product_info p {
    width: 100%;
    max-width: 40rem;
    font-size: 1rem;
    line-height: 1.4;
  }

  .single_item_btn {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    a {
      color: #000;
    }

    & button {
      width: 10rem;
      background: transparent;
      text-transform: capitalize;
      font-size: 0.8rem !important;
      color: #000;
      border-radius: 0.5rem !important;
      border: 0.1rem solid rgb(189, 185, 115) !important;
      font-weight: 600;
      padding: 0.8rem;
      &:hover {
        background: rgb(189, 185, 115);
        color: #FFF;
      }
    }
  }
  .card__container {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 2rem;
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
}
</style>
