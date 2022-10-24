<template>
  <div id="sign">
    <img class="logo" src="@/assets/logo-white.png" />
    <img class="text_01" src="@/assets/text_01_white.png" />
    <img class="people" src="@/assets/people_sign.png" />
    <div class="card">
      <div class="sign_title">
        <div class="border"></div>
        <span class="title">活动登记信息</span>
        <span class="remark">您填写的信息仅用于参赛登记，不会公开</span>
      </div>
      <Form class="sign_form" label-width="62px" @submit="onSubmit" :show-error-message=false>
        <Field class="input" label-class="input_label" v-model="username" name="username" label="姓名" placeholder="请输入姓名"
          required :rules="[{ required: true, message: '请输入姓名' }]" />
        <Field class="input" v-model="mobile" type="tel" name="mobile" label="电话" placeholder="请输入电话" required
          :rules="[{ required: true, message: '请输入电话' }]" />
        <Field class="input" readonly required clickable name="province" label="省份" :value="province"
          :rules="[{ required: true, message: '请选择省份' }]" placeholder="选择省份" @click="provinceShowPicker = true" />
        <Popup v-model="provinceShowPicker" round position="bottom">
          <Picker show-toolbar :columns="provinceColumns" @cancel="provinceShowPicker = false"
            @confirm="onProvinceConfirm" />
        </Popup>
        <Field class="input" readonly required clickable name="city" label="城市" :value="city" placeholder="选择城市"
          :rules="[{ required: true, message: '请选择城市' }]" @click="cityShowPicker = true" />
        <Popup v-model="cityShowPicker" round position="bottom">
          <Picker show-toolbar :columns="cityColumns" @cancel="cityShowPicker = false" @confirm="onCityConfirm" />
        </Popup>
        <Field class="input" v-model="hospital" type="hospital" name="hospital" label="医院" placeholder="请输入医院名称（全称）"
          required :rules="[{ required: true, message: '请输入医院名称（全称）' }]" />
        <Field class="input sms" name="sms" label-width="103px" v-model="sms" center clearable label="短信验证码"
          :rules="[{ required: true, message: '请输入医院名称（全称）' }]" placeholder="请输入短信验证码">
          <template #button>
            <Button size="small" type="primary" @click="sendSms">发送验证码</Button>
          </template>
        </Field>
        <div id="buttonView" class="buttonView">
          <img class="btn" src="@/assets/btn-home.png" />
          <button class="link" form-type="submit" native-type="submit">提交登记</button>
        </div>


      </Form>
    </div>
    <img class="text_02" src="@/assets/text_02_white.png" />
  </div>
</template>
<script>
import { Form, Button, Field, Picker, Popup } from 'vant'
import 'vant/lib/index.css'

export default {
  name: 'sign',
  components: { Button, Form, Field, Picker, Popup },
  data() {
    return {
      username: '',
      mobile: '',
      province: '',
      city: '',
      hospital: '',
      sms: '',
      provinceShowPicker: false,
      cityShowPicker: false,
      provinceColumns: this.get_province_list().then(res => {
        if (res.data) {
          return []
        } else {
          return []
        }
      }),
      cityColumns: ['嘉兴', '金华', '衢州'],

    }
  },

  watch: {

  },
  methods: {
    onProvinceConfirm(value) {
      this.province = value
      this.provinceShowPicker = false
    },
    onCityConfirm(value) {
      this.city = value
      this.cityShowPicker = false
    },
    onSubmit(values) {
      console.log('submit', values)
      // this.sign_up()
    },
    sendSms() {
      console.log(this.mobile, '验证码')
    }
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
  width: 207px;
	height: 224px;
}

.text_01 {
  position: absolute;
  left: 32px;
  top: 121px;
  width: 132px;
	height: 72px;
}

.text_02 {
  position: absolute;
  left: 26px;
  bottom: 25px;
  width: 139px;
	height: 46px;
}


.card {
  position: absolute;
  top: 221px;
  width: 352px;
	height: 407px;
  box-shadow: 4px 3px 4px 0px rgba(1, 31, 30, 0.23);
  background-color: #fff;
  border-radius: 10px;
  padding: 20px 15px;
  box-sizing: border-box;

}
.sign_title {
  position:absolute;
  top:15px;
  left:12px;
  display: flex;
  line-height:19px;
  border-bottom: 2px solid rgba(236, 236, 236, .2);
}
.title {
  width: 100px;
  font-family: SourceHanSansCN-Bold;
  font-size: 16px;
  color: #1eab3c;
}

.remark {
  font-family: SourceHanSansCN-Medium;
  font-size: 12px;
  color: #898989;
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
  top: 50px;
  width: 312px;
}

.buttonView {
  position: relative;
  text-align: center;
  margin-top:26px;
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
  width:250px;
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
    width:40px;
    line-height:27px;
  }
}

.input{
  padding-left:0;
}
.input{
  :global{
    .van-field__body{
      background-color:pink;
    }
  }
}
.input::before{
  position: absolute;
    left:35px;
    bottom:8px;
    color: #ee0a24;
    font-size: 0.37333rem;
    content: '*';
}

.sms{
  padding-right:0;
}
.sms::before{
  position: absolute;
    left:75px;
    bottom:12px;
    color: #ee0a24;
    font-size: 0.37333rem;
    content: '*';
}

.input::after{
  position: absolute;
  box-sizing: border-box;
  content: ' ';
  pointer-events: none;
  right:0;
  bottom: 0;
  left: 0;
  border-bottom:3px solid rgba(236,236,236,.2);
}
</style>
