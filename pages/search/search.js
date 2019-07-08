var app=getApp();
Page({
  data: {
    searchVal: '',
    searchResult: '',
    describe:'',
    hasResult:false
  },
  onLoad: function(options) {
    // console.log(options);
    let that = this;
    this.setData({
      searchVal: options.search
    });
    wx.request({
      url: app.globalData.baseUrl + '/api/rubbish_sort?keywords=' + options.search,
      success: function(res) {
        that.setData({
          hasResult:true
        })
        console.log(res, res.data.data[0])
        if (res.data.code == 0) {
          that.setData({
            searchResult: res.data.data[0].type
          })
        } else {
          that.setData({
            searchResult: '外星物种',
            describe:'是指我无法识别的物种、主要包括我的大脑中没有记忆的未来生物，你好厉害！'
          })
        }        
      }
    })
  },
  toKnowledge() {
    wx.navigateTo({
      url: '/pages/konwledge/konwledge',
    })
  },

})