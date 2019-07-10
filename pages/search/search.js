var app = getApp();
Page({
  data: {
    searchVal: '',
    searchResult: '',
    describe: '',
    hasResult: false,
    showDescribe: false,
  },
  onLoad: function(options) {
    if (typeof options.search != "undefined") {
      this.setData({
        searchVal: options.search
      });
      this.searchKey(options.search);
    }
  },
  inpSearch(e) {
    this.setData({
      searchVal: e.detail.value,
      hasResult: false
    })
  },
  searchKey(e) {
    let that = this;
    wx.request({
      url: app.globalData.baseUrl + '/api/rubbish_sort?keywords=' + this.data.searchVal,
      success: function(res) {
        if (res.data.code == 0) {
          that.setData({
            searchVal:res.data.data[0].name,
            searchResult: res.data.data[0].type,
            showDescribe: false,
            hasResult: true
          })
        } else {
          that.setData({
            searchResult: '外星物种',
            describe: '是指我无法识别的物种、主要包括我的大脑中没有记忆的未来生物，你好厉害！',
            showDescribe: true,
            hasResult: true
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