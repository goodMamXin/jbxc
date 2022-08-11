<template>
  <div>
    <div class="toolbar">
      <div>xxxx</div>
      <div @click="onShowMenu">
        <icon type="other" size="20" color="#ffffff" />
        菜单
      </div>
    </div>
    <div v-if="showMenu" >
      <div class="toolbar-menu-mask" @click="onCloseMenu"></div>
      <div class="toolbar-menu">
        <ul>
          <li @click="onOpenPersonal" v-show="showPersonal">
            个人中心
          </li>
          <li @click="onOpenWx">
           关注
          </li>
        </ul>
      </div>
    </div>
     <iModal title="关注微信公众号" :visible="modalVisible" :actions="actions" @click="onClose">
      <div style="text-align: left;padding:0 16px;">
        <img src="/static/images/user.png" alt="微信公众号" style="width:100%">
      </div>
    </iModal>
  </div>
</template>

<script>
import iModal from 'iview-mpvue/dist/components/modal/modal'
import icon from 'iview-mpvue/dist/components/icon/icon'

export default {
  props: ['showPersonal'],
  data () {
    return {
      showMenu: false,
      modalVisible: false,
      actions: [
        {
          name: '保存图片',
          color: '#e97f02'
        }
      ]
    }
  },
  components: {
    icon,
    iModal
  },
  methods: {
    onShowMenu () {
      this.showMenu = !this.showMenu
    },
    onCloseMenu () {
      this.showMenu = false
    },
    onOpenPersonal () {
      this.showMenu = false
      mpvue.navigateTo({ url: '/pages/personal/main' })
    },
    onOpenWx () {
      this.showMenu = false
      this.modalVisible = true
    },
    onClose () {
      this.modalVisible = false
      mpvue.saveImageToPhotosAlbum({
        filePath: '/static/images/user.png',
        success () {
          mpvue.showToast({
            title: '保存成功！',
            icon: 'none',
            duration: 2000
          })
        },
        fail () {
          mpvue.showToast({
            title: '保存失败！',
            icon: 'none',
            duration: 2000
          })
        }
      })
    }
  }
}
</script>

<style>
.toolbar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  padding: 16rpx;
  background-color: #ff5757;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  color: white;
  z-index: 10;
}
.toolbar-menu-mask{
  position: absolute;
  top: 76rpx;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 9;
}
.toolbar-menu{
  position: absolute;
  top: 114rpx;
  right: 16rpx;
  background-color: white;
  padding: 18rpx 0;
  border-radius: 5px;
  z-index: 10;
}
.toolbar-menu:before{
  content: '';
  position: absolute;
  top: -28rpx;
  right: 24rpx;
  border-bottom: 28rpx solid white;
  border-top: none;
  border-left: 26rpx solid transparent;
  border-right: 26rpx solid transparent;
}
li{
  position: relative;
  padding: 12rpx 40rpx;
  margin-bottom: 8rpx;
}
li:not(:last-child)::after{
  content: '';
  border-bottom: 1rpx solid #9c9c9c;
  transform: scale(0.5);
  display: inline-block;
  width: 160%;
  position: absolute;
  bottom: -4rpx;
  left: -30%;
}
.i-modal-body{
  max-height: 480rpx;
}
</style>
