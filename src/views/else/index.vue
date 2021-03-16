<template>
  <div class="side">
    <div class="top">
      <div class="topbar">
        <div class="left">
          <img class="imgstyle" src="@/assets/imagebox/9.jpg" alt="" />
        </div>
        <div class="right">
          <h1>其他法律咨询</h1>
          <div class="tips">找不到合适的，点击此页下单哟，一对一解决你的疑问。</div>
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
