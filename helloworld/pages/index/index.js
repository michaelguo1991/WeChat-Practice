//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    username: 'michael guo 1991'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('index onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  changeText: function() {
    this.setData({username: 'guo'});
  },
  onShow: function() {
    console.log('index onshow');
  },
  onReady: function() {
    console.log('index onready');
  },
  onHide: function() {
    console.log('index onhide');
  },
  onUnload: function() {
    console.log('index onunload');
  }
})
