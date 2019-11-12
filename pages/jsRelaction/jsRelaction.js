const app = getApp()
const info = app.globalData.info

console.log(info)


// pages/jsRelaction/jsRelaction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name: "zhangsan",
    isShow: true,
    list: [
      { name: "lisi", age: 29 },
      { name: "wangwu", age: 33 },
      { name: "zhaooliu", age: 11 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  btn() {
    this.setData({ isShow: !this.data.isShow })
  },
  componFunc(e) {
    console.log(e)
  }
})
