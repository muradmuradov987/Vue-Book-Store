<template>
  <div class="container-fluid search__bar">
    <div class="container">
      <div class="row">
        <div class="col-lg-3">
          <div class="categories">
            <h5>Categories</h5>
            <i class="fa-solid fa-book"></i>
            <ul class="categories__collapse">
              <a href="#" v-for="item in $store.state.CategoriesList" :key="item.id">
                <li>{{ item.categories }}</li>
              </a>
            </ul>
          </div>
        </div>
        <div class="col-lg-9">
          <div class="search__box">
            <input type="text" />
            <i class="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
     
    };
  },
};
</script>

<style lang="scss">
.search__bar {
  padding: 10px 0px;
  background: linear-gradient(to top, #fc4a1a, #f7b733);
  display: flex;
  align-items: center;
  .categories {
    z-index: 2;
    &:hover {
      border-bottom-left-radius: 0px;
      border-bottom-right-radius: 0px;
      .categories__collapse {
        display: block;
      }
    }
    padding: 0px 10px;
    border-radius: 8px;
    height: 50px;
    background-color: rgba(0, 0, 0, 0.265);
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;

    h5 {
      margin: 0;
      color: white;
    }
    i {
      color: #00c897;
      font-size: 20px;
    }
    .categories__collapse {
      display: none;
      position: absolute;
      width: 100%;
      height: 300px;
      margin: 0;
      padding: 20px;
      top: 50px;
      left: 0;
      border-bottom-left-radius: 8px;
      border-bottom-right-radius: 8px;
      backdrop-filter: blur(8px);
      background-color: rgba(0, 0, 0, 0.265);
      box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
      overflow-y: scroll;
      z-index: 1;
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: #00c897;
        border-radius: 20px;
      }
      li {
        padding: 5px;
        margin-bottom: 10px;
        transition: 0.3s ease;
        border-radius: 5px;
        color: white;
        &:hover {
          background: white;
          color: black;
        }
      }
    }
  }
  .search__box {
    position: relative;
    text-align: end;
    input {
      height: 50px;
      width: 70%;
      border-radius: 20px 0px;
      border: none;
      transition: 0.5s ease;
      outline: none;
      padding: 0px 55px 0px 20px;
      font-size: 18px;
      &:focus {
        border-radius: 0px 20px;
      }
    }
    i {
      font-size: 20px;
      color: #00c897;
      position: absolute;
      top: 50%;
      right: 10px;
      cursor: pointer;
      transform: translate(-50%, -50%);
    }
  }
}

@media (max-width: 768px) {
  .search__bar {
    .categories {
      margin-bottom: 10px;
    }
    .search__box {
      text-align: unset;
      input {
        width: 100%;
      }
    }
  }
}
</style>