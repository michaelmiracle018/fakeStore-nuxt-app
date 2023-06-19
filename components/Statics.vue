<template>
  <div>
    <section class="section statistics">
      <div class="title">
        <h3>Our Statistics</h3>
      </div>

      <div class="stat__wrap container">
        <div class="stat__item">
          <div class="icon">
            <i class="fa-solid fa-check"></i>
          </div>
          <h3>Easy Order System</h3>
          <p>Order your product and receive exactly as ordered.</p>
        </div>
        <div class="stat__item">
          <div class="icon">
            <i class="fa-solid fa-truck"></i>
          </div>
          <h3>On Time Delievery</h3>
          <p>We Deliver at your doorstep.</p>
        </div>
        <div class="stat__item">
          <div class="icon">
            <i class="fa-solid fa-dollar-sign"></i>
          </div>
          <h3>Money Back Gaurantee</h3>
          <p>Faulty products could be returned as long side money.</p>
        </div>
        <div class="stat__item">
          <div class="icon">
            <i class="fa-solid fa-user"></i>
          </div>
          <h3>24/7 Customer Support</h3>
          <p>Customer service are always available 24/7 to attend to you.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.statistics {
  padding: 10rem 0 10rem;
  background: linear-gradient(
    to bottom,
    rgba(#fccb90, 15%),
    rgba(#ffb9bc, 10%)
  );
  font-family: "Montez-Regular";

  .title {
    text-align: center;
    padding-bottom: 5rem;
    padding-top: 1.25rem;

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
  }

  .stat__wrap {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;

    .stat__item {
      display: flex;
      align-items: start;
      flex-direction: column;
      text-align: center;
      border: 1px solid #ff5e3a;
      padding: 20px;
      border-radius: 5px;
      

      .icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 7rem;
        height: 7rem;
        font-size: 4rem;
        background: #fff;
        border-radius: 1rem;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        color: #ff5e3a;
        margin-bottom: 6rem;

        &:hover {
          background-color: #ff5e3a;
          color: #fff;
          box-shadow: 0 5px 15px rgba(255, 94, 58, 0.2);
        }
      }

      h3 {
        margin-bottom: 1.2rem;
      }

      p {
        color: #4f5665;
        width: 70%;
      }
    }
  }
}

@media (max-width: 768px) {
  .statistics {
    .stat__wrap {
      .stat__item {
          border: none;
          align-items: center;
        .icon {
          width: 8rem;
          height: 8rem;
          font-size: 3rem;
        }

        p {
          width: 80%;
          margin: 0 auto;
        }
      }
    }
  }
}
</style>
