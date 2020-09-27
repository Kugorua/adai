<template>
  <div class="select">
    <div class="select__container">
      <div class="select__container__item">
        <h3>Tトップページ</h3>
        <h3>/</h3>
        <h3 class="select__container--active">住居エリア検索</h3>
      </div>
      <div class="select__container__infor">
        タイプを選び、地図上の区をクリックして下さい。
        区の情報と指定した区のマンション、サービスアパートが下記に表示されます。
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.select__container {
  width: 80%;
  margin: 0 auto;
}
.select__container__item {
  display: flex;
  margin: 20px 0;
}
.select__container__item h3 {
  font-size: 18px;
  font-weight: 550;
}
.select__container__item h3:nth-child(2) {
  margin: 0 10px;
}
.select__container__item h3:nth-child(1) {
  margin: 0 10px;
  cursor: pointer;
}
.select__container__item h3:nth-child(3) {
  cursor: pointer;
  margin: 0 10px;
}
.select__container--active {
  color: #84292c;
}
.select__container__infor {
  width: 50%;
  margin-bottom: 15px;
  font-weight: 500;
}
</style>