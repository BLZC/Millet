import { VantComponent } from '../common/component'
import { safeArea } from '../mixins/safe-area'
const app = getApp()
VantComponent({
  data: {
    hoverClass: 'van_item_hover',
    vid: null,
    canSubmit: false,
    Selected: '深青色 6+64G',
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
    ]
  },
  mixins: [safeArea()],
  props: {
    show: Boolean,
    title: String,
    cancelText: String,
    zIndex: {
      type: Number,
      value: 100
    },
    // actions: {
    //   type: Array,
    //   value: []
    // },
    overlay: {
      type: Boolean,
      value: true
    },
    closeOnClickOverlay: {
      type: Boolean,
      value: true
    }
  },
  methods: {
    onSelect(event) {
      const { index } = event.currentTarget.dataset
      const item = this.data.actions[index]
      if (item && !item.disabled && !item.loading) {
        this.$emit('select', item)
      }
    },
    add() {
      console.log('111111111111111')
    },
    onLoad() {
      console.log(11234)
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
      console.log(propertyChildIds, propertyChildNames)
      this.setData({
        actions: that.data.actions,
        canSubmit: canSubmit,
        Selected: propertyChildNames
      })
    },
    onCancel() {
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
      this.$emit('close')
      wx.showToast({
        title: '已添加到购物车',
        icon: 'success',
        duration: 500
      })
    },
    onClose() {
      this.$emit('close')
    }
  }
})
