var app = getApp();
Page({
  data: {
    searchVal: '',
    searchResult: '',
    describe: '',
    hasResult: false,
    showDescribe: false,
    typeImg: '',
    showTypeMask: false,
    hasdata:false
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
      // hasResult: false,
      hasdata: false
    })
  },
  searchKey(e) {
    if (this.data.searchVal != "") {
      let that = this;
      wx.showLoading({
        title: '加载中',
      })
      wx.request({
        url: app.globalData.baseUrl + '/api/rubbish_sort?keywords=' + this.data.searchVal,
        success: function(res) {
          wx.hideLoading();
          if (res.data.code == 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].type == '有害垃圾') {
                res.data.data[i].img = '/images/hazardous.png'
              } else if (res.data.data[i].type == '干垃圾') {
                res.data.data[i].img = '/images/residual.png'
              } else if (res.data.data[i].type == '可回收物') {
                res.data.data[i].img = '/images/recyclable.png'
              } else {
                res.data.data[i].img = '/images/household.png'
              }
            }
            that.setData({
              searchArr: res.data.data,
              showDescribe: false,
              hasResult: true,
              hasdata:true
            })
          } else {
            that.setData({
              searchResult: '外星物种',
              describe: '是指我无法识别的物种、主要包括我的大脑中没有记忆的未来生物，你好厉害！',
              showDescribe: true,
              hasResult: false,
              hasdata: true
            })
          }
        }
      })
    }
  },
  toKnowledge() {
    wx.switchTab({
      url: '/pages/konwledge/konwledge',
    })
  },
  showType(e) {
    this.setData({
      typeImg: e.currentTarget.dataset.img,
      showTypeMask: true
    });
  },
  controlTypeMask() {
    this.setData({
      showTypeMask: false
    })
  }
})