<template>
  <div class="footer">
    <div class="footer__container">
      <div class="footer__container__logo">
        <img :src="imgPosterLogo" alt />
        <p>Copyright © 2012 PROPOLIFE VIETNAM All Rights Reserved.</p>
      </div>
      <div class="footer__container__service">
        <h3>サービス</h3>
        <div class="line-poster"></div>
        <ul>
          <li>新着物件</li>
          <li>特集物件</li>
          <li>物件検索</li>
          <li>住居エリア</li>
        </ul>
      </div>
      <div class="footer__container__donate">
        <h3>サポート</h3>
        <div class="line-poster"></div>
        <ul>
          <li>よくある質問</li>
          <li>会社情報</li>
          <li>ベトナム進出支援</li>
          <li>入居までの流れ</li>
        </ul>
      </div>
      <div class="footer__container__conntact">
        <h3>お問い合わせ</h3>
        <div class="line-poster"></div>
        <ul>
          <li>
            <img :src="imgPosterMap" alt />
            <span
              >Unit1904 19Floor CJ BUILDING(旧GEMADEPT TOWER) 6 Le Thanh Ton,
              D</span
            >
          </li>
          <li>
            <img :src="imgPosterMail" alt />
            <span>aodaihousing@gmail.com</span>
          </li>
          <li>
            <img :src="imgPosterCall" alt />
            <span>028-3827-5068</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="pull-up">
      <a href="#1">
        <img :src="imgPosterUpArrow" alt />
      </a>
    </div>
  </div>
</template>

<script>
import imgPosterLogo from "../../../assets/images/poster-logo.png";
import imgPosterMail from "../../../assets/images/poster-mail-icon.png";
import imgPosterMap from "../../../assets/images/poster-map-icon.png";
import imgPosterCall from "../../../assets/images/poster-call-icon.png";
import imgPosterUpArrow from "../../../assets/images/up-arrow.png";
export default {
  name: "poster",
  data: () => {
    return {
      imgPosterMail,
      imgPosterLogo,
      imgPosterMap,
      imgPosterCall,
      imgPosterUpArrow
    };
  }
};
</script>

<style>
.footer {
  background-color: #212121;
  margin-top: 40px;
}
.footer__container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
}
.footer__container__logo {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.footer__container__logo p {
  text-align: center;
  margin-top: 10px;
  color: white;
}
.footer__container__service {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
}
.footer__container__service ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer__container__service li {
  margin: 10px 0;
}
.footer__container__donate {
  width: 15%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
}
.footer__container__donate ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer__container__donate li {
  margin: 10px 0;
}
.footer__container__conntact {
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  color: white;
}
.footer__container__conntact ul {
  padding: 0;
  margin: 0;
  list-style: none;
}
.footer__container__conntact li {
  margin: 10px 0;
}
.line-poster {
  width: 50px;
  height: 3px;
  background-color: #353535;
  margin: 10px 0;
}
.pull-up {
  width: 10%;
  margin: 0 auto;
}
.pull-up a {
  background-color: #212121;
  border: none;
  cursor: pointer;
}
</style>