<template>
  <section class="page__info">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <Breadcrumb>Account Login</Breadcrumb>
        </div>
      </div>
    </div>
  </section>
  <section class="account__content">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-4">
          <div class="register__account">
            <h4>New Customer</h4>
            <h6>Register Account</h6>
            <p>
              By creating an account you will be able to shop faster, be up to
              date on an order's status, and keep track of the orders you have
              previously made.
            </p>
            <Primarybtn @click="$router.push('/register')">Create Your Account</Primarybtn>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="login">
            <h4>Returning Customer</h4>
            <h6>I am a returning customer</h6>
            <div class="form-group">
              <label>Email address</label>
              <input type="email" placeholder="Enter email" />
            </div>
            <div class="form-group">
              <label>Password</label>
              <input type="password" placeholder="Password" />
              <span @click="$router.push('/forgetten-password')"
                >Forgotten Password</span
              >
            </div>
            <Primarybtn>Login</Primarybtn>
          </div>
        </div>
        <div class="col-lg-3">
          <AccountSetting />
        </div>
      </div>
    </div>
  </section>
</template>


<script>
import Primarybtn from "@/components/UI/buttons/Primarybtn.vue";
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
import AccountSetting from "@/components/AccountSetting";
export default {
  components: {
    Primarybtn,
    AccountSetting,
    Breadcrumb
  },
};
</script>

<style lang="scss">
.account__content {
  .register__account {
    h4 {
      margin-bottom: 20px;
    }
    h6 {
      margin-bottom: 15px;
    }
    p {
      font-size: 14px;
      line-height: 1.6;
      margin-bottom: 30px;
    }
  }
  .login {
    h4 {
      margin-bottom: 20px;
    }
    h6 {
      margin-bottom: 15px;
    }
    .form-group {
      display: flex;
      flex-direction: column;
      label {
        font-size: 12px;
        margin-bottom: 5px;
      }
      input {
        width: 100%;
        border: 1px solid #051367;
        border-radius: 8px;
        padding: 10px 20px;
        margin-bottom: 20px;
        &:focus {
          border: 1px solid #fe7f02;
        }
      }
      span {
        cursor: pointer;
        color: #00c897;
        font-size: 12px;
        margin-bottom: 40px;
        &:hover {
          color: #019267;
        }
      }
    }
  }
}
</style>