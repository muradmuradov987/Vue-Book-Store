<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Breadcrumb>New Books </Breadcrumb>
      </div>
      <div class="col-lg-3">
        <div class="row mt-5">
          <div class="col-12">
            <AsideDelivery />
          </div>
          <div class="col-12">
            <h4>Refine search</h4>
            <div class="refine__search">
              <h6>No. Of Cores</h6>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1"> 1 </label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1"> 4 </label>
              </div>
              <div class="price__info">
                <h6>Price</h6>
                <div class="d-flex justify-content-between">
                  <input
                    class="range"
                    type="range"
                    min="0"
                    max="200"
                    v-model="bookprice"
                  />
                  <span>{{ bookprice }} $</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-9">
        <div class="row mt-5">
          <div class="col-lg-3" v-for="item in Newbooks" :key="item.id">
            <div class="new__book__card">
              <img
                src="@/assets/img/BookStore/apple_cinema.jpg"
                :alt="item.bookname"
                @click="$router.push(`/product-details/${item.id}`)"
              />

              <h6>{{ item.bookname }}</h6>
              <span class="sale" v-if="item.discount">Discount</span>
              <div class="price__info">
                <span class="price__old" v-if="item.discount"
                  >${{ item.oldprice }}</span
                >
                <span class="price__new">${{ item.price }}</span>
              </div>
              <div class="new__book__setting">
                <span class="basket" @click="addtocart(item)"
                  ><i class="fa-solid fa-basket-shopping"></i>
                  <div class="basket__info">Add to Cart</div>
                </span>
                <span class="compare">
                  <i class="fa-solid fa-arrow-right-arrow-left"></i>
                  <div class="compare__info">Add to Compare</div>
                </span>

                <span class="wishlist"
                  ><i class="fa-solid fa-heart"></i>
                  <div class="wishlist__info">Add to Wishlist</div>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-12">
            <pagination></pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AsideDelivery from "@/components/AsideDelivery";
import pagination from "@/components/UI/pagination";
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    AsideDelivery,
    pagination,
    Breadcrumb,
  },
  data() {
    return {
      bookprice: 20,
    };
  },
  methods: {
    ...mapActions(["addtocart"]),
  },
  computed: {
    ...mapGetters(["Newbooks"]),
  },
};
</script>

<style lang="scss" scoped>
.refine__search {
  border: 2px solid #00c897;
  padding: 20px;
  border-radius: 8px;
  .price__info {
    margin-top: 20px;
    input {
      width: 70%;
    }
  }
}

.new__book__card {
  padding: 20px;
  height: 300px;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  &:hover {
    border: 2px solid #fe7f02;
    .new__book__setting {
      height: 70px;
      opacity: 10;
    }
    img {
      transition: 0.3s ease-out;
      transform: scale(1.1);
    }
  }
  .sale {
    position: absolute;
    top: 10px;
    right: 10px;
    background: linear-gradient(to top, #019267, #00c897);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
  img {
    width: 150px;
    height: 200px;
    object-fit: cover;
  }
  h6 {
    position: absolute;
    bottom: 40px;
    text-align: center;
    margin: 10px 0px;
    background: #fff;
  }
  .price__info {
    position: absolute;
    bottom: 5px;
    .price__old {
      margin: 0px 10px;
      text-decoration-line: line-through !important;
    }
    .price__new {
      margin: 0px 10px;
      color: #fe7f02;
    }
  }

  .new__book__setting {
    position: absolute;
    width: 100%;
    bottom: 0;
    height: 0px;
    opacity: 0;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    transition: 0.3s ease;
    span {
      width: 50px;
      height: 50px;
      padding: 10px;
      margin: 0px 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #051367;
      border-radius: 5px;
      transition: 0.3s ease;
      i {
        font-size: 20px;
      }

      &:hover {
        background: #fe7f02;
        border: none;
        i {
          color: #fff;
        }
      }
    }
    .basket,
    .compare,
    .wishlist {
      position: relative;
      .basket__info,
      .compare__info,
      .wishlist__info {
        position: absolute;
        width: 130px;
        display: none;
        top: -30px;
        border-radius: 5px;
        font-size: 12px;
        padding: 0px 10px;
        background: #051367;
        color: #fff;
        text-align: center;
        &::before {
          content: "";
          border-style: solid;
          border-width: 8px 8px 8px 0;
          border-color: transparent #051367;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, 20%) rotate(-90deg);
        }
      }

      &:hover {
        .basket__info,
        .compare__info,
        .wishlist__info {
          display: block;
        }
      }
    }
  }
}
</style>
