<template>
  <div class="information">
    <div class="information__container">
      <h1
        data-aos="fade-right"
        data-aos-offset="2000"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        アオザイ インフォメーション
      </h1>
      <div class="line"></div>
      <div class="information__container__item">
        <div class="information__container__item__1">
          <img
            class="information__container__item__1__img"
            :src="imgInfor1"
            alt
            data-aos="fade-down-right"
            data-aos-offset="2000"
            data-aos-delay="100"
            data-aos-duration="500"
          />
          <div
            class="information__container__item__1__content"
            data-aos="fade-up-right"
            data-aos-offset="1800"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <h2>互び主演げれ予</h2>
            <p>
              第塩ね介身旅ミキヱウ画聞ケリワロ河退イオレリ村外でえげる宏61重ぶ有立みスなね弘6文ゅリ書医ぱ編七ゃイつを減権容係車ぽんどき。要願あ対段迎びばンと名下込アマル画指幕ス臨列ヱシク阪48営いちかの観取審据灯をリ。広ヨヌ極断ヨエイ一試フ加集フっ案翔っンつ時索提ロ...
            </p>
            <div class="information__container__item__1__content__time">
              <p>5 Jun 2017</p>
              <button>
                <span>もっと見る</span>
                <img :src="imgStaffArrow" alt />
              </button>
            </div>
          </div>
        </div>
        <div class="information__container__item__2">
          <div
            class="information__container__item__2__content boder"
            data-aos="fade-down-left"
            data-aos-offset="2000"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <img :src="imgInfor2" alt />
            <div class="information__container__item__2__content__infor">
              <h2>重ぶ有立みスなね</h2>
              <p>
                第塩ね介身旅ミキヱウ画聞ケリワロ河退イオレリ村外でえげる宏61重ぶ有立みスなね弘6文ゅリ書医ぱ編七ゃイつを
              </p>
              <p>5 jun 2017</p>
            </div>
          </div>
          <div
            class="information__container__item__2__content"
            data-aos="fade-up-left"
            data-aos-offset="1800"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            <img :src="imgInfor3" alt />
            <div class="information__container__item__2__content__infor">
              <h2>重ぶ有立みスなね</h2>
              <p>
                第塩ね介身旅ミキヱウ画聞ケリワロ河退イオレリ村外でえげる宏61重ぶ有立みスなね弘6文ゅリ書医ぱ編七ゃイつを
              </p>
              <p>5 jun 2017</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgInfor1 from "../../../assets/images/information-1.png";
import imgInfor2 from "../../../assets/images/information-2.png";
import imgInfor3 from "../../../assets/images/information-3.png";
import imgStaffArrow from "../../../assets/images/staff-arrow-rigth.png";
import AOS from "aos";
export default {
  name: "infor",
  mounted() {
    AOS.init({ once: true });
  },
  data: () => {
    return {
      imgInfor1,
      imgInfor2,
      imgInfor3,
      imgStaffArrow
    };
  }
};
</script>

<style>
.information {
}
.information__container {
  width: 80%;
  margin: 0 auto;
}
.information__container__item {
  display: flex;
}
.information__container__item__1 {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.information__container__item__1__img {
  width: 100%;
  height: 55%;
  border-bottom: 0.5px solid white;
}
.information__container__item__1__content {
  color: white;
  background-color: #771217;
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  box-sizing: border-box;
}

.information__container__item__1__content__time {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
}
.information__container__item__1__content__time button {
  display: flex;
  align-items: center;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0);
  color: white;
  padding: 10px 15px;
}
.information__container__item__1__content__time button span {
  margin-right: 10px;
}
.information__container__item__1__content__time p {
  color: #c39191;
  font-style: italic;
}
.information__container__item__2 {
  width: 50%;
  display: flex;
  flex-direction: column;
}
.information__container__item__2__content {
  display: flex;
}
.information__container__item__2__content img {
  border-right: 0.5px solid white;
  width: 55%;
}

.information__container__item__2__content__infor {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: #3c3c3c;
  padding: 15px;
  color: white;
  width: 45%;
}
.boder {
  border-bottom: 0.5px solid white;
}
</style>
