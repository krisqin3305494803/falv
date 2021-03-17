<template>
  <div class="side">
    <div class="top">
      <div class="topbar">
        <div class="left">
          <img class="imgstyle" src="@/assets/imagebox/6.jpg" alt="" />
        </div>
        <div class="right">
          <h1>个人劳动仲裁咨询</h1>
          <div class="tips">
            当面临公司强行辞退、克扣工资等问题时，建议您在专业法律指导下进行劳动仲裁，享受合法权益。
          </div>
          <div class="price">价格：￥99</div>
          <div>
            <el-button type="danger" round  @click="dialogFormVisible = true">立即咨询</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <img src="@/assets/imagebox/16.jpg" alt="" />
      <img src="@/assets/imagebox/17.jpg" alt="" />
    </div>

        <el-dialog
      title="信息填写"
      :visible.sync="dialogFormVisible"
      :before-close="handleClose"
    >
      <el-form :model="form">
        <el-form-item label="您的姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话号码" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogTrue">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: "",
        phone: "",
      },
      formLabelWidth: "120px",
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.dialogFormVisible = false;
        })
        .catch((_) => {});
    },
    dialogTrue() {
      this.$confirm("确认提交信息？")
        .then(() => {
          this.$message.success("稍后我们的律师会联系您")
          this.form.name = "";
          this.form.phone = "";
          this.dialogFormVisible = false;
        })
        .catch((_) => {});
    },
  },
};
</script>

<style scoped>
.side {
  margin-left: 150px;
  margin-right: 150px;
  background-color: #fff;
}
.top {
  margin-top: 30px;
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
  width: 360px;
  height: 250px;
}
.left {
  float: left;
}
.right {
  width: 300px;
  height: 240px;
  float: left;
  margin-left: 100px;
}
.tips {
  margin-top: -15px;
  padding-bottom: 10px;
}
.price {
  padding-top: 20px;
  padding-bottom: 20px;
}
.container {
  margin-top: 20px;
}
</style>
