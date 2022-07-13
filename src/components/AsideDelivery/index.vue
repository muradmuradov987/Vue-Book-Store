<template>
  <div class="free__delivery">
    <i class="fa-solid fa-truck"></i>
    <div class="card__text">
      <h5>Free delivery</h5>
      <p>All orders over $100</p>
    </div>
  </div>
  <div class="fast__send">
    <i class="fa-solid fa-jet-fighter"></i>
    <div class="card__text">
      <h5>Fast send</h5>
      <p>Up to 24 hours</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.free__delivery,
.fast__send {
  background: #f7f7f0;
  border: 1px solid #fe7f02 !important;
  border-radius: 5px;
  width: 100%;
  border: none;
  padding: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  height: 100px;
  transition: 0.3s ease;
  box-shadow: rgba(0, 0, 0, 0.3) 2px 8px 8px;
  &:hover {
    i {
      font-size: 40px;
    }
  }
  i {
    font-size: 30px;
    color: #fe7f02;
    transition: 0.3s ease;
  }
  .fa-jet-fighter {
    color: #00c897;
  }
  .card__text {
    margin-left: 20px;

    p {
      margin: 0;
      font-size: 14px;
    }
  }
}

@media (min-width: 768px) and( max-width: 998px) {
  .free__delivery,
  .fast__send {
    padding: 10px;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 20px;
    height: 100px;
    &:hover {
      i {
        font-size: 30px;
      }
    }
    i {
      font-size: 20px;

    }
    .card__text {
      margin-left: 0px;
    h5{
        margin-bottom: 0px;
    }
      p {
        margin: 0;
        font-size: 12px;
      }
    }
  }
}

</style>