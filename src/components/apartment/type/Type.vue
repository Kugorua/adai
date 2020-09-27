<template>
  <div class="type">
    <div class="type-container">
      <form class="type-container__select">
        <label>Type</label>
        <select name="cars" id="cars">
          <option value="volvo">タイプ</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
      </form>
      <div class="type-container__infor">
        <p>
          閑静なおしゃれのんびりエリアです。
          2区の中でも特にタオディエンと呼ばれる閑静な住宅街に欧米の方々を中心に外国人が多く住んでいます。外国人が多いこともあり、おしゃれなアパート、レストラン、カフェ、
          お店が多いエリアとなっております。また高い建物があまりなく川に囲まれたエリアとなるため風通しも良くのんびり過ごすことができます。
          1区周辺や2区の幼稚園や学校に通われるご家族様にもおすすめのエリアです。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.type {
  margin: 50px 0;
}
.type-container {
  width: 80%;
  margin: 0 auto;
}
.type-container__select {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.type-container__select select {
  width: 30%;
  margin-left: 20px;
  background-color: white;
  padding: 5px 20px;
  outline: none;
}
.type-container__infor {
  width: 100%;
  border: 1px solid #c0c0c0;
  padding: 30px 60px;
  background-color: #ebebeb;
}
.type-container__infor p {
  font-weight: 500;
}
</style>