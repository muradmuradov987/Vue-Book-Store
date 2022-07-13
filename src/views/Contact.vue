<template>
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <Breadcrumb>Contact Us</Breadcrumb>
      </div>
      <div class="col-lg-6">
        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38441063615!2d-3.8196194709840294!3d40.43813107961617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20%C4%B0spaniya!5e0!3m2!1saz!2s!4v1648457278005!5m2!1saz!2s"
            width="100%"
            height="400"
          ></iframe>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="contact__info">
          <h4>Get In Touch With Us</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda,
            dolorem! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Assumenda, dolorem! Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Provident, magni.
          </p>
          <div class="row mt-3 mb-3">
            <div class="col-12 col-lg-4">
              <div class="address">
                <i class="fa-solid fa-location-dot"></i>
                <p>25 East middleton</p>
                <p>25 southpoint Streat Luxemburg US 1154</p>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="phone__number">
                <i class="fa-solid fa-phone"></i>
                <p>12345678</p>
                <p>987456321</p>
              </div>
            </div>
            <div class="col-12 col-lg-4">
              <div class="follow__us">
                <h6>Follow Us</h6>
                <i class="fa-brands fa-facebook-f"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
          </div>

          <div class="send__messege">
            <div class="row">
              <h6>Send Messege</h6>
              <div class="col-6">
                <input
                  class="form-control"
                  type="text"
                  placeholder="Your Name"
                />
              </div>
              <div class="col-6">
                <input
                  class="form-control"
                  type="text"
                  placeholder="E-Mail Address"
                />
              </div>
              <div class="col-12">
                <textarea
                  class="form-control"
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Enquiry"
                ></textarea>
              </div>
              <div class="col-12 d-flex justify-content-end">
                <Primarybtn>Send</Primarybtn>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<script>
import Breadcrumb from "@/components/UI/breadcrumb/Breadcrumb";
import Primarybtn from "@/components/UI/buttons/Primarybtn";
export default {
  components: {
    Breadcrumb,
    Primarybtn,
  },
};
</script>

<style lang="scss">
.map {
  height: 400px;
  margin-bottom: 30px;
}
.contact__info {
  p {
    font-size: 14px;
    margin: 0;
  }
  .address {
    margin-bottom: 20px;
    i {
      color: #fe7f02;
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
  .phone__number {
    margin-bottom: 20px;
    i {
      color: #fe7f02;
      margin-bottom: 15px;
      font-size: 20px;
    }
  }
  .follow__us {
    margin-bottom: 20px;
    h6 {
      margin-bottom: 15px;
      color: #fe7f02;
    }
    i {
      cursor: pointer;
      margin-right: 10px;
      transition: 0.3s ease;
      &:hover {
        color: #fe7f02;
        font-size: 20px;
      }
    }
  }
  .send__messege {
    input,
    textarea {
      width: 100%;
      font-size: 14px;
      border-radius: 8px;
      padding: 10px 20px;
      margin-bottom: 20px;
      resize: none;
      &:focus {
        box-shadow: none;
        border: 1px solid #fe7f02;
      }
    }
  }
}
</style>