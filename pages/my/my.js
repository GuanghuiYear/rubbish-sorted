Page({
  data: {
    hasUserInfo:false,
    nickName:'小卫士',
    avatarUrl:'/images/head.png'
  },
  onLoad: function (options) {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res);
        that.setData({
          nickName: res.userInfo.nickName,
          avatarUrl: res.userInfo.avatarUrl,
        })
      },
    })
  },
  register(e){
    console.log(e);
  }
  
})