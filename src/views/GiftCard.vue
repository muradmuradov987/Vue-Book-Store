<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Breadcrumb>Gift Card</Breadcrumb>
      </div>
      <div class="col-lg-12">
        <div class="cover__photo">
          <img src="@/assets/img/GiftCards/gift-card-bg.png" alt="" />
        </div>
      </div>
      <div class="col-lg-12">
        <h4 class="text-center m-5">Please choose your gift type</h4>
      </div>
      <div class="col-lg-4">
        <div class="use__location">
          <h6 class="">Where will the Gift card be used?</h6>
          <div>
            <input id="location" type="radio" name="location" />
            <label for="location">United Kingdom</label>
          </div>
          <div>
            <input id="location2" type="radio" name="location" checked />
            <label for="location2">Ireland</label>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="amount">
          <h6>Choose amount</h6>
          <div class="currency">
            <div>
              <input
                id="dollar"
                type="radio"
                value="$"
                v-model="currency"
                name="currency"
                checked
              />
              <label for="dollar">$</label>
            </div>
            <div>
              <input
                id="euro"
                type="radio"
                value="€"
                v-model="currency"
                name="currency"
              />
              <label for="euro">€</label>
            </div>
            <span>{{ amount }}{{ currency }}</span>
          </div>

          <div class="d-flex justify-content-between mt-3">
            <div>
              <input
                id="amount30"
                type="radio"
                value="30"
                v-model="amount"
                name="amount"
              />
              <label for="amount30">30 {{ currency }}</label>
            </div>
            <div>
              <input
                id="amount40"
                type="radio"
                value="40"
                v-model="amount"
                name="amount"
              />
              <label for="amount40">40 {{ currency }}</label>
            </div>
            <div>
              <input
                id="amount50"
                type="radio"
                value="50"
                v-model="amount"
                name="amount"
              />
              <label for="amount50">50 {{ currency }}</label>
            </div>
            <div>
              <input
                id="amount80"
                type="radio"
                value="80"
                v-model="amount"
                name="amount"
              />
              <label for="amount80">80 {{ currency }}</label>
            </div>
            <div>
              <input
                id="amount100"
                type="radio"
                value="100"
                v-model="amount"
                name="amount"
              />
              <label for="amount100">100 {{ currency }}</label>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-4">
        <div class="delivery">
          <h6>Delivery charges</h6>
          <div class="d-flex justify-content-between">
            <p>{{ currency }}5 - {{ currency }}50.00</p>
            <p>{{ currency }}2.25</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>{{ currency }}50.01 - {{ currency }}99.99</p>
            <p>{{ currency }}7.50</p>
          </div>
          <div class="d-flex justify-content-between">
            <p>{{ currency }}100+</p>
            <p>{{ currency }}9.95</p>
          </div>
        </div>
      </div>
      <div class="col-lg-12">
        <h4 class="text-center m-5">Choose Gift card design</h4>
      </div>
      <div class="col-lg-4 mb-3" v-for="item in $store.state.GiftCard" :key="item.id">
        <div class="gift__card">
          <input id="{{item.id}}" type="radio" name="giftcard" />
          <label for="{{item.id}}">
            <h6>{{ item.giftcardname }}</h6>
            <img :src="img" alt="" />
          </label>
        </div>
      </div>
      <div class="col-lg-12">
        <div class="add__basket">
          <h6>Total:{{ amount }} {{ currency }}</h6>
          <Primarybtn @click="adtocart">Add Basket</Primarybtn>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Primarybtn from "@/components/UI/buttons/Primarybtn";
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
export default {
  components: {
    Primarybtn,
    Breadcrumb
  },
  data() {
    return {
      amount: 30,
      currency: "$",
      img: require("@/assets/img/GiftCards/giftcard1.png"),
    };
  },
  methods: {
    adtocart() {
      this.$store.state.showpopup = true;
      setTimeout(() => {
        this.$store.state.showpopup = false;
      }, 2000);
    },
  },
};
</script>

<style lang="scss" scoped>
.cover__photo {
  height: 450px;
  position: relative;
  img {
    width: 100%;
    height: 100%;
  }
}
.use__location {
  margin-bottom: 20px;
  h6 {
    margin-bottom: 20px;
  }
  label {
    text-align: center;
    width: 50%;
    border: 1px solid #d0d4da;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    margin-bottom: 10px;
  }
  input {
    display: none;
    &:checked ~ label {
      background: linear-gradient(to top, #fc4a1a, #f7b733);
      color: #fff;
      border: none;
    }
  }
}
.amount {
  margin-bottom: 20px;
  .currency {
    display: flex;
    align-items: center;
    label {
      margin-right: 20px;
    }
  }
  label {
    border: 1px solid #d0d4da;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
  }
  input {
    display: none;
    &:checked ~ label {
      background: linear-gradient(to top, #fc4a1a, #f7b733);
      color: #fff;
      border: none;
    }
  }
}

.gift__card {
  h6 {
    text-align: center;
  }
  label {
    width: 100%;
    height: 300px;

    border-radius: 8px;
    cursor: pointer;
    img {
      width: 100%;
      height: 250px;
      object-fit: cover;
      border-radius: 16px;
    }
  }
  input {
    display: none;
    &:checked ~ label {
      border: 2px solid #fc4a1a;
    }
  }
}
.add__basket {
  text-align: center;
  margin: 20px 0px;
}
</style>