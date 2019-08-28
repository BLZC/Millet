Page({
  data: {
    show: false,
    zIndex: 100,
    overlay: true,
    safeAreaInsetBottom: true,
    closeOnClickOverlay: true,
    goodsNumber: null,
    cancelText: '确定',
    hoverClass: 'van_item_hover',
    canSubmit: false,
    Selected: '',
    actions: [
      {
        id: 0,
        name: '颜色',
        list: [
          {
            id: 0,
            text: '深青色',
            active: true
          },
          {
            id: 1,
            text: '紫蓝渐变'
          },
          {
            id: 2,
            text: '白色'
          }
        ]
      },
      {
        id: 1,
        name: '版本',
        list: [
          {
            id: 0,
            text: '6+64G',
            active: true
          },
          {
            id: 1,
            text: '6+128G'
          }
        ]
      }
    ],
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
    ],
    imgUrls: [
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-01.jpg',
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-03-1.jpg',
      'https://i1.mifile.cn/f/i/16/chain/shouhuan4/shouhuan4-10-1.jpg'
    ],
    description:
      '白色恋人的清新，仿佛是手中的一捧盈盈白雪，纯净天成|神秘的深蓝星球，微光滑过便如星河般耀目生辉|还有深沉的暗夜王子，光线之下难掩锋芒|三款配色，汇聚于3D全曲面玻璃机身之上，搭配高亮金属质感中框|温润触感款款心仪。'
  },
  onLoad() {
    this.getGoodsNumber()
    this.InitSelect()
  },
  InitSelect() {
    let actions = this.data.actions
    if (actions && actions.length && actions) {
      actions.forEach(element => {
        if (element.list[0].text) {
          this.data.Selected += element.list[0].text + ' '
        }
      })
      this.setData({ Selected: this.data.Selected })
    }
  },
  addShopCart: function() {
    this.setData({
      show: true
    })
  },
  getGoodsNumber() {
    let Num = wx.getStorageSync('goodsNumber')
    if (Num) {
      this.setData({ goodsNumber: Num })
    } else {
      this.setData({ goodsNumber: null })
    }
  },
  onClose() {
    this.setData({ show: false })
    this.getGoodsNumber()
  },
  onSelect(event) {
    console.log(event.detail)
  },
  addclass(e) {
    let that = this
    // 取消该分类下的子栏目所有的选中状态
    let childs = that.data.actions[e.currentTarget.dataset.parentid].list
    for (let i = 0; i < childs.length; i++) {
      childs[i].active = false
    }
    // 设置当前选中状态
    childs[e.currentTarget.dataset.id].active = true
    // 获取所有的选中规格尺寸数据
    let needSelectNum = that.data.actions.length
    let curSelectNum = 0
    let propertyChildIds = ''
    let propertyChildNames = ''
    for (let i = 0; i < needSelectNum; i++) {
      let vchilds = that.data.actions[i].list
      for (let j = 0; j < vchilds.length; j++) {
        if (vchilds[j].active) {
          curSelectNum++
          propertyChildIds =
            propertyChildIds +
            that.data.actions[i].id +
            ':' +
            vchilds[j].id +
            ','
          propertyChildNames = propertyChildNames + vchilds[j].text + ' '
        }
      }
    }
    let canSubmit = false
    if (needSelectNum == curSelectNum) {
      canSubmit = true
    }
    this.setData({
      actions: that.data.actions,
      canSubmit: canSubmit,
      Selected: propertyChildNames
    })
  },
  addToShop() {
    //购物车总商品数量
    let Num = wx.getStorageSync('goodsNumber')
    if (Num) {
      wx.setStorage({
        key: 'goodsNumber',
        data: ++Num
      })
    } else {
      wx.setStorage({
        key: 'goodsNumber',
        data: 1
      })
    }
    //添加具体商品信息到购物车
    wx.setStorage({
      key: 'goodsDetail',
      data: this.data.lists
    })

    this.onClose()
    wx.showToast({
      title: '已添加到购物车',
      icon: 'success',
      duration: 500
    })
  },
  navigatorTo() {
    wx.switchTab({
      url: '../shopCart/shopCart',
      success: () => {
        console.log(123)
      },
      fail: e => {
        console.log(e)
      }
    })
  }
})
