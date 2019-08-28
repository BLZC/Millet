import Dialog from '../../miniprogram_npm/vant-weapp/dialog/dialog'
Page({
  data: {
    radio: '1',
    lists: []
  },
  onShow() {
    let List = wx.getStorageSync('goodsDetail')
    console.log(List)
    this.setData({
      lists: List
    })
  },
  onChange(event) {
    this.setData({
      checked: event.detail
    })
  },
  Xgou() {
    Dialog.alert({
      title: '标题',
      message: '弹窗内容'
    }).then(() => {
      // on close
    })
  },
  Delete() {
    Dialog.alert({
      title: '删除',
      message: '弹窗内容'
    }).then(() => {
      // on close
    })
  }
})
