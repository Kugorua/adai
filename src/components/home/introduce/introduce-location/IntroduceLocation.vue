<template>
  <div class="location">
    <h2
      class="location__title"
      data-aos="fade-right"
      data-aos-offset="1200"
      data-aos-delay="100"
      data-aos-duration="500"
    >
      ホーチミンの賃貸物件について
    </h2>
    <div class="lines"></div>
    <div class="location__items">
      <div
        class="loaction__items__item "
        :class="{ loaction__items__select: item.select }"
        v-for="(item, index) in listLoaction"
        :key="index"
        @click="selectLoaction(index)"
      >
        <img
          :src="item.img"
          alt
          :data-aos="index > 2 ? 'fade-left' : 'fade-right'"
          data-aos-offset="1100"
          :data-aos-delay="100 * (index + 1)"
          data-aos-duration="500"
        />
        <div
          :data-aos="index < 3 ? 'fade-left' : 'fade-right'"
          data-aos-offset="1100"
          :data-aos-delay="100 * (index + 1)"
          data-aos-duration="500"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgLocation1 from "../../../../assets/images/icon-location-1.png";
import imgLocation2 from "../../../../assets/images/icon-location-2.png";
import imgLocation3 from "../../../../assets/images/icon-location-3.png";
import imgLocation4 from "../../../../assets/images/icon-location-4.png";
import imgLocation5 from "../../../../assets/images/icon-location-5.png";
import imgLocation6 from "../../../../assets/images/icon-location-6.png";
import AOS from "aos";
export default {
  name: "location",
  data: () => {
    return {
      listLoaction: [
        {
          name: "入居までの流れ1",
          img: imgLocation1,
          select: true
        },
        {
          name: "入居までの流れ2",
          img: imgLocation2,
          select: false
        },
        {
          name: "入居までの流れ3",
          img: imgLocation3,
          select: false
        },
        {
          name: "入居までの流れ4",
          img: imgLocation4,
          select: false
        },
        {
          name: "入居までの流れ5",
          img: imgLocation5,
          select: false
        },
        {
          name: "入居までの流れ6",
          img: imgLocation6,
          select: false
        }
      ]
    };
  },
  mounted() {
    AOS.init({ once: true });
  },
  methods: {
    selectLoaction(index) {
      this.listLoaction = this.listLoaction.map((item, indexs) => {
        if (indexs === index) {
          return { ...item, select: !item.select };
        }
        return { ...item, select: false };
      });
    }
  }
};
</script>

<style>
.location__items {
  display: flex;
  width: 70%;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
}
.location__title {
  margin: 30px 0;
}
.lines {
  width: 100%;
  height: 2px;
  background-color: #e1e1e1;
  margin-bottom: 30px;
}
.loaction__items__item {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #e5e5e5;
  margin-bottom: 30px;
  padding: 20px 0;
  position: relative;
  cursor: pointer;
}
.loaction__items__select {
  border-bottom: 3px solid black;
  padding-bottom: 18px;
}

.loaction__items__select::after {
  content: "";
  position: absolute;
  bottom: -2px;
  border: 10px solid rgba(0, 0, 0, 0);
  border-bottom-color: black;
}
.loaction__items__item--hover:hover {
  border-bottom: 3px solid black;
  padding-bottom: 18px;
}
.loaction__items__item--hover:hover::after {
  content: "";
  position: absolute;
  bottom: 0;
  border: 10px solid rgba(0, 0, 0, 0);
  border-bottom-color: black;
}
.loaction__items__select::after {
  content: "";
  position: absolute;
  bottom: 0;
  border: 10px solid rgba(0, 0, 0, 0);
  border-bottom-color: black;
}
.loaction__items__item img {
  margin-bottom: 30px;
}
</style>
