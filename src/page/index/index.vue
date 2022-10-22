<template>
  <div id="index">
    <img class="logo" src="@/assets/log.png" />
    <img class="people" src="@/assets/people.png" />
    <img class="bottom" src="@/assets/bottom.png" />
    <div class="text">
      <img class="text_01" src="@/assets/text_01.png" />
      <img class="text_02" src="@/assets/text_02.png" />

    </div>
    <div class="btns">
      <div class="btn-link">
        <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">活动报名</router-link>
      </div>

      <div class="btn-link">
        <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">活动规则</router-link>
      </div>
      <div class="btn-link">
        <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">知识竞答</router-link>
      </div>
      <div class="btn-link">
        <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">视频征集</router-link>
      </div>
      <div class="btn-link">
        <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">积分排名</router-link>
      </div>
    </div>
    <!--
    <div class="btns">
      <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">活动报名</router-link>
    </div>

    <div class="btns">
      <img class="btn" src="@/assets/btn-home.png" />
        <router-link class="link" :to="{name:'sign'}">活动报名</router-link>
    </div> -->

    <img class="map" src="@/assets/map.png" />
  </div>
</template>
<script>

export default {
  components: {},
  methods: {

  },
  created() {

  }
}
</script>
<style lang='stylus'  scoped >
#index {
  position: relative;
  padding:20px 25px;
  width:100%;
  height:100%;


.logo {
  width: 125px;
	height: 38px;
}
.people{
  position: absolute;
  top:47px;
  right:0;
  width: 330px;
  height: 359px;
}
.bottom{
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
}

.text_01 {
  width: 150px;
  height: 78px;
}

.text_02 {
  margin-top: 24px;
  width: 211px;
  height: 69px;
}

.text {
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 343px;
  left: 31px;
}



.map {
  position: absolute;
  bottom: 38px;
  left: 26px;
  width: 180px;
  height: 108px;
}

.btns {
  position: absolute;
  top: 420px;
  right:42px;
}
.btn-link{
  position: relative;
  width: 82px;
  height: 25px;
  margin-bottom: 25px;
}
.btn {
  display: block;
  width: 82px;
  height: 25px;
}
.link{
  position: absolute;
  top: 0;
  width: 82px;
  height: 25px;
  text-align: center;
  font-size:16px;
  color: #fff;
  line-height: 25px;
  z-index: 1;
  border:0;
  background-color: transparent;
}
}

</style>
