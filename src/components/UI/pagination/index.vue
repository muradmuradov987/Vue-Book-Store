<template>
  <ul>
    <a href="#">
      <li class="disable"><i class="fa-solid fa-angle-left"> </i></li>
    </a>

    <a href="#">
      <li class="active page__item">1</li>
    </a>

    <a href="#"><li class="page__item">2</li></a>
    <a href="#"><li class="page__item">3</li></a>

    <a href="#">
      <li><i class="fa-solid fa-angle-right"> </i></li>
    </a>
  </ul>
</template>

<style lang="scss" scoped>
ul {
  display: flex;
  justify-content: center;
  margin: 30px 0px;
  li {
    width: 30px;
    height: 30px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ced4da;
    border-radius: 50%;
    margin: 0px 3px;

    
  }
  .page__item {
    transition: 0.3s ease;
    &:hover {
      background: #fe7f02;
      color: #fff;
      border: none;
    }
  }
  .disable {
    background: #ced4da;
  }
  .active {
    color: #fff;
    border: none;
    background: #fe7f02;
  }
}
</style>