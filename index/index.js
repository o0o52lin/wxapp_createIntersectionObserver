const app = getApp()

Page({
  data: {
    currentId: 'goods',
    navList: [
      {
        id: 'goods',
        name: '商品',
        bgColor: 'rgba(3,169,244, 0.5)'
      },
      {
        id: 'detail',
        name: '详情',
        bgColor: 'rgba(244,67,54, 0.5)'
      },
      {
        id: 'comment',
        name: '评论',
        bgColor: 'rgba(7,193,96, 0.5)'
      }
    ],
    viewport: { top: -235, bottom: -235 }
  },
  onLoad() {
    var viewport = this.data.viewport, viewportArea = {}, currentStr
    viewportArea.left = Math.abs(viewport.left)
    viewportArea.top = Math.abs(viewport.top)
    viewportArea.height = 'calc(100vh - ' + Math.abs(viewport.bottom) + 'px - ' + Math.abs(viewport.top) + 'px)'
    viewportArea.width = 'calc(100vw - 2px)'
    this.setData({
      viewportArea: viewportArea
    })

    this._observer = wx.createIntersectionObserver(this, {observeAll: true})
      .relativeToViewport(viewport).observe('.item', (res) => {
        if (res.id == 'goods') {
          currentStr = res.intersectionRatio > 0 ? '当前为商品区域' : '已离开 商品区域'
        } else if (res.id == 'detail') {
          currentStr = res.intersectionRatio > 0 ? '当前为详情区域' : '已离开 详情区域'
        } else {
          currentStr = res.intersectionRatio > 0 ? '当前为评论区域' : '已离开 评论区域'
        }
        this.setData({
          currentId: res.intersectionRatio > 0 ? res.id : this.data.currentId,
          currentStr: currentStr
        })
      })
  },
  onUnload() {
    if (this._observer) this._observer.disconnect()
  },
  top: function () {
    wx.pageScrollTo({
      scrollTop: 0,
      duration:800
    })
  },
  onPageScroll:function(e){
    this.setData({
      showBackTop: e.scrollTop > 300 ? !0 : !1
    })
  }
})
