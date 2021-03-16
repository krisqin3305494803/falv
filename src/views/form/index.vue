<template>
<div>
<div class="top">
  <img src="@/assets/imagebox/10.jpg" alt="">
</div>
  <div class="container">
    <div class="land" @click="Toland">
      <img class="imgstyle" src="@/assets/imagebox/6.jpg"  alt="" />
      <div>土地房屋法律援助</div>
      <div>价格：289元</div>
    </div>
    <div class="marriage" @click="Tomarriage">
      <img class="imgstyle" src="@/assets/imagebox/8.jpg" alt="" />
      <div>婚姻类法律援助</div>
      <div>价格：329元</div>
    </div>
    <div class="work" @click="Towork">
      <img class="imgstyle" src="@/assets/imagebox/7.jpg" alt="" />
      <div>劳务合同法律援助</div>
      <div>价格：349元</div>
    </div>
        <div class="else" @click="Toelse">
      <img class="imgstyle" src="@/assets/imagebox/9.jpg" alt="" />
      <div>其他合同法律援助</div>
      <div>价格：199元</div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    Toland() {
      this.$router.push({ path: "/list/land" });
    },
    Tomarriage() {
      this.$router.push({ path: "/list/marriage" });
    },
    Towork() {
      this.$router.push({ path: "/list/work" });
    },
    Toelse() {
      this.$router.push({ path: "/list/else" });
    },
  },
};
</script>

<style scoped>
.top {
  text-align: center;
}
.container {
  margin-top: 50px;
  margin-right: 150px;
  margin-left: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.land,
.marriage,
.work,
.else {
  width: 300px;
  height: 220px;
  border: 3px solid #000;
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 15px;
  border-radius: 10px;
}
.imgstyle {
  margin-left: -3px;
  margin-top: -3px;
  width: 300px;
  height: 160px;
  max-width: 300px;
  max-height: 220px;
  border-radius: 10px;
}
</style>