<template>
  <div class="staff">
    <div class="container__staff-left">
      <div
        class="container__staff-left__content"
        data-aos="fade-right"
        data-aos-offset="1800"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        <h2>
          スタッフ紹介
        </h2>
        <div class="line line-staff-left"></div>
        <div class="container__staff-left__members">
          <div class="container__staff-left__members__item">
            <img :src="imgStaff1" alt="" />
            <h3>Mr . Antonio Frizz</h3>
            <p>Marketing executive</p>
          </div>
          <div class="container__staff-left__members__item">
            <img :src="imgStaff2" alt="" />
            <h3>Ms. Vale Domino</h3>
            <p>Co-founder ,Marketing executive</p>
          </div>
        </div>
        <div class="container__staff-left__members__select">
          <img :src="imgIconLeft" alt="" />
          <img :src="imgIconRigth" alt="" />
        </div>
      </div>
    </div>
    <div class="container__staff-rigth">
      <div
        class="container__staff-rigth__content"
        data-aos="fade-left"
        data-aos-offset="1800"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        <h2>運営会社</h2>
        <div class="line line-staff-rigth"></div>
        <p>
          運営会社代表ご挨拶
          互び主演げれ予事をこだ漫掘ロウム能種6長ゃクほ出面そ繁江ムサワ法止ど需城テラフ千安モマカ約石クべる。朝ヒ
        </p>
        <div class="container__staff-rigth__content__btn">
          <button>
            <span>もっと見る</span> <img :src="imgStaffArrow" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgStaff1 from "../../../assets/images/staff-1.jpg";
import imgStaff2 from "../../../assets/images/staff-2.jpg";
import imgIconLeft from "../../../assets/images/staff-icon-left.png";
import imgIconRigth from "../../../assets/images/staff-icon-rigth.png";
import imgStaffArrow from "../../../assets/images/staff-arrow-rigth.png";
import AOS from "aos";
export default {
  name: "staff",
  data: () => {
    return {
      imgStaff1,
      imgStaff2,
      imgIconLeft,
      imgIconRigth,
      imgStaffArrow
    };
  },
  mounted() {
    AOS.init({ once: true });
  }
};
</script>

<style>
.staff {
  display: flex;
}
.container__staff-left {
  width: 50%;
  background-color: #ebebee;
}
.container__staff-rigth {
  width: 50%;
  background-color: #771217;
}
.container__staff-left__content {
  width: 75%;
  margin-left: auto;
  padding-top: 50px;
  padding-bottom: 30px;
}
.container__staff-rigth__content {
  width: 75%;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  color: white;
  height: 100%;
  padding: 50px 30px 30px 30px;
}
.container__staff-rigth__content p {
  height: 65%;
}
.container__staff-left__members {
  display: flex;
  justify-content: space-between;
  width: 95%;
}
.container__staff-left__members__item {
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 48%;
  padding: 10px;
  box-sizing: border-box;
}
.container__staff-left__members__item img {
  width: 100%;
}
.container__staff-left__members__item h3 {
  margin: 15px 0;
  text-align: center;
}
.container__staff-left__members__item p {
  text-align: center;
  margin-bottom: 15px;
}
.container__staff-left__members__select {
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
  width: 95%;
}
.container__staff-left__members__select img {
  padding: 15px;
  border: 1px solid black;
  margin-left: 10px;
}
.line-staff-left {
  padding: 0;
  margin: 20px 0 25px 0;
}
.line-staff-rigth {
  padding: 0;
  margin: 20px 0 25px 0;
  background-color: white;
}
.container__staff-rigth__content__btn {
  display: flex;
  justify-content: flex-end;
}
.container__staff-rigth__content__btn button {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  border: 1px solid white;
  background-color: rgba(0, 0, 0, 0);
  color: white;
}
.container__staff-rigth__content__btn button img {
  margin-left: 10px;
}
</style>
