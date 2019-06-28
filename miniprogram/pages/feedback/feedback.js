const app = getApp()
Page({
  data: {
    context: '',
    empty: 1
  },

  formSubmit: function (e) {
    var that = this;
    if (this.data.empty == 1) {     //如果文本框内容为空，则跳出提示
      wx: wx.showToast({
        title: '内容不能为空!',
        duration: 2000,
        image: "/images/cant.png"
      })
      return false
    }
    else {   //如果不为空，跳出提示框
      wx.showModal({
        title: '提示',
        content: '是否提交你的反馈意见？',
        success(res) {
          if (res.confirm) {
            wx: wx.showToast({
              title: '提交成功!',
              icon: true,
              duration: 800,
            })
            // 返回父页面
            setTimeout(function () {
              wx.navigateBack({
                delta:1
              })
            }, 1000)

          }
          else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })


    }
  },
  // 字符变动
  charChange: function (e) {
    this.setData({
      context: e.detail.value
    })
    var that = this;
    setTimeout(function () {
      if (e.detail.value.length > 0) {
        that.setData({
          empty: 0
        })
        console.log("res: " + that.data.empty)
      } else {
        that.setData({
          empty: 1
        })
        console.log("res: " + that.data.empty)
      }
    }, 300)
  }

})
