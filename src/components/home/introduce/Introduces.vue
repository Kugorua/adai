<template>
  <div class="introducs">
    <div class="introducs__container">
      <IntroducePatner />
      <IntroduceLocation />
      <IntroduceFeature />
    </div>
  </div>
</template>

<script>
import IntroducePatner from "./introduce-patner/IntroducePart";
import IntroduceLocation from "./introduce-location/IntroduceLocation";
import IntroduceFeature from "./introduce-feature/IntroduceFeature";
export default {
  name: "intdrouce",
  components: {
    IntroducePatner,
    IntroduceLocation,
    IntroduceFeature
  }
};
</script>

<style>
.introducs {
}
.introducs__container {
  width: 80%;
  margin: 0 auto;
}
</style>