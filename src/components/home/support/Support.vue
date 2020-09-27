<template>
  <div class="support">
    <div class="support__container">
      <h1
        data-aos="zoom-in"
        data-aos-offset="1600"
        data-aos-delay="100"
        data-aos-duration="500"
      >
        ベトナム進出支援
      </h1>
      <div
        class="line"
        data-aos="zoom-in"
        data-aos-offset="1600"
        data-aos-delay="100"
        data-aos-duration="500"
      ></div>
      <div class="support__container__items ">
        <div
          class="support__container__item "
          :class="{ 'support__container--select': item.select }"
          v-for="(item, index) in listSupport"
          :key="index"
          @click="selectSupport(index)"
        >
          <p
            data-aos="zoom-in"
            data-aos-offset="1600"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            {{ item.name }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AOS from "aos";
export default {
  name: "support",
  methods: {
    selectSupport(index) {
      this.listSupport = this.listSupport.map((item, indexs) => {
        if (indexs === index) {
          return { ...item, select: !item.select };
        }
        return { ...item, select: false };
      });
    }
  },
  mounted() {
    AOS.init({ once: true });
  },
  data: () => {
    return {
      listSupport: [
        {
          name: ">会社設立＆ スタートアップ支援",

          select: true
        },
        {
          name: "駐在員事務所設立＆ スタートアップ支援",

          select: false
        },
        {
          name: "ベトナム労働許可証",

          select: false
        },
        {
          name: "ベトナムビザ",

          select: false
        },
        {
          name: "割安WEBサイト制作",

          select: false
        },
        {
          name: "オフィス内装工事",

          select: false
        }
      ]
    };
  }
};
</script>

<style>
.support {
  background-image: url("../../../assets/images/bg-support.jpg");
  margin-top: 50px;
}
.support__container {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.support__container h1 {
  font-size: 28px;
  margin: 20px 0;
}
.support__container__items {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.support__container__item {
  width: 32%;
  padding: 40px 50px;
  border: 1px solid black;
  margin: 10px 0;
  box-sizing: border-box;
}
.support__container__item p {
  text-align: center;
}
.support__container--select {
  position: relative;
  border: 1px solid #84292e;
  border-bottom: 3px solid #84292e;
  padding-bottom: 38px;
}
.support__container--select::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border: 10px solid rgba(0, 0, 0, 0);
  border-bottom-color: #84292e;
}
</style>
