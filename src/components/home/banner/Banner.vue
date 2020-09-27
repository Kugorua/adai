<template>
  <div
    class="banner"
    data-aos="zoom-in"
    data-aos-delay="50"
    data-aos-duration="500"
  >
    <img :src="imgHomeBanner" alt="banner-home" />
  </div>
</template>

<script>
import imgHomeBanner from "../../../assets/images/home-banner.jpg";
import AOS from "aos";
export default {
  name: "banner",
  data: () => {
    return {
      imgHomeBanner
    };
  },
  mounted() {
    AOS.init({
      once: true
    });
  }
};
</script>

<style>
.banner img {
  width: 100%;
}
</style>
