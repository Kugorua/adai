<template>
  <div class="feature">
    <h1
      data-aos="fade-right"
      data-aos-offset="1300"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      割安アパートメント特集
    </h1>
    <div class="lines"></div>
    <div class="feature__slie">
      <div
        class="feature__slie__items__wrap"
        v-for="(item, index) in datas"
        :key="index"
        :data-aos="index > 1 ? 'fade-left' : 'fade-right'"
        data-aos-offset="1300"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        <div class="feature__slie__items">
          <img class="feature__slie__items__img" :src="item.img" alt />
          <div
            class="feature__slie__items__infor"
            data-aos="fade-in"
            data-aos-offset="1300"
            data-aos-delay="700"
            data-aos-duration="700"
          >
            <div class="feature__slie__items__infor__price">
              <span>{{ item.price }}</span> USD
            </div>
            <div class="feature__slie__items__infor__location">
              <img :src="imgFeatureMap" alt />
              <p>7区</p>
            </div>
          </div>
        </div>
        <p>７区の割安アパートメント...</p>
      </div>
    </div>
    <div class="feature__space">
      <div
        class="feature__space__items"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="1300"
        data-aos-duration="2000"
      >
        <img :src="imgFeatureHouse1" alt="" />
        <p>人気マンションコンドミニアム</p>
      </div>
      <div
        class="feature__space__items"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="1300"
        data-aos-duration="2000"
      >
        <img :src="imgFeatureHouse2" alt="" />
        <p>高級サービスアパート</p>
      </div>
      <div
        class="feature__space__items"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-offset="1300"
        data-aos-duration="2000"
      >
        <img :src="imgFeatureHouse3" alt="" />
        <p>日本人学校のバスが停まる物件特集</p>
      </div>
    </div>
  </div>
</template>

<script>
import imgFeatureRoom1 from "../../../../assets/images/feature-room-1.jpg";
import imgFeatureRoom2 from "../../../../assets/images/feature-room-2.jpg";
import imgFeatureRoom3 from "../../../../assets/images/feature-room-3.jpg";
import imgFeatureRoom4 from "../../../../assets/images/feature-room-4.jpg";
import imgFeatureMap from "../../../../assets/images/feature-map-1.png";
import imgFeatureHouse1 from "../../../../assets/images/feature-house-1.jpg";
import imgFeatureHouse2 from "../../../../assets/images/feature-house-2.jpg";
import imgFeatureHouse3 from "../../../../assets/images/feature-house-3.jpg";
import AOS from "aos";
let datas = [
  {
    img: imgFeatureRoom1,
    price: "500"
  },
  {
    img: imgFeatureRoom2,
    price: "400"
  },
  {
    img: imgFeatureRoom3,
    price: "900"
  },
  {
    img: imgFeatureRoom4,
    price: "500"
  }
];
export default {
  data: () => {
    return {
      imgFeatureRoom1,
      imgFeatureRoom2,
      imgFeatureRoom3,
      imgFeatureRoom4,
      imgFeatureMap,
      imgFeatureHouse3,
      imgFeatureHouse2,
      imgFeatureHouse1,
      datas
    };
  },
  mounted() {
    AOS.init({ once: true });
  }
};
</script>

<style>
.feature {
}
.feature__slie {
  display: flex;
  justify-content: space-between;
}
.feature__slie__items__wrap {
  width: 24%;
}
.feature__slie__items {
  position: relative;
  margin-bottom: 10px;
}
.feature__slie__items__img {
  width: 100%;
}
.feature__slie__items__infor {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(229, 229, 229, 0.9);
  padding: 10px 15px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
}
.feature__slie__items__infor__location {
  display: flex;
  align-items: center;
}
.feature__slie__items__infor__price span {
  color: #84292e;
  font-weight: bold;
  font-size: 20px;
}
.feature__slie__items__infor__location p {
  font-weight: bold;
}
.feature__space {
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
}
.feature__space__items {
  position: relative;
  width: 32.5%;
}
.feature__space__items img {
  width: 100%;
}
.feature__space__items p {
  position: absolute;
  bottom: 20px;
  left: 0;
  margin-left: 60px;
  color: white;
  font-weight: bold;
}
</style>
