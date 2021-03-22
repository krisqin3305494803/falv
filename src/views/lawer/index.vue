<template>
  <div>
    <div class="container" v-for="item in list">
      <div class="leftBox">
        <img class="img" :src="item.src" />
      </div>
      <div class="rightBox">
        <div class="name">姓名 :{{ item.name }}</div>
        <div class="phone">联系电话 :{{ item.phone }}</div>
        <div class="kind">擅长法律 :{{ item.kinds }}</div>
      </div>
      <div>
        <el-button
          class="oBtn"
          type="danger"
          round
          @click="dialogFormVisible = true"
          >立即咨询</el-button
        >
      </div>
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
        <el-button @click="dialogFalse">取 消</el-button>
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
      list: [
        {
          name: "卢本伟(卢律师)",
          phone: "121238923894",
          src:
            "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2751268296,4191146349&fm=26&gp=0.jpg",
          kinds: "(金牌律师)所有类法律案件",
        },
        {
          name: "旭旭宝宝(旭律师)",
          phone: "121238923894",
          src:
            "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.lawyer2009.com%2FTemplate%2Fxjx2018%2Fstyle%2Fimages%2Fp2.jpg&refer=http%3A%2F%2Fwww.lawyer2009.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1618992247&t=dd27d1d04de1a9f5a9a6867d99f20871",
          kinds: "婚姻类法律案件",
        },
        {
          name: "韦神(韦律师)",
          phone: "121238923894",
          src:
            "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3852627284,1571420159&fm=26&gp=0.jpg",
          kinds: "土地房屋类法律案件",
        },
        {
          name: "王冰(王律师)",
          phone: "121238923894",
          src:
            "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3098352964,635629443&fm=26&gp=0.jpg",
          kinds: "劳动债务类法律案件",
        },
      ],
    };
  },
  methods: {
    handleClose() {
      this.$confirm("确认关闭？")
        .then((_) => {
          this.form.name = "";
          this.form.phone = "";
          this.dialogFormVisible = false;
        })
        .catch((_) => {});
    },
    dialogTrue() {
      this.$confirm("确认提交信息？")
        .then(() => {
          this.$message.success("稍后我们的律师会联系您");
          this.form.name = "";
          this.form.phone = "";
          this.dialogFormVisible = false;
        })
        .catch((_) => {});
    },
        dialogFalse() {
      this.form.name = "";
      this.form.phone = "";
      this.dialogFormVisible = false;
    },
  },
};
</script>
<style scoped>
.container {
  width: 700px;
  height: 170px;
  border: 2px solid black;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 150px;
  border-radius: 30px;
  overflow: hidden;
}
.leftBox {
  float: left;
}
.rightBox {
  float: left;
  margin-left: 30px;
  margin-top: 20px;
}
.img {
  width: 150px;
  height: 170px;
  border-radius: 30px;
}
.name {
  font-size: 25px;
}
.phone {
  margin-top: 10px;
  font-size: 23px;
}
.kind {
  margin-top: 20px;
  font-size: 18px;
}
.oBtn {
  margin-top: 40px;
  margin-right: 20px;
  float: right;
  width: 150px;
  height: 60px;
}
</style>