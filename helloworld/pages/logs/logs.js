//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: []
  },
  onLoad: function () {
    console.log('log onload');
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  },
  onShow: function() {
    console.log('log onshow');
  },
  onReady: function() {
    console.log('log onready');
  },
  onHide: function() {
    console.log('log onhide');
  },
  onUnload: function() {
    console.log('log onunload');
  }
})
