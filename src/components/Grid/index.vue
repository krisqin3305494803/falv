<template>
  <div class="contain">
    <p>{{ titleName }}</p>
    <p>{{ price }}元</p>
  </div>
</template>

<script>
export default {
  props: {
    titleName: String,
    price: Number,
  },
  name: "Grid",
};
</script>

<style scoped>
.contain {
  width: 800px;
  height: 300px;
  border: 3px solid #000;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>