<template>
  <div>
    <main class="button__container mb-3">
      <div class="button__wrap">
        <button class="mt-3 p-2" @click="fetchCategoryProducts(item)">
          {{ item }}
        </button>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  props: ["item", "fetchCategoryProducts"],
  methods: {
    
  },
};
</script>

<style lang="scss" scoped>
.button__container {
  .button__wrap {
    button {
      width: 100%;
      height: 60px;
      background: #ffffff;
      box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.05);
      border-radius: 10px;
      font-family: "Montserrat-Italic";
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 25px;
      color: #4f5665;
      text-transform: capitalize;
      border: none;
      &:hover {
        background: linear-gradient(
          180deg,
          rgba(255, 81, 81, 0.5) 0%,
          #ff5e3a 100%
        );
        color: var(--white);
      }
    }
  }
}
</style>
