<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <div class="phone__number">
            <i class="fa-solid fa-phone"></i>
            <h5>+48 500-500-500 / toll free</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="contact__mail">
            <i class="fa-solid fa-envelope"></i>
            <h5>contact@example.com</h5>
          </div>
        </div>
        <div class="col-lg-4">
          <div class="support__mail">
            <i class="fa-solid fa-life-ring"></i>
            <h5>support@example.com</h5>
          </div>
        </div>
        <div class="col-12">
          <img class="live__chat" src="@/assets/img/live__chat.png" alt="" />
        </div>
        <div class="col-6 col-md-3">
          <div class="information">
            <h5>Information</h5>
            <p>About Us</p>
            <p>Delivery Information</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="customer">
            <h5>Customer</h5>
            <p>Contact Us</p>
            <p>Returns</p>
            <p>Site Map</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="extras">
            <h5>Extras</h5>
            <p>Brands</p>
            <p>Gift Vouchers</p>
            <p>Affiliates</p>
            <p>Specials</p>
          </div>
        </div>
        <div class="col-6 col-md-3">
          <div class="my__account">
            <h5>My Account</h5>
            <p>My Account</p>
            <p>Order History</p>
            <p>Wish List</p>
            <p>Newsletter</p>
          </div>
        </div>
      </div>
    </div>
    <hr />
    <div class="container">
      <p>Powered By Vue BookStore © 2022</p>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  margin-top: 100px;
  .phone__number,
  .contact__mail,
  .support__mail {
    display: flex;
    align-items: center;
    h5 {
      margin: 0;
    }
    i {
      font-size: 25px;
      margin-right: 20px;
    }
  }
  .phone__number {
    i,
    h5 {
      color: #00c897;
    }
  }
  .contact__mail {
    i,
    h5 {
      color: #fe7f02;
    }
  }

  .live__chat {
    width: 100%;
    height: 100px;
    cursor: pointer;
    margin: 30px 0px;
  }

  .information,
  .customer,
  .extras,
  .my__account {
    h5 {
      padding-bottom: 10px;
      margin-bottom: 20px;
      border-bottom: 2px solid #fe7f02;
      display: inline-block;
    }
    p {
      font-size: 14px;
      transition: 0.3s ease;
      cursor: pointer;
      &:hover {
        color: #fe7f02;
      }
    }
  }
}

@media (max-width: 998px) {
  footer {
    margin-top: 50px;
    .phone__number,
    .contact__mail,
    .support__mail {
      margin-bottom: 15px;
    }

    .live__chat {
      height: 35px;
      margin: 20px 0px;
      object-fit: contain;
    }

    .information,
    .customer,
    .extras,
    .my__account {
      margin-bottom: 20px;
      h5 {
        padding-bottom: 10px;
        margin-bottom: 10px;
      }
      p {
        margin-bottom: 10px;
      }
    }
  }
}
</style>