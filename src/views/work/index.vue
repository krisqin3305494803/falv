<template>
  <div class="side">
    <div class="top">
      <div class="topbar">
        <div class="left">
          <img class="imgstyle" src="@/assets/imagebox/6.jpg" alt="" />
        </div>
        <div class="right">
          <h1>个人劳动仲裁咨询</h1>
          <div class="tips">当面临公司强行辞退、克扣工资等问题时，建议您在专业法律指导下进行劳动仲裁，享受合法权益。</div>
          <div class="price">价格：￥99</div>
          <div>
            <el-button type="danger" round>立即咨询</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
        <img src="@/assets/imagebox/12.jpg" alt="">
        <img src="@/assets/imagebox/13.jpg" alt="">
    </div>
  </div>
</template>

<script>
</script>

<style scoped>
.side {
  margin-left: 150px;
  margin-right: 150px;
  background-color: #fff;
}
.top {
  height: 270px;
    border: 3px solid black;
    border-radius: 20px;
}
.topbar {
  height: 240px;
  padding: 10px 10px 10px 10px;
  /* background-color: gray; */
}
.imgstyle {
  width: 350px;
  height: 220px;
}
.left {
  float: left;
}
.right {
    width: 300px;
  height: 240px;
  float: right;
  margin-right: 300px;
}
.tips{
    margin-top: -15px;
    padding-bottom: 10px;
}
.price{
    padding-top: 20px;
    padding-bottom: 20px;
}
.container{
    margin-top: 20px;
}
</style>
