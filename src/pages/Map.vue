<template>
  <div class="map">
    <Header />
    <Select />
    <Map />
    <Type />
    <List />
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/home/footer/footer";
import Map from "../components/apartment/map/map";
import Select from "../components/apartment/select/Select";
import Type from "../components/apartment/type/Type";
import List from "../components/apartment/list/List";
export default {
  name: "maps",
  components: {
    Header,
    Footer,
    Map,
    Select,
    Type,
    List
  }
};
</script>

<style>
</style>