<template>
  <div>
    <main class="container">
      <div class="product_item">
        <!-- <nuxt-link :to="`/Products/${item.id}`" class="card"> -->
        <div class="product_img">
          <img src="" alt="" class="mt-4 skeleton" />
        </div>
        <!-- </nuxt-link> -->
        <!-- <button class="shop_btn"> -->
        <i class="fa-solid fa-cart-plus cart_btn"></i>
        <!-- </button> -->
        <footer class="px-2">
          <h5 class="skeleton skeleton-text"></h5>
          <h5 class="skeleton skeleton-text"></h5>
        </footer>
      </div>
    </main>
  </div>
</template>

<script>
export default {
    props: ['item']
}
</script>

<style lang="scss" scoped>
.product_item {
  background: #fff;
  min-width: 250px;
  height: 200px;
  position: relative;
  overflow: hidden;

  &:hover {
    border: 0.04rem solid rgba(0, 0, 0, 0.2);
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }

  &:hover .cart_btn {
    transform: translate(0, 0);
  }

  .product_img {
    display: flex;
    justify-content: center;
  }

  .product_img img {
    width: 150px;
    height: 120px;
    transition: all 1s linear;
  }
  .product_img:hover img {
    transform: scale(1.2);
  }

  .cart_btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.1rem 0.2rem;
    background: linear-gradient(
      180deg,
      rgba(255, 81, 81, 0.5) 0%,
      #ff5e3a 100%
    );

    border: none;
    color: #fff;
    font-size: 2.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s ease-in-out;
    z-index: 1;

    &:hover {
      color: #fff;
      cursor: pointer;
    }
  }

  .product_img:hover .product_footer {
    box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
  }
}

.product__footer {
  // background: transparent;
  border-top: transparent;
  transition: all 1s linear;
  display: flex;
  justify-content: space-between;
  background: grey;

  & h5 {
    color: #fff;
    font-size: 1.2rem;
    margin-top: 5px;
    font-family: "Montserrat-Italic";
  }
}

.skeleton {
  opacity: 0.7;
  animation: skeleton-loading 1s linear infinite alternate;
}

.skeleton-text {
  width: 100%;
  height: 0.5rem;
  margin-bottom: 0.25rem;
  border-radius: 0.125rem;
}

.skeleton-text:last-child {
  margin-bottom: 0;
  width: 80%;
}

@keyframes skeleton-loading {
  0% {
    background-color: hsl(200, 20%, 70%);
  }

  100% {
    background-color: hsl(200, 20%, 95%);
  }
}
</style>
