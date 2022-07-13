<template>
  <div class="page__info">
    <h3 class="page__name">
      <slot></slot>
    </h3>
    <ul>
      <li @click="$router.push('/')">
        Home <i class="fa-solid fa-angle-right"></i>
      </li>
      <li class="active">Login</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.page__info {
  text-align: center;
  .page__name {
    display: inline-block;
    padding-bottom: 10px;
    margin: 20px 0;
    border-bottom: 2px solid #fe7f02;
  }
  ul {
    padding: 0;
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
    li {
      padding: 0px 10px;
      cursor: pointer;
      transition: 0.3s ease;

      i {
        font-size: 14px;
      }
      &:hover {
        color: #fe7f02;
      }
    }
    .active {
      color: #fe7f02;
    }
  }
}
</style>