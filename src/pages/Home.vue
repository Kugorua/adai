<template>
  <div class="home">
    <Header />
    <Banner />
    <Form />
    <Product />
    <Introduces />
    <Support />
    <IntroduceStaff />
    <Information />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Banner from "../components/home/banner/Banner";
import Form from "../components/home/form/Form";
import Product from "../components/home/product/Product";
import Introduces from "../components/home/introduce/Introduces";
import Support from "../components/home/support/Support";
import IntroduceStaff from "../components/home/introduce-staff/IntroduceStaff";
import Information from "../components/home/information/Information";
import Footer from "../components/home/footer/footer";
export default {
  name: "Home",
  components: {
    Header,
    Banner,
    Form,
    Product,
    Introduces,
    Support,
    IntroduceStaff,
    Information,
    Footer
  }
};
</script>

<style>
</style>