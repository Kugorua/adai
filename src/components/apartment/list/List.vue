<template>
  <div class="list">
    <div class="list__container">
      <div class="list__container__header">
        <div class="list__container__header__title">コンドミニアム</div>
        <div class="list__container__header__sort">
          <div class="list__container__header__sort__select">
            <label>並び替え</label>
            <select name="cars" id="cars">
              <option value="volvo">登録日: 新しい順</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div>
          <div class="list__container__header__sort__shape">
            <img :src="imgList1" alt="" />
            <img :src="imgList2" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import imgList1 from "../../../assets/images/list-1.png";
import imgList2 from "../../../assets/images/list-2.png";
export default {
  name: "list",
  data: () => {
    return {
      imgList1,
      imgList2
    };
  }
};
</script>

<style>
.list__container {
  width: 80%;
  margin: 0 auto;
  border-top: 1px solid #424242;
  padding-top: 10px;
}
.list__container__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.list__container__header__sort {
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.list__container__header__sort__select {
  display: flex;
  align-items: center;
}
.list__container__header__sort__select select {
  padding: 5px 10px;
  outline: none;
  margin-left: 20px;
}
.list__container__header__sort__shape {
  display: flex;
  justify-content: center;
  align-items: center;
}
.list__container__header__sort__shape img:nth-child(1) {
  margin-right: 10px;
}
</style>