<template>
  <div>
    <toolbar :showPersonal="false"></toolbar>
    <div class="user">
      <img src="/static/images/bg3.jpg" alt="header" style="width:100%;height:260px" >
      <div class="avatar">
        <div class="img">
          <open-data type="userAvatarUrl"></open-data>
        </div>
        <p><open-data type="userNickName"></open-data></p>
      </div>
    </div>
    <div class="content">
      <iCellGroup>
        <iCell title="活动参与记录" is-link="true" url="/pages/record/main">
        <view slot="icon"> <icon type="activity" size="22" color="#424242" /></view></iCell>
      </iCellGroup>
    </div>
  </div>
</template>

<script>
import iCellGroup from 'iview-mpvue/dist/components/cell-group/cell-group'
import iCell from 'iview-mpvue/dist/components/cell/cell'
import toolbar from '@/components/toolbar'
import icon from 'iview-mpvue/dist/components/icon/icon'

export default {
  components: {
    toolbar,
    iCellGroup,
    iCell,
    icon
  },
  data () {
    return {

    }
  },

  created () {

  }
}
</script>

<style scoped>
.user{
  position: relative;
}
.avatar{
  position: absolute;
  top: 30%;
  left: 50%;
  margin-left: -40px;
  font-size: 32rpx;
  text-align: center;
  color: #f6f6f6;
}
.avatar > image {
  width: 130rpx;
  height: 130rpx;
  border-radius: 50px;
}
.img{
  width: 80px;
  height: 80px;
  margin-bottom: 12rpx;
  border-radius: 50px;
  overflow: hidden;
}
.content{
  position: relative;
  top:-55rpx;
}
</style>
