<template>
  <div id="sign">

    <!--pages/sign/index.wxml-->
    <img class="logo" src="@/assets/logo-white.png" />
    <img class="text_01" src="@/assets/text_01_white.png" />
    <img class="people" src="@/assets/people_sign.png" />
    <img class="text_02" src="@/assets/text_02_white.png" />
    <div class="card">
      <div class="sign_title">
        <div class="border"></div>
        <div class="text-group">
          <span class="title">活动登记信息</span>
          <span class="remark">您填写的信息仅用于参赛登记，不会公开</span>
        </div>

        <form slot='mid' class="sign_form" @submit.prevent="signFormData">
          <div class="input-group">
            <div class="label">
              <span>姓名</span><span style="color: #e34d59"> *</span>
            </div>
            <input class='input' label="姓名" type="search" placeholder="请输入姓名" v-model.trim='name'>
          </div>


          <div class="input-group">
            <div class="label">
              <span>电话</span><span style="color: #e34d59"> *</span>
            </div>
            <!-- <input class='input' label="姓名" type="search" placeholder="请输入姓名" v-model.trim='name'> -->
            <input class='input' label="电话" type="search" placeholder="请输入电话" v-model.trim='mobile'>

          </div>

          <div class="input-group">
            <div class="label">
              <span>省份</span><span style="color: #e34d59"> *</span>
            </div>
            <!-- <input class='input' label="姓名" type="search" placeholder="请输入姓名" v-model.trim='name'> -->
            <input class='input' label="省份" type="search" placeholder="请输入省份" v-model.trim='province'>

          </div>

          <div class="input-group">
            <div class="label">
              <span>城市</span><span style="color: #e34d59"> *</span>
            </div>
            <input class='input' label="城市" type="search" placeholder="请输入城市" v-model.trim='city'>

          </div>

          <div class="input-group">
            <div class="label">
              <span>医院</span><span style="color: #e34d59"> *</span>
            </div>
            <input class='input' label="医院" type="search" placeholder="输入医院名称（全称）" v-model.trim='hospital'>

          </div>


          <div id="buttonView" class="buttonView">
            <img class="btn" src="@/assets/btn-home.png" />
            <button class="link" @click.stop="signFormData">提交登记</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: '',
      mobile: '',
      province: '',
      city: '',
      hospital: ''
    }
  },
  watch: {

  },
  methods: {

  },
  mounted() {

  },
  activated() {

  },
  deactivated() {

  }
}
</script>
<style lang='stylus' scoped>
#sign {
  position: relative;
  padding: 25px 12px;
  width:100%;
  height:100%;
  background-color: #1eab3c;
}

.logo {

  width: 125px;
  height: 38px;
}

.people {
  position: absolute;
  top: 27px;
  right: -7px;
  width: 212px;
  height: 233px;
}

.text_01 {
  position: absolute;
  left: 32px;
  top: 121px;
  width: 131px;
  height: 71px;
}

.text_02 {
  position: absolute;
  left: 26px;
  bottom: 25px;
  width: 139px;
  height: 45px;
}


.card {
  position: absolute;
  top: 221px;
  width: 351px;
  height: 355px;
  box-shadow: 4px 3px 4px 0px rgba(1, 31, 30, 0.23);
  background-color: #fff;
  border-radius: 10px;
  padding: 14px 12px;
  box-sizing: border-box;

}

.sign_title {
  display: flex;
  line-height:19px;
  border-bottom: 2px solid rgb(236, 236, 236, .2);
}

.text-group{
  display:flex;
}

.title {
  font-family: SourceHanSansCN-Bold;
  font-size: 16px;
  color: #1eab3c;
  margin-right:5px;
}

.border {
  display: inline-block;
  width: 5px;
  height: 19px;
  background-color: #1eab3c;
  border-radius: 19px;
  margin-right:5px;
  margin-bottom:13px;
}

.sign_form {
  position: absolute;
  top: 70px;
}

.remark {
  font-family: SourceHanSansCN-Medium;
  font-size: 12px;
  color: #898989;
  line-height: 20px;
  transform: scale(0.9);
}

.buttonView {
  position: relative;
  text-align: center;
}

.buttonView .btn {
  width: 104px;
  height: 34px;

}

.link {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: transparent;
  width: 104px;
  height: 34px;
  border: 0;
  font-size: 17px;
  text-align: center;
  color: #fff;
  line-height: 34px;
}


.input-group{
  display:flex;
  width:327px;
padding-bottom:10px;
border-bottom:2px solid rgba(236 236 236 .2);
}

.label{
  display: flex;
  align-items: center;
  font-size:16px;
  margin-right:10px;
  span{
    height:27px;
    line-height:27px;
  }
}

.input{
  background-color:teal;
  width:250px;
  height:27px;
font-size:16px;
padding-left:18px;
background-color:#fbfbfb;
}

</style>
