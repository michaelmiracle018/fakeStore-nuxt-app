<template>
  <div>
    <div class="hero__container">
      <div class="hero__sub-container">
        <div class="hero__left">
          <p>Limited Time Only For Buyers</p>
          <h2 class="my-3">Great Products</h2>
          <h4>Get The Best Available Products</h4>
          <!-- <Link to="/shop"> -->
            <button class="">Explore more</button>
          <!-- </Link> -->
        </div>
        <div class="hero__right pt-3">
          <img src="~assets/images/Ellipse 6.svg" alt="roundLogo" class="round__img" />
          <picture>
            <img src="~assets/images/woman-in-cart.png" alt="" />
          </picture>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.hero__container {
  background: #e5e5e5;
  .hero__sub-container {
    display: flex;
    justify-content: space-between;
    align-items: space-between;
    width: 100%;
    max-width: 1340px;
    // max-height: 600px;
    margin: auto;
    background: linear-gradient(
      90deg,
      rgba(252, 203, 144, 0.44) 0%,
      rgba(255, 154, 158, 0.38) 100%
    );
    border-radius: 20px;
    z-index: -2;
    height: 100%;
    @media screen and (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
    }

    .hero__left {
      margin-top: 8.125rem;
      margin-left: 6.25rem;
      color: #000000;
      @media screen and (max-width: 768px) {
        margin-left: 1rem;
      }
      p {
        font-family: "Montserrat-regular";
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 23px;
      }
      h2 {
        font-family: "Montserrat-regular";
        font-style: normal;
        font-weight: 700;
        font-size: clamp(1.5rem, 10vw, 3.5rem);
        line-height: 70px;
      }
      h4 {
        font-family: "Montserrat-regular";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 31px;
      }
      button {
        width: 210px;
        height: 60px;
        background: linear-gradient(
          180deg,
          rgba(255, 81, 81, 0.5) 0%,
          #ff5e3a 100%
        );
        border-radius: 10px;
        cursor: pointer;
        font-family: "mothwing-demo";
        font-style: normal;
        font-weight: 900;
        font-size: 16px;
        line-height: 25px;
        color: #ffffff;
        margin-top: 3rem;
      }
    }

    .hero__right {
      position: relative;
      z-index: 1;

      @media screen and (min-width: 100px) {
        align-self: flex-end;
      }
      picture img {
        width: 100%;
        max-width: 486.13px;
        height: 599px;
        object-fit: cover;
        z-index: 5;
      }
      .round__img {
        position: absolute;
        right: 130px;
        top: 65px;
        z-index: -1;
      }
    }
  }
}
</style>
