<template>
  <div class="patner__container">
    <div
      class="patner__container__item"
      data-aos="fade-up"
      data-aos-offset="1200"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <img
        class="patner__container__item__img"
        :src="imgIntroPatner1"
        alt="patner-1"
      />
      <div
        class="patner__container__item__infor patner__container__item__infor patner__container__item__margin"
      >
        <h3 class="patner__container__item__title">礼金仲介手数料なし</h3>
        <div class="line-color"></div>
        <div class="patner__container__item__content">
          礼金仲介手数料なし 新生活では何かと出資がかさむもの、
          弊社では礼金や仲介手数料は一切かかりません。 心機一転、ゆとりの新生
        </div>
      </div>
    </div>
    <div
      class="patner__container__item"
      data-aos="fade-up"
      data-aos-offset="1200"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <img
        class="patner__container__item__img"
        :src="imgIntroPatner2"
        alt="patner-2"
      />
      <div
        class="patner__container__item__infor patner__container__item__infor"
      >
        <h3 class="patner__container__item__title">日本人スタッフがご案内</h3>
        <div class="line-color"></div>
        <div class="patner__container__item__content">
          言葉の通じない海外だからこそ心配。
          弊社のライフアドバイザーが専用車で物件のご 案内をさせて頂きます
        </div>
      </div>
    </div>
    <div
      class="patner__container__item"
      data-aos="fade-up"
      data-aos-offset="1200"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      <img
        class="patner__container__item__img"
        :src="imgIntroPatner3"
        alt="patner-3"
      />
      <div
        class="patner__container__item__infor patner__container__item__infor"
      >
        <h3 class="patner__container__item__title">アフターサービスも充実</h3>
        <div class="line-color"></div>
        <div class="patner__container__item__content">
          ご入居後のトラブルもお気軽にご相談ください。
          またご契約の更新や住み替え、ご退去時も 経験豊富なカス
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgIntroPatner1 from "../../../../assets/images/intro-patner-1.jpg";
import imgIntroPatner2 from "../../../../assets/images/intro-patner-2.jpg";
import imgIntroPatner3 from "../../../../assets/images/intro-patner-3.jpg";
import AOS from "aos";
export default {
  name: "patner",
  data: () => {
    return { imgIntroPatner1, imgIntroPatner2, imgIntroPatner3 };
  },
  mounted() {
    AOS.init({ once: true });
  }
};
</script>

<style>
.patner__container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.patner__container__item {
  width: 32%;
  background-color: #84292e;
  color: white;
}
.patner__container__item__img {
  width: 100%;
}
.patner__container__item__infor {
  padding: 15px;
  box-sizing: border-box;
}
.patner__container__item__infor h3 {
  margin: 0 0 20px 0;
}
.patner__container__item__infor div {
  margin: 0 0 0px 0;
}
.line-color {
  width: 50px;
  height: 2px;
  background-color: white;
}
</style>
