<template>
  <div>
  <Nav />
    <div class="shop__container">
      <div class="shop__sub-container">
       
        <section class="shop__products">
          <div class="shop__product-wrap">
            <Collections />
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import Collections from "~/components/Collections.vue";
import Nav from "~/components/Nav.vue";
export default {
  components: { Collections, Nav },
    middleware: 'authCheck',

  
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: 100%;
  max-height: 20.5rem;
}
</style>
