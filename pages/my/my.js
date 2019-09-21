var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    nickName: '小卫士',
    avatarUrl: '/images/head.jpg',
    is_login: false
  },
  onLoad: function(options) {
    this.myInfo();
  },
  register(result) {
    console.log(result);
    if (result.detail.errMsg == 'getUserInfo:ok') {
      var that = this;
      wx.login({
        success: function(t) {
          let code = t.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
          util.httpPost(getApp().globalData.baseUrl + '/login/UpdateUserInfo', {
              code: code,
              openId: app.globalData.openId,
              encryptedData: result.detail.encryptedData,
              iv: result.detail.iv,
              signature: result.detail.signature,
              rawData: result.detail.rawData
            },
            function(res) {
              if (res.code == 0) {
                wx.showModal({
                  title: '提示',
                  content: res.info,
                  showCancel: false,
                  success: function() {
                    that.myInfo();
                  }
                })
              } else {
                wx.showToast({
                  icon: 'none',
                  title: res.info,
                  duration: 2000,
                  mask: true
                });
                return false;
              }
            })
        }
      })
    }
  },
  myInfo: function () {
    var that = this;
    util.httpPost(getApp().globalData.baseUrl + '/User/index', {
      openid: getApp().globalData.openId
    }, function (res) {
      if (res.code == 0) {
        if (res.userInfo.head_pic) {
          that.setData({
            nickName: res.userInfo.nickname,
            avatarUrl: res.userInfo.head_pic,
            is_login: true
          })
        }
      }
    })
  },

})