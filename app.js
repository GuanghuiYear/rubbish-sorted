App({
  globalData: {
    userInfo: null,
    baseUrl: 'https://xcx.ckxstudy.com'
  },
  onLaunch: function() {
    // this.login();
  },
  showSuccess: function(message) {
    wx.showToast({
      title: message,
      duration: 2000,
      // image: "/images/Common/Success.png",
    })
  },
  showError: function(message) {
    wx.showToast({
      title: message,
      duration: 2000,
      // image: "/images/Common/Error.png",
    })
  },
  startOperating: function(info) {
    wx.showLoading({
      title: info,
      mask: true
    })
  },
  stopOperating: function() {
    wx.hideLoading();
  },

  login: function() {
    var that = this;
    wx.login({
      success: function(e) {
        wx.request({
          url: that.globalData.baseUrl + '/my/my',
          data: {
            code: e.code
          },
          success: function(res) {
            if (res.data.code == 10000) {
              that.globalData.openId = res.data.openid;
              return;
            }
            if (res.data.code != 0) {
              // 登录错误
              wx.hideLoading();
              wx.showModal({
                title: '提示',
                content: '无法登录，请重试',
                showCancel: false
              })
              return;
            }
            that.globalData.openId = res.data.openid;
          }
        })
      },
      fail: function() {
        wx.showModal({
          title: '提示',
          content: '无法登录，请重试',
          showCancel: false
        })
        that.globalData.isLogin = false;
      }
    })
  }
})