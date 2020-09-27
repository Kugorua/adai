<template>
  <div
    class="form-container"
    data-aos="fade-up"
    data-aos-offset="600"
    data-aos-delay="200"
    data-aos-duration="800"
    data-aos-easing="ease-in-out"
    data-aos-anchor-placement="top-center"
  >
    <div class="form-container__select">
      <div
        class="form-container__select__item"
        v-bind:class="{ 'form-container__select--actvie': !isSelectForm }"
        v-on:click="selectForm"
      >
        <img :src="imgIonFormHome" alt="icon form home" />
        <p>HOUSE</p>
      </div>
      <div
        class="form-container__select__item"
        v-bind:class="{ 'form-container__select--actvie': isSelectForm }"
        v-on:click="selectForm"
      >
        <img :src="imgIonFormOffice" alt="icon form office" />
        <p>OFFICE</p>
      </div>
    </div>
    <div class="form-container__detail">
      <form id="form-id" class="form-container__detail__form">
        <div class="form-container__detail__form__input">
          <input type="text" placeholder="検索キーワード " />
        </div>
        <div class="form-container__detail__form__selects">
          <div class="form-container__detail__form__selects__group-select">
            <select class="form-container__detail__form__group-select__select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select class="form-container__detail__form__group-select__select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select class="form-container__detail__form__group-select__select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div class="form-container__detail__form__selects__group-select">
            <select class="form-container__detail__form__group-select__select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <select class="form-container__detail__form__group-select__select">
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
        </div>
      </form>
      <div class="form-container__detail__btn-search">
        <button>
          <span>検索</span>
          <img :src="imgIonFormSearch" alt="icon search form" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import imgIonFormHome from "../../../assets/images/icon-home-form.png";
import imgIonFormOffice from "../../../assets/images/icon-office-form.png";
import imgIonFormSearch from "../../../assets/images/icon-search-form.png";
import AOS from "aos";
export default {
  name: "Form",
  data: () => {
    return {
      imgIonFormHome,
      imgIonFormOffice,
      imgIonFormSearch,
      isSelectForm: false
    };
  },
  methods: {
    selectForm() {
      this.isSelectForm = !this.isSelectForm;
    }
  },
  mounted() {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-quad"
    });
  }
};
</script>

<style>
p {
  margin: 0;
}
.form-container {
  width: 100%;
  margin-top: -80px;
}
.form-container__select {
  display: flex;
  align-content: center;
  justify-content: center;
  width: 20%;
  margin: 0 auto;
}
.form-container__select__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 35px 35px 15px 35px;
  position: relative;
  background-color: white;
}
.form-container__select__item:nth-child(1) {
  border-right: 1px solid black;
  border-radius: 10px 0 0 0;
}
/* .form-container__select__item::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 10px solid #771217;
  border-top: 10px solid white;
  border-left: 10px solid white;
  border-right: 10px solid white;
} */
.form-container__select--actvie p {
  font-weight: bold;
  color: #771217;
}
.form-container__select--actvie::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 10px solid #771217;
  border-top: 10px solid white;
  border-left: 10px solid white;
  border-right: 10px solid white;
}
.form-container__select__item:nth-child(2) {
  border-left: 1px solid black;
  border-radius: 0px 10px 0 0;
}
.form-container__select__item img {
  margin-bottom: 20px;
}
.form-container__detail {
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  border: 2px solid #dddddd;
  border-top: 3px solid #771217;
  padding: 40px 40px 0 40px;
  box-shadow: 0 4px 10px grey;
  border-radius: 0 0 10px 10px;
  margin-bottom: 60px;
  box-sizing: border-box;
}
.form-container__detail__btn-search button {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #771217;
  padding: 10px 25px;
  border: none;
  outline: none;
}
.form-container__detail__btn-search button span {
  color: white;
  margin-right: 10px;
}
.form-container__detail__form {
  display: flex;
  width: 89%;
  margin-top: 10px;
}
.form-container__detail__form__selects {
  width: 100%;
}
.form-container__detail__form__selects__group-select {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
}
.form-container__detail__form__group-select__select {
  width: 30%;
  height: 40px;
}
.form-container__detail__form__input {
  width: 28%;
}
.form-container__detail__form__input input {
  box-sizing: border-box;
  height: 40px;
  width: 100%;
  outline: none;
}
</style>
