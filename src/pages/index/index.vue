<template>
  <div class="index">
    <toolbar :showPersonal="true"></toolbar>
    <div class="header">
      <img src="/static/images/bg1.png" alt="header" style="width:100%" >
    </div>
    <div class="content" v-if="getData">
      <div v-if="hasPermission">
        <p style="font-size:18px;" class="mb-md">你有一个现金红包待领取</p>
        <iButton open-type="getUserInfo" @getuserinfo="onGetuserinfo" type="ghost" shape="circle">领取</iButton>
        <!-- <iButton @click="onGain" type="ghost" shape="circle">领取</iButton> -->
      </div>
      <div v-if="!hasPermission">
        <p style="font-size:18px;" class="mb-md">
          <icon type="prompt" size="28" color="#ffffff" />
          活动已结束
        </p>
        <p style="font-size:14px;">请关注后续更多活动</p>
        <p style="font-size:14px;">您可在参与记录中查看已参加的活动</p>
        <iButton @click="onOpenRecord" type="ghost" shape="circle">参与记录</iButton>
      </div>
    </div>
    <p class="rule mt-md mb-md" @click="onOpenModal">活动说明</p>
    <img src="/static/images/footer.png" alt="footer" style="width:100%" >
    <iModal title="活动说明" :visible="modalVisible" :actions="actions" @click="onClose">
      <div style="text-align: left;padding:0 16px;">
        <h5>活动有效期：</h5>
        <p>2021-02-01 09:00 至 2021-02-01 23:00</p>
        <h5>活动发行方：</h5>
        <p>xxxxx</p>
      </div>
    </iModal>
  </div>
</template>

<script>
import toolbar from '@/components/toolbar'
import iModal from 'iview-mpvue/dist/components/modal/modal'
import icon from 'iview-mpvue/dist/components/icon/icon'
import iButton from 'iview-mpvue/dist/components/button/button'
import {ApiService} from '@/utils/api'

export default {
  data () {
    return {
      getData: true,
      hasPermission: true,
      modalVisible: false,
      actions: [
        {
          name: '确定',
          color: '#e97f02'
        }
      ]
    }
  },
  components: {
    toolbar,
    iModal,
    icon,
    iButton
  },
  methods: {
    onClose (ev) {
      this.modalVisible = false
    },
    onOpenModal () {
      this.modalVisible = true
    },
    onOpenRecord () {
      mpvue.navigateTo({ url: '/pages/record/main' })
    },
    onGetuserinfo (e) {
      console.log(e)
    },
    onGain () {

    }
  },
  created () {
    ApiService.login().then(res => {
      console.log(res)
    }, err => {
      console.log(err)
    })
    mpvue.login({
      success: (res) => {
        console.log(res)
      },
      fail: (res) => {
        console.log(res)
      }
    })
  }
}
</script>

<style scoped>
.mt-md{
  margin-top:32rpx;
}
.mb-md{
  margin-bottom:32rpx;
}
.index{
  padding:74rpx 0 0 0;
  background-color:#d84a32;
}
.header{
  margin:0 auto;
  width:340px
}
.content{
  padding: 48rpx 32rpx;
  margin: 32rpx;
  background-color: rgba(255, 80, 109, 0.51);
  border-radius:5px;
  color:white;
  text-align: center;
}
.rule{
  color:white;
  text-align: center;
  text-decoration: underline;
}

@media screen and (max-width: 320px) {
  .header{
    margin:0 auto;
    width:320px
  }
}
</style>
