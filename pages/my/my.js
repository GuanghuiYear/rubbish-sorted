var util = require('../../utils/util.js');
var app = getApp();
Page({
  data: {
    hasUserInfo: false,
    nickName: '小卫士',
    avatarUrl: '/images/head.png'
  },
  onLoad: function(options) {

    var that = this;
    wx.getUserInfo({
      success: function(res) {
        console.log(res);
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      },
    })
  },

  register(result) {
    if (result.detail.errMsg == 'getUserInfo:ok') {
      var that = this;
      wx.login({
        success: function(t) {
          let code = t.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到


          util.httpPost(getApp().globalData.baseUrl + '/login/UpdateUserInfo', {
              code: code,
              openId: getApp().globalData.openId,
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
                    // that.userCenter();
                  }
                })
              } else {
                wx.showToast({
                  image: '/images/icon/infor_fail.png',
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
  }

})