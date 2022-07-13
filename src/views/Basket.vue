<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Breadcrumb>Shopping Cart </Breadcrumb>
      </div>

      <div class="book__details" v-for="(item, index) in Basket" :key="item.id">
        <div class="book__img">
          <img :src="item.bookimg" alt="" />
          <span class="sale" v-if="item.discount">Discount</span>
        </div>
        <h4>{{ item.bookname }}</h4>
        <div class="book__price">
          {{ item.price }} $ <span class="old__price">{{ item.oldprice }}</span>
        </div>
        <div class="stock d-flex">
          <h4 class="me-2">Instock</h4>
          <span>{{ item.stockcount }}</span>
        </div>
        <div class="quantity">
          <h4>Quantity</h4>
          <div class="d-flex">
            <button @click="decrease(index)">-</button>
            <span>{{ item.quantity }}</span>
            <button @click="increase(index)">+</button>
          </div>
        </div>
        <div>
          <button class="delete" @click="remove(item.id)">Delete</button>
        </div>
      </div>

      <div class="col-md-12 mt-5">
        <h5 class="text-start">What would you like to do next?</h5>
        <p>
          Choose if you have a discount code or reward points you want to use or
          would like to estimate your delivery cost.
        </p>
        <div class="accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                Use Coupon Code
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body">
                <p>Enter your coupon here</p>
                <input type="text" placeholder="Enter your coupon here" />
                <Secondarybtn>Apply Coupon</Secondarybtn>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-12 mt-5">
        <h3 class="total__price">Total: <span>$318.40</span></h3>
      </div>
      <div class="col-md-12">
        <div class="d-flex justify-content-between mt-5">
          <Secondarybtn @click="$router.push('/')"
            >Continue Shopping</Secondarybtn
          >
          <Primarybtn>Checkout</Primarybtn>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
import Primarybtn from "@/components/UI/buttons/Primarybtn";
import Secondarybtn from "@/components/UI/buttons/Secondarybtn";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    Breadcrumb,
    Primarybtn,
    Secondarybtn,
  },
  methods: {
    ...mapActions(["remove"]),
    increase(index) {
      if (this.Basket[index].quantity < this.Basket[index].stockcount) {
        this.Basket[index].quantity++;
      }
    },
    decrease(index) {
      if (this.Basket[index].quantity>1)  {
        this.Basket[index].quantity--;
      }
    },
  },
  computed: {
    ...mapGetters(["Basket"]),
  },
};
</script>

<style lang="scss" scoped>
.book__details {
  margin-bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  border-bottom: 1px solid #ced4da;
  .book__img {
    width: 150px;
    height: 200px;
    position: relative;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .sale {
    position: absolute;
    top: -20px;
    right: -30px;
    background: linear-gradient(to top, #019267, #00c897);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
  .book__price {
    font-size: 30px;
    color: #fe7f02;
    position: relative;
    span {
      position: absolute;
      top: -20px;
      font-size: 20px;
      text-decoration-line: line-through !important;
    }
  }
  .stock {
    display: flex;
    align-items: center;
    h4 {
      margin: 0;
    }
    span {
      color: #00c897;
      font-size: 18px;
      font-weight: 700;
    }
  }
  .quantity {
    display: flex;
    flex-direction: column;
    align-items: center;
    button {
      width: 30px;
      height: 30px;
      background: #fe7f02;
      border: none;
      margin: 0 15px;
    }
    span {
      font-size: 20px;
    }
  }
  .delete {
    border: none;
    background: #ff1818;
    color: #fff;
    padding: 10px 20px;
    border-radius: 8px;
  }
}
.accordion-item {
  border: 1px solid #fe7f02 !important;
}
.accordion-button {
  color: #fe7f02;
  &:focus {
    box-shadow: none;
    color: #fe7f02;
  }
}
.accordion-body {
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
  input {
    width: 50%;
    height: 50px;
    border: 1px solid #fe7f02;
    padding: 0 20px;
  }
}
.total__price {
  text-align: end;
  span {
    color: #fe7f02;
    font-size: 24px;
    margin-left: 20px;
  }
}
</style>