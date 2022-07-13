<template>
  <section id="carousel">
    <div class="container">
      <Carousel/>
    </div>
  </section>

  <section class="main">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-3">
          <AsideDelivery />
        </div>
        <div class="col-md-9">
          <LatestBook />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-3 d-none d-lg-block">
          <BestSellers />
        </div>
        <div class="col-lg-9">
          <div class="camping" @click="$router.push('/discount-books')">
            <h5>Discount books</h5>
            <img src="../assets/img/BookStore/camping.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="subscribe">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="subscribe__content">
            <img src="../assets/img/Plagins/icon-newsletter.png" alt="" />
            <div class="subscribe__text">
              <h4>Subscribe to our newsletter</h4>
              <p>Sign up to get discount for next order</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mail__content">
            <input type="text" placeholder="e-mail" />
            <Primarybtn>OK</Primarybtn>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import AsideDelivery from "@/components/AsideDelivery";
import LatestBook from "@/components/LatestBook";
import BestSellers from "@/components/BestSellers";
import Primarybtn from "@/components/UI/buttons/Primarybtn";
import Carousel from "@/components/Carousel";
export default {
  components: {
    AsideDelivery,
    LatestBook,
    BestSellers,
    Primarybtn,
    Carousel,
  },
};
</script>

<style lang="scss">


.main {
  .camping {
    height: 100%;
    cursor: pointer;

    img {
      width: 100%;
      object-fit: cover;
    }
  }
}

.subscribe {
  margin: 50px 0px;
  height: 150px;
  display: flex;
  position: relative;
  background: url(../assets/img/bg-subscribe.jpg);
  .row {
    background: rgba(255, 255, 255, 0.7);
    backdrop-filter: blur(3.2px);
    height: 100%;
  }
  .subscribe__content {
    display: flex;
    align-items: center;

    img {
      width: 60px;
      height: 60px;
    }
    .subscribe__text {
      display: flex;
      align-items: center;
      h4,
      p {
        margin: 0px 20px;
      }
    }
  }
  .mail__content {
    display: flex;
    input {
      width: 100%;
      outline: none;
      margin-right: 10px;
      border-radius: 20px 0px;
      border: none;
      padding: 0px 20px;
      transition: 0.3s ease;
      &:focus {
        box-shadow: none;
        border: 1px solid #f7b733;
        border-radius: 0px 20px;
      }
    }
  }
}

@media (max-width: 998px) {
  .subscribe {
    height: 120px;
    .subscribe__content {
      .subscribe__text {
        margin: 0 auto;
        flex-direction: column;
        h4,
        p {
          font-size: 14px;
          margin: 0px 0px;
        }
      }
    }
  }
}
</style>