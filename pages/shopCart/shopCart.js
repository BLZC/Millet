Page({
  data: {
    radio: '1',
    lists: [
      {
        img:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
        title: '小米9 全网通版 8GB内存 全息幻彩 蓝 256GB',
        number: 1,
        price: 3299,
        children: [
          { ptitle: '服务', pcontent: '意外保护129元起' },
          { ptitle: '服务', pcontent: '意外保护129元起' },
          { ptitle: '服务', pcontent: '意外保护129元起' }
        ]
      },
      {
        img:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
        title: '小米9 全网通版 8GB内存 全息幻彩 蓝 256GB',
        number: 1,
        price: 3299,
        children: [{ ptitle: '服务', pcontent: '意外保护129元起' }]
      },
      {
        img:
          'https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg',
        title: '小米9 全网通版 8GB内存 全息幻彩 蓝 256GB',
        number: 1,
        price: 3299,
        children: [{ ptitle: '服务', pcontent: '意外保护129元起' }]
      }
    ]
  },
  onChange(event) {
    this.setData({
      checked: event.detail
    })
  }
})
