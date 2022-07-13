<template>
  <div class="container">
    <div class="row g-5">
      <div class="col-md-12">
        <Breadcrumb>Forgot Your Password?</Breadcrumb>
      </div>
      <div class="col-lg-9">
        <div class="reset__password">
          <p>
            Enter the e-mail address associated with your account. Click submit
            to have your password e-mailed to you.
          </p>
          <h4>Your E-Mail Address</h4>
          <div class="d-flex flex-column">
            <label>Email address</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <Primarybtn class="me-3" @click="$router.push('/profile')">Back</Primarybtn>
          <Secondarybtn>Continiue</Secondarybtn>
        </div>
      </div>
      <div class="col-lg-3">
        <AccountSetting />
      </div>
    </div>
  </div>
</template>

<script>
import Primarybtn from "@/components/UI/buttons/Primarybtn.vue";
import Secondarybtn from "@/components/UI/buttons/Secondarybtn.vue";
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
import AccountSetting from "@/components/AccountSetting";
export default {
  components: {
    Breadcrumb,
    AccountSetting,
    Primarybtn,
    Secondarybtn,
  },
};
</script>


<style lang="scss" scoped>
.reset__password {
  p {
    font-size: 12px;
  }
  h4 {
    margin-bottom: 20px;
  }
  label {
    font-size: 12px;
    padding: 5px 0px;
    &::before {
      content: "* ";
      color: red;
    }
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
}
</style>