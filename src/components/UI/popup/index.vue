<template>
  <span v-if="$store.state.showpopup">
    <i class="fa-solid fa-circle-check"></i>Success Added
  </span>
</template>






<style lang="scss" scoped>
span {
  padding: 15px;
  position: fixed;
  right: 50px;
  top: 20px;
  background: #00c897;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  z-index: 2;
  i {
    color: #fff;
    margin-right: 10px;
    font-size: 14px;
  }
}
</style>