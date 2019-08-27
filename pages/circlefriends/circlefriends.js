Page({
  data: {
    list: [
      {
        id: 1,
        name: '小网红',
        img: '../../images/user.png',
        content: '今天天气不错',
        iszan: false,
        time: '2019-1-2'
      },
      {
        id: 2,
        name: '小网红',
        img: '../../images/user.png',
        content: '今天天气不错',
        iszan: false,
        time: '2019-1-2'
      },
      {
        id: 3,
        name: '小网红',
        img: '../../images/user.png',
        content: '今天天气不错，你说呢，你准备飒飒水水水水水水水水水水飒飒飒飒',
        iszan: true,
        time: '2019-1-2'
      },
      {
        id: 4,
        name: '小网红',
        img: '../../images/user.png',
        content:
          'Google 的免费翻译服务可提供简体中文和另外100 多种语言之间的互译功能，可让您即时翻译字词、短语和网页内容。Google 的免费翻译服务可提供简体中文和另外100 多种语言之间的互译功能，可让您即时翻译字词、短语和网页内容。',
        iszan: true,
        time: '2019-1-2'
      },
      {
        id: 5,
        name: '小网红',
        img: '../../images/user.png',
        content: '今天天气不错',
        iszan: true,
        time: '2019-1-2'
      },
      {
        id: 6,
        name: '小网红',
        img: '../../images/user.png',
        content:
          'Google 的免费翻译服务可提供简体中文和另外100 多种语言之间的互译功能，可让您即时翻译字词、短语和网页内容。',
        iszan: false,
        time: '2019-1-2'
      },
      {
        id: 7,
        name: '小网红',
        img: '../../images/user.png',
        content:
          'Google 的免费翻译服务可提供简体中文和另外100 多种语言之间的互译功能，可让您即时翻译字词、短语和网页内容。',
        iszan: true,
        time: '2019-1-2'
      }
    ]
  },
  changeZan: function() {
    wx.showToast({
      title: '谢谢老板的赞！',
      icon: 'success',
      duration: 2000
    })
  },
  comment: function() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  }
})
