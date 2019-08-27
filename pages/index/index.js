const app = getApp()

Page({
  data: {
    imgUrls: [
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cbfe536492a89e756abcca98652c9bb.jpg?w=2452&h=920',
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a1f0eb196c6c65a89ffba6efa4b5679c.jpg?w=2452&h=920',
      'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/cefed8336bae62768afeeb6a3b8f55c8.jpg?w=2452&h=920'
    ],
    navList: [
      {
        id: 1,
        name: '每日新品',
        imgUrl: '../../images/xinpin.png'
      },
      {
        id: 3,
        name: '现时限购',
        imgUrl: '../../images/zhineng.png'
      },
      {
        id: 4,
        name: '热销榜单',
        imgUrl: '../../images/dianshi.png'
      },
      {
        id: 5,
        name: '随便逛逛',
        imgUrl: '../../images/iphone.png'
      }
    ],
    ypList: [
      {
        id: 1,
        number: null,
        price: '3599',
        description: '俊龙855 索尼4800万三摄',
        title: '小米9 王源限量版',
        linkUrl: '/pages/detail/detail',
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a7f616f2e931d6433f36fb356693c3d1.jpg'
      },
      {
        id: 2,
        number: null,
        price: '2599',
        description: 'DxO百分拍照手机',
        title: '小米MIX 3 8GB+128GB',
        linkUrl: '/pages/detail/detail',
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/411d540271f6efbdd882fa33daee0de3.jpg'
      },
      {
        id: 3,
        number: null,
        price: '2599',
        description: '8GB+256GB，100%美图相机',
        title: '小米CC9 8GB+256GB 美图定制版',
        linkUrl: '/pages/detail/detail',
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/98b6d5e894ffed368c8bd316358702d5.jpg'
      },
      {
        id: 4,
        number: null,
        price: '1299',
        description: '3200万自拍，4800万三摄',
        title: '小米CC9e',
        linkUrl: '/pages/detail/detail',
        imgUrl:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/80e162c89662636b1e06402ede5bf530.jpg'
      }
    ],
    bottomText: '更多产品请下载小米有品app',
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})
