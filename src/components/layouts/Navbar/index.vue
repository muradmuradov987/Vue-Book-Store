<template>
  <div class="container-fluid p-0 navbar-bg">
    <div class="container">
      <nav>
        <router-link to="/">
          <div class="logo">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
        </router-link>

        <div class="navbar__menu">
          <div class="mobile__menu" :class="{ showMenu: showMobile }">
            <i
              class="fa-solid fa-xmark close__btn"
              @click="showMobile = !showMobile"
            ></i>
            <router-link to="/" class="nav__items">
              <i class="fa-solid fa-house-chimney"></i>
            </router-link>
            <router-link to="/newbooks" class="nav__items">
              New Books
            </router-link>
            <router-link to="/best-sellers" class="nav__items">
              Best Sellers
            </router-link>
            <router-link to="/gift-card" class="nav__items">
              Gift Card
            </router-link>
            <router-link to="/contact" class="nav__items">
              Contact
            </router-link>

            <div
              class="d-flex justify-content-between d-md-none d-lg-none mt-5"
            >
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div
            class="nav-item profile nav__items"
            @click="$router.push('/profile')"
          >
            <i class="fa-solid fa-user"></i>
          </div>
          <div
            class="nav-item basket nav__items"
            @click="$router.push('/basket')"
          >
            <i class="fa-solid fa-basket-shopping"> </i>
            <span>{{ $store.getters.BasketLenght }}</span>
          </div>

          <div class="currency__dropdown">
            $ USD
            <i class="fa-solid fa-angle-down"></i>
            <div class="currency__menu__bg">
              <ul class="currency__menu">
                <li>$ USD</li>
                <li>€ EURO</li>
                <li>₼ MANAT</li>
              </ul>
            </div>
          </div>
          <i
            class="fa-solid fa-bars burger-menu"
            @click="showMobile = !showMobile"
          ></i>
        </div>
      </nav>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showMobile: false,
    };
  }
};
</script>




<style lang="scss" scoped>
.navbar-bg {
  background: rgba($color: #fff, $alpha: 0.7);
}
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  padding: 20px 0px;
  .logo {
    width: 130px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .navbar__menu {
    display: flex;
    align-items: center;
    .mobile__menu {
      display: flex;
    }
    .nav__items {
      margin: 0 12px;
      font-size: 18px;
      color: #051367;
      &:hover {
        color: #00c897;
      }
    }

    .profile,
    .basket {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid #00c897;
      position: relative;
      cursor: pointer;
      span {
        position: absolute;
        width: 20px;
        height: 20px;
        font-size: 12px;
        top: -10px;
        right: -10px;
        color: #f5f5f5;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ff1818;
      }
    }

    .currency__dropdown {
      position: relative;
      margin-left: 20px;
      cursor: pointer;
      .currency__menu__bg {
        position: absolute;
        top: 0;
        background: transparent;
        width: 100%;
        height: 40px;
      }
      .currency__menu {
        position: absolute;
        top: 40px;
        right: 0;
        padding: 0;
        border: 1px solid #00c897;
        border-radius: 5px;
        background: white;
        overflow: hidden;
        display: none;
        z-index: 1;
        li {
          width: 100px;
          padding: 5px 10px;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s ease;
          &:hover {
            color: white;
            background: #00c897;
          }
        }
      }
      &:hover {
        i {
          transform: rotate(-180deg);
        }
        .currency__menu {
          display: block;
        }
      }
    }
    .burger-menu {
      margin-left: 20px;
      display: none;
    }
    .close__btn {
      display: none;
    }
  }

  i {
    font-size: 20px;
    color: #00c897;
    transition: 0.3s ease;
    &:hover {
      color: #019267;
    }
  }
  // .router-link-active {
  //     border-bottom: 2px solid #00c897;
  //   }
}

@media (max-width: 768px) {
  nav {
    height: 100px;
    padding: 20px 0px;
    .logo {
      width: 90px;
      height: 70px;
    }
    .navbar__menu {
      .mobile__menu {
        position: absolute;
        flex-direction: column;
        top: 0;
        right: 0;
        width: 50%;
        height: 40vh;
        display: none;
        z-index: 1;
        padding: 20px;
        z-index: 3;
        border-bottom-left-radius: 30px;
        transition: 0.3s ease;
        backdrop-filter: blur(8px);
        background-color: #051367;
        box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
        .nav__items {
          color: white;
          margin: 0px 0px 15px 0px;
        }
        i {
          font-size: 20px;
          color: white;
        }
        .close__btn {
          position: absolute;
          right: 20px;
          display: block;
        }
      }

      .showMenu {
        display: flex;
      }
      .profile,
      .basket {
        width: 30px;
        height: 30px;
      }
      .basket {
        span {
          width: 15px;
          height: 15px;
          font-size: 10px;
        }
      }
      .burger-menu {
        display: block;
        font-size: 20px;
      }
    }

    i {
      font-size: 14px;
    }
  }
}

@media (max-width: 1000px) {
}
</style>