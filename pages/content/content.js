Page({
  data: {
    tabList: [
      {
        id: 1,
        title: '新品推荐',
        content: '1111'
      },
      {
        id: 2,
        title: '热卖榜单',
        content: '1111'
      },
      {
        id: 3,
        title: '空调/风扇',
        content: '1111'
      },
      {
        id: 4,
        title: '清洁电器',
        content: '1111'
      },
      {
        id: 5,
        title: '洗衣机',
        content: '1111'
      },
      {
        id: 6,
        title: '厨房小电',
        content: '1111'
      },
      {
        id: 7,
        title: '卫浴电器',
        content: '1111'
      }
    ]
  },
  onLoad: function(options) {
    this.setData({ content: options.content })
  }
})
