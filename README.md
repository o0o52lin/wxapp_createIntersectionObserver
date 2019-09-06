# wxapp_createIntersectionObserver
createIntersectionObserver的使用demo

# 代码
<pre><code>
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
</code></pre>
![Alt text](https://raw.githubusercontent.com/o0o52lin/wxapp_createIntersectionObserver/master/imgs/1.png)
![Alt text](https://raw.githubusercontent.com/o0o52lin/wxapp_createIntersectionObserver/master/imgs/2.png)

代码片段地址: [https://developers.weixin.qq.com/s/7ljaHbm87Rbd](https://developers.weixin.qq.com/s/7ljaHbm87Rbd)
