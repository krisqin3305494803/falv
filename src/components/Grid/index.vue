<template>
  <div class="contain" @click="childMethod()">
    <img src="" alt="" />
    <p>{{ titleName }}</p>
    <p>{{ price }}元</p>
  </div>
</template>

<script>
export default {
  props: {
    titleName: String,
    price: Number,
    src:String,
    fatherMethod: {
      type: Function,
      default: null,
    },
  },
  name: "Grid",
  methods: {
    childMethod() {
      if (this.fatherMethod) {
        this.fatherMethod();
      }
    },
  },
};
</script>

<style scoped>
.contain {
  width: 500px;
  height: 300px;
  border: 3px solid #000;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 20px;
}
</style>