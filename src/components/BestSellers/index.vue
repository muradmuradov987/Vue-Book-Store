<template>
  <h5>Bestsellers</h5>
  <div class="bestseller__container">
    <div class="bestseller__list" v-for="item in 3" :key="item">
      <img
        src="@/assets/img/BookStore/apple_cinema.jpg"
        alt=""
        @click="$router.push('/product-details')"
      />
      <div class="ms-3">
        <div class="book__name" @click="$router.push('/product-details')">
          Harmony
        </div>
        <div class="price">
          <span class="price__old">$122.00</span>
          <span class="price__new">$110.00</span>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
h5 {
  text-align: center;
}
.bestseller__container {
  border: 2px solid #00c876;
  border-radius: 5px;
  .bestseller__list {
    display: flex;
    align-items: center;
    padding: 25px;
    img {
      cursor: pointer;
      width: 80px;
    }
    .book__name {
      font-size: 18px;
      cursor: pointer;
    }
    .price__old {
      margin-right: 15px;
      text-decoration-line: line-through !important;
    }
    .price__new{
        color: #fe7f02;
    }
  }
}

@media (min-width:990px)and (max-width:1200px){
.bestseller__container {
  .bestseller__list {
    padding: 15px;
    img {
      width: 50px;
    }
    .book__name {
      font-size: 16px;
      cursor: pointer;
    }
    .price__old {
      margin-right: 15px;
      text-decoration-line: line-through !important;
      font-size: 12px;
    }
    .price__new{
        color: #fe7f02;font-size: 12px;
    }
  }
}
}
</style>