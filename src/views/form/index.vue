<template>
  <div>
    <div class="top">
      <img src="@/assets/imagebox/10.jpg" alt="" />
    </div>
    <div class="container">
      <div class="box" @click="Toland">
        <div class="box1">
          <img class="imgstyle" src="@/assets/imagebox/6.jpg" alt="" />
        </div>
        <div class="box2"><h3>房屋法律咨询</h3></div>
        <div class="box3">
          <h5>问中介不如问律师。</h5>
        </div>
        <div class="box4">
          <div class="box6">￥99</div>
          <div class="box5">立即咨询></div>
        </div>
      </div>
      <div class="box" @click="Tomarriage">
        <div class="box1">
          <img class="imgstyle" src="@/assets/imagebox/8.jpg" alt="" />
        </div>
        <div class="box2"><h3>婚姻法律咨询</h3></div>
        <div class="box3">
          <h5>专业律师在线答疑，离婚不用怕！</h5>
        </div>
        <div class="box4">
          <div class="box6">￥299</div>
          <div class="box5">立即咨询></div>
        </div>
      </div>
      <div class="box" @click="Towork">
        <div class="box1">
          <img class="imgstyle" src="@/assets/imagebox/7.jpg" alt="" />
        </div>
        <div class="box2"><h3>劳动合同法律咨询</h3></div>
        <div class="box3">
          <h5>
            当面临公司强行辞退、克扣工资等问题时，建议您在专业法律指导下进行劳动仲裁，享受合法权益。
          </h5>
        </div>
        <div class="box4">
          <div class="box6">￥99</div>
          <div class="box5">立即咨询></div>
        </div>
      </div>
      <div class="box" @click="Toelse">
        <div class="box1">
          <img class="imgstyle" src="@/assets/imagebox/9.jpg" alt="" />
        </div>
        <div class="box2"><h3>其他法律咨询</h3></div>
        <div class="box3">
          <h5>找不到合适的，点击此页下单哟，一对一解决你的疑问。</h5>
        </div>
        <div class="box4">
          <div class="box6">￥99</div>
          <div class="box5">立即咨询></div>
        </div>
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
  margin-top: 30px;
  margin-right: 150px;
  margin-left: 150px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
.box {
  width: 400px;
  height: 350px;
  border-radius: 10px;
  border: 1px solid black;
  box-shadow: 2px 2px 2px grey;
  margin-bottom: 20px;
}
.box2 {
  padding: 10px;
}
h3 {
  padding: 0;
  margin: 0;
}
h5 {
  margin: 0px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: -100px;
}
.box3 {
  width: 400px;
}
.box4 {
  position: relative;
  padding-top: 6px;
}
.box6 {
  position: absolute;
  color: red;
  padding: 5px;
  margin: 0;
}
.box5 {
  position: absolute;
  right: -0px;
  background-color: pink;
  color: red;
  padding: 5px;
}
.imgstyle {
  width: 398px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>