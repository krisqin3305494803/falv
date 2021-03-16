<template>
  <el-container>
    <el-header> 在线诉讼服务 </el-header>
    <el-divider></el-divider>
    <el-main>
      <el-carousel>
        <div>
          <el-carousel :interval="3000">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.idView" width="100%" height="100%" />
            </el-carousel-item>
          </el-carousel>
        </div>
      </el-carousel>
    </el-main>
          <el-divider></el-divider>
    <el-footer>
      <div class="one" @click="ToFrom">
        <img class="imgstyle"
          src="@/assets/imagebox/4.jpg"
          alt="点击此处进入法律咨询"
        />
        <p class="lawer">法律咨询</p>
      </div>
      <div class="two" @click="ToLawer">
        <img class="imgstyle"
          src="@/assets/imagebox/5.jpg"
          alt="点击此处查看法规大全"
        />
        <p class="rule">精英律师推荐</p>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        { id: 0, idView: require("@/assets/imagebox/1.jpg") },
        { id: 1, idView: require("@/assets/imagebox/2.jpg") },
        { id: 2, idView: require("@/assets/imagebox/3.jpg") },
      ],
    };
  },
  methods:{
    ToFrom(){
      this.$router.push({path:'/form/index'});
    },
    ToLawer(){
      this.$router.push({path:'/lawer/index'});
    }
  }
};
</script>

<style scoped>
.el-header {
  height: 100px;
  margin: 0 auto;
  line-height: 100px;
  font-size: 35px;
  border-bottom: 1px soild black;
}
.el-main {
  margin-left: 200px;
  margin-right: 200px;
}
.el-carousel__container {
  position: relative;
  height: 350px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-footer {
  height: 320px;
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
}
.one {
  border:3px solid #000;
  width: 300px;
  height: 260px;
  border-radius: 10px;
}
.two {
  border:3px solid #000;
  margin-left: 200px;
  width: 300px;
  height: 260px;
  border-radius: 10px;
}
.lawer {
  text-align: center;
  font-size: 25px;
}
.rule {
  text-align: center;
  font-size: 25px;
}
.imgstyle{
  width: 100%;
  max-height: 200px; 
  max-width: 300px;
  border-radius: 10px;
  margin-left: -1px;
  margin-top: -3px;
}
</style>
