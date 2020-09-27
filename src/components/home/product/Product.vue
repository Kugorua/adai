<template>
  <div class="product">
    <div class="product__container">
      <div
        class="product__container__item product__container__intro"
        data-aos="fade-right"
        data-aos-offset="900"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        <div class="product__container__item__title-intro">
          <h1 class="set-margin">
            NEW
          </h1>
          <h1 class="set-margin">ARRIVAL</h1>
          <div class="line-intro set-margin"></div>
          <div class="set-margin">新着物件</div>
        </div>
        <div class="product__container__item__button">
          <span>もっと見る</span>
          <img :src="imgArrLeftBtn" alt="btb arrow" />
        </div>
      </div>
      <div
        class="product__container__item"
        data-aos="zoom-in"
        data-aos-offset="900"
        data-aos-delay="100"
        data-aos-duration="500"
        v-for="(item, index) in products"
        :key="index"
      >
        <div
          class="product__container__item__img product__container__item--space"
        >
          <img :src="imgItemProduct" alt="product" />
        </div>
        <div
          class="product__container__item__title product__container__item--spaces"
          data-aos="zoom-in"
          data-aos-offset="800"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <h3>{{ item.name }}</h3>
          <p>2区賃貸マンション</p>
        </div>
        <div
          class="line"
          data-aos="fade-right"
          data-aos-offset="800"
          data-aos-delay="500"
          data-aos-duration="500"
        ></div>
        <div
          class="product__container__item__content product__container__item--spaces"
          data-aos="zoom-in"
          data-aos-offset="800"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          互び主演げれ予事をこだ漫掘ロウム能種6長ゃクほ出面そ繁江ムサワ法止ど需城テラフ千安モマカ約石クべる...
        </div>
        <div
          class="product__container__item__price product__container__item--spaces"
          data-aos="fade-left"
          data-aos-offset="750"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <span>900 USD</span>
          <span>/month</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgItemProduct from "../../../assets/images/item-product.jpg";
import imgArrLeftBtn from "../../../assets/images/arrow-left-btn.png";
import AOS from "aos";
let products = [
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  },
  {
    name: "マステリ、MASTERI"
  }
];
export default {
  name: "ProductItem",
  data: () => {
    return {
      imgItemProduct,
      imgArrLeftBtn,
      products
    };
  },
  mounted() {
    AOS.init({ once: true });
  }
};
</script>

<style>
h1,
h2,
h3 {
  margin: 0;
}
.product {
  background-color: #ebebee;
}
.product__container {
  width: 80%;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
}
.product__container__item {
  width: 25%;
  background-color: white;
}
@media screen and (max-width: 768px) {
  .product__container__item {
    width: 50%;
  }
}
.product__container__intro {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #84292e;
  color: white;
  padding: 0 30px;

  box-sizing: border-box;
}
.product__container__item__title-intro h1 {
  font-size: 40px;
}
.product__container__item__title-intro h1:nth-child(1) {
  color: #f9a01b;
}
.line-intro {
  width: 86%;
  height: 2px;
  background-color: white;
}
.product__container__item--space {
  margin-bottom: 20px;
}
.product__container__item--spaces {
  margin-bottom: 20px;
  padding: 0 15px;
  box-sizing: b;
}
.product__container__item__price {
  display: flex;
  justify-content: flex-end;
}
.product__container__item__price span:nth-child(1) {
  color: #f49b1c;
  font-weight: bold;
  font-size: 18px;
}
.product__container__item__content {
  text-align: justify;
}
.product__container__item__img img {
  width: 100%;
}
.line {
  width: 50px;
  height: 3px;
  background-color: #84292e;
  margin-left: 15px;
  margin-bottom: 20px;
}
.set-margin {
  margin-bottom: 20px;
}
.product__container__item__button {
  background-color: white;
  width: 70%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
}
.product__container__item__button span {
  color: #84292e;
  font-weight: 600;
}
</style>
