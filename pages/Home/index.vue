<template>
  <div>
    <Hero />
    <Arrival />
    <statics />
    <Blog />
    <ShopOnline />
    <!-- <Footer /> -->
  </div>
</template>

<script>
import Hero from "~/components/Hero.vue";
import Footer from "~/components/Footer.vue";
import Arrival from "~/components/Arrival.vue";
import Statics from "~/components/Statics.vue";
import Blog from "~/components/Blog.vue";
import ShopOnline from "~/components/ShopOnline.vue";

export default {
  components: { Hero, Footer, Arrival, Statics, Blog, ShopOnline },
};
</script>

<style lang="scss" scoped></style>
