<template>
  <div class="container">
    <div class="row">
      <h1 class="book__name">{{ id.bookname }}</h1>
      <div class="col-lg-6">
        <div class="book__img">
          <span class="sale" v-if="id.discount">Discount</span>
          <img :src="id.bookimg" alt="" />
        </div>
      </div>
      <div class="col-lg-6">
        <div class="book__info">
          <div class="rate__info">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <a href="#"> 0 reviews </a>
          </div>
          <hr />
          <div>
            <div class="d-flex align-items-center justify-content-between mb-3">
              <p class="m-0">Book name :</p>
              <h5 class="m-0">{{ id.bookname }}</h5>
            </div>
            <div class="d-flex align-items-center justify-content-between">
              <p class="m-0">Author :</p>
              <h5 class="m-0">{{ id.author }}</h5>
            </div>
            <div
              class="d-flex align-items-center justify-content-between"
              v-if="id.instock"
            >
              <p class="m-0">Availability:</p>
              <h5 class="m-0 stock">In Stock</h5>
            </div>

            <hr />
            <div>
              <h1 class="book__price">
                {{ id.price }} <span>{{ id.oldprice }}</span>
              </h1>
            </div>
            <hr />

            <div>
              <Primarybtn class="me-3" @click="addtocart(id)"
                >Add to Cart</Primarybtn
              >
              <Secondarybtn>Ask about this project</Secondarybtn>
              <p class="mt-3">
                This product has a minimum quantity of
                <span>{{ id.stockcount }}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="col-md-12 mt-5">
        <ul class="nav nav-tabs justify-content-center">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Description
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Reviews <span>(0)</span>
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="home"
            role="tabpanel"
            aria-labelledby="home-tab"
          >
            <p class="mt-5">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Consequuntur eos magni commodi, tempora cum enim distinctio maxime
              quisquam quia beatae, molestiae veniam! Quo reiciendis vero
              dignissimos sit veniam. Nulla rerum facilis ipsa cumque
              architecto, totam fuga impedit obcaecati consequatur sed. Culpa
              officiis eius atque porro inventore quae dolorem modi
              voluptatibus?
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="profile"
            role="tabpanel"
            aria-labelledby="profile-tab"
          >
            <div class="review mt-5">
              <h4>Write a review</h4>
              <div class="mt-3">
                <label>Your Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div class="rate mt-3">
                <h5 class="text-start">Rating</h5>
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">5 stars</label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">4 stars</label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">3 stars</label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">2 stars</label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">1 star</label>
              </div>

              <div class="mt-3">
                <label>Your Review</label>
                <textarea
                  placeholder="Your Review"
                  class="form-control"
                ></textarea>
              </div>
              <div class="mt-3"><Secondarybtn>Add review</Secondarybtn></div>
              <hr />
              <p>There are no reviews for this product.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Primarybtn from "@/components/UI/buttons/Primarybtn";
import Secondarybtn from "@/components/UI/buttons/Secondarybtn";
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      id: "",
    };
  },
  components: {
    Primarybtn,
    Secondarybtn,
  },
  methods: {
    ...mapActions(["addtocart"]),
  },
  computed: {
    ...mapGetters(["Newbooks"]),
  },
  created() {
    let item = this.Newbooks.find((el) => el.id == this.$route.params.id);
    this.id = item;
  },
};
</script>

<style lang="scss" scoped>
.book__name {
  margin: 30px 0px;
  text-align: center;
}
.book__img {
  height: 600px;
  position: relative;
  .sale {
    position: absolute;
    top: 10px;
    left: 10px;
    background: linear-gradient(to top, #019267, #00c897);
    color: #fff;
    padding: 5px;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
.book__info {
  .rate__info {
    i {
      font-size: 20px;
      color: #fe7f02;
    }
    a {
      margin: 0px 20px;
      color: #051367;
      &:hover {
        color: #fe7f02 !important;
      }
    }
    .stock {
      color: #00c897;
    }
  }
  .book__price {
    font-size: 70px;
    color: #fe7f02;
    position: relative;
    span {
      position: absolute;
      font-size: 30px;
      text-decoration-line: line-through !important;
    }
  }
}
.nav-link {
  color: #fe7f02;
  &:hover {
    color: #fe7f02;
  }
}
.review {
  input,
  textarea {
    font-size: 14px;
    border-radius: 8px;
    padding: 10px 20px;
    margin-bottom: 20px;
    &:focus {
      box-shadow: none;
      border: 1px solid #fe7f02;
    }
  }
  .rate {
    &:not(:checked) {
      input {
        position: absolute;
        top: -9999px;
      }
      label {
        width: 1em;
        overflow: hidden;
        white-space: nowrap;
        cursor: pointer;
        font-size: 30px;
        color: #ccc;
        &::before {
          content: "★ ";
        }
        &:hover {
          color: #deb217;
        }
      }
    }
    input {
      &:checked {
        label {
          color: #ffc700;
          &:hover {
            color: #ffc700;
            label {
              color: #ffc700;
            }
          }
        }
      }
    }
    label {
      &:hover {
        input {
          &:checked {
            label {
              color: #c59b08;
            }
          }
        }
      }
    }
  }
}
</style>