<template>

  <Popup />
  <Navbar />
  <SearchBar />
  <router-view />
  <Footer />
</template>


<script>
import Popup from "@/components/UI/popup";
import Navbar from "@/components/layouts/Navbar";
import SearchBar from "@/components/SearchBar";
import Footer from "@/components/layouts/Footer";

export default {
  name: "Home",
  components: {
    Navbar,
    SearchBar,
    Footer,
    Popup,
  },
};
</script>











<style lang="scss">
</style>
