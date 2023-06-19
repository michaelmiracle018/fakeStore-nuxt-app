<template>
  <div>
    <section class="arrival__container">
      <div class="arrival__sub-container">
        <div class="title">
          <h3>NEW ARRIVAL</h3>
        </div>
        <div class="new__arrival container">
          <div class="single__item single__item-1">
            <img src="~/assets/images/poster-1.png" alt="" />
            <h3>
              2021 Trends <br />
              Electronic Systems
            </h3>
          </div>
          <div class="single__item single__item-2">
            <img src="~/assets/images/poster-2.png" alt="" />
            <h3>
              2021 Trends <br />
              Women’s Smart Skirt
            </h3>
          </div>
          <div class="single__item single__item-3">
            <img src="~/assets/images/poster-3.png" alt="" />
            <h3>
              2021 Trends <br />
              Women’s Smart Shirt <br />
              <span>Discover More:</span>
            </h3>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.arrival__container {
  background: #fff;
  font-family: "Montserrat";

  .arrival__sub-container {
    .title {
      text-align: center;
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
    }
    .new__arrival {
      display: grid;

      .single__item {
        position: relative;
        padding: 1rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        &-1,
        &-2 {
          grid-column: 1;
        }

        &-3 {
          grid-column: 2;
          grid-row: 1 / span 2;
        }

        h3 {
          position: absolute;
          bottom: 10%;
          left: 5%;
          color: #fff;
          font-size: 2rem;
          line-height: 3.5rem;

          span {
            display: block;
            margin-top: 3rem;
          }
        }
      }
    }

    @media (max-width: 967px) {
      .new__arrival {
        .single__item {
          h3 {
            font-size: 1.6rem;
            line-height: 2.5rem;
          }
        }
      }
    }

    @media (max-width: 768px) {
      .new__arrival {
        display: block;
        .single__item {
          h3 {
            bottom: 15%;
            font-size: 1.5rem;
            line-height: 2rem;
          }
        }
      }
    }
  }
}
</style>
