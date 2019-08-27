Page({
  data: {
    show: false,
    actions: [
      {
        name: '颜色',
        list: [
          {
            id: 1,
            text: '深青色'
          },
          {
            id: 2,
            text: '紫蓝渐变'
          },
          {
            id: 3,
            text: '白色'
          }
        ]
      },
      {
        name: '版本',
        list: [
          {
            id: 1,
            text: '6+64G'
          },
          {
            id: 2,
            text: '6+128G'
          }
        ]
      }
    ],
    imgUrls: [
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-01.jpg',
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-03-1.jpg',
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-10-1.jpg'
    ],
    description:
      '白色恋人的清新，仿佛是手中的一捧盈盈白雪，纯净天成|神秘的深蓝星球，微光滑过便如星河般耀目生辉|还有深沉的暗夜王子，光线之下难掩锋芒|三款配色，汇聚于3D全曲面玻璃机身之上，搭配高亮金属质感中框|温润触感款款心仪。'
  },
  addShopCart: function() {
    this.setData({
      show: true
    })
  },
  onClose: function() {
    this.setData({ show: false })
  },
  onSelect(event) {
    console.log(event.detail)
  },
  navigatorTo(){
    wx.switchTab({
      url: "../shopCart/shopCart",
      success: () => {
        console.log(123)
      },
      fail: (e) => {
        console.log(e)
      }
    })
  }
})
