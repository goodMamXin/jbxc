<template>
  <div class="index">
    <iCard title="卡片标题" extra="额外内容" thumb="https://i.loli.net/2017/08/21/599a521472424.jpg">
    <view slot="content">内容不错</view>
    <view slot="footer">尾部内容</view>
    </iCard>
  </div>
</template>

<script>
import iCard from 'iview-mpvue/dist/components/card/card'

export default {
  data () {
    return {
      data: [

      ]
    }
  },
  components: {
    iCard
  },
  methods: {

  },
  created () {
  }
}
</script>

<style scoped>
.index{
  padding:48rpx 0 0 0;
}
</style>
