<template>
  <div class="header">
    <div class="header__container">
      <div class="header__container__logo header__container--width">
        <p>ホーチミン不動産賃貸 アオザイハウジング事業部</p>
        <img :src="imgLogo" alt="logo" />
      </div>
      <div class="header__container__contact header__container--width">
        <div class="header__container__contact__name">
          <img :src="imgIconCall" alt="call" />
          <p>ベトナム国内から</p>
        </div>
        <div class="underlined"></div>
        <div>028‐3827‐5068</div>
      </div>
      <div class="header__container__contact header__container--width">
        <div class="header__container__contact__name">
          <img :src="imgIconCall" alt="call" />
          <p>ベトナム国内から</p>
        </div>
        <div class="underlined"></div>
        <div>028‐3827‐5068</div>
      </div>
      <div class="header__container__mail header__container--width">
        <img :src="imgIconMail" alt="mail" />
        <p>WEBからの お問い合わせ</p>
      </div>
      <div class="header__container__translations header__container--width">
        <div class="header__container__translations__tranlation">
          <button
            class="header__container__translations__tranlation__item header__container__translations--bg"
          >
            JP
          </button>
          <button class="header__container__translations__tranlation__item">
            VN
          </button>
          <button class="header__container__translations__tranlation__item">
            EN
          </button>
        </div>
        <div class="header__container__translations__nav">
          <img :src="imgIconNav" alt="nav" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgLogoHeader from "../assets/images/logo-header.png";
import imgIconCall from "../assets/images/icon-call.png";
import imgIconMail from "../assets/images/mail-icon.png";
import imgIconNav from "../assets/images/icon-nav.png";
export default {
  name: "HelloWorld",
  data: () => {
    return {
      imgLogo: imgLogoHeader,
      imgIconCall,
      imgIconMail,
      imgIconNav
    };
  },
  components: {},
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p {
  margin: 0;
}

.header {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  z-index: 1;
  box-sizing: border-box;
}

.header__container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}
@media screen and (max-width: 786px) {
  .header__container {
    width: 98%;
  }
}
.header__container--width {
  margin: 0 10px;
}
.header__container__logo {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.header__container__contact {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20%;
  border: 1px dotted black;
  padding: 5px;
}

.header__container__contact__name {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header__container__contact__name img {
  width: 17px;
  height: 17px;
}
/* .header__container__contact__name p {
  margin: 0;
} */
.underlined {
  width: 60%;
  border-top: 2px dotted black;
  margin: 14px 0;
}
.header__container__mail {
  width: 17%;
  display: flex;
  border: 1px dotted black;

  padding: 16.5px 10px;
}
@media screen and (max-width: 768px) {
  .header__container__mail {
    padding: 4.5px 10px;
  }
}
.header__container__mail img {
  width: 39px;
  height: 37px;
  margin-right: 10px;
}
.header__container__translations {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.header__container__translations__tranlation {
  display: flex;
}
.header__container__translations__tranlation__item {
  margin: 0 0.5px;
  border: 1px solid #898989;
  background-color: white;
  outline: none;
  cursor: pointer;
}
.header__container__translations--bg {
  background-color: #414141;
  color: white;
}
.header__container__translations__nav {
  margin-top: 10px;
}
.header__container__translations__nav img {
  border: 2px solid #898989;
  padding: 5px;
  cursor: pointer;
}
</style>
