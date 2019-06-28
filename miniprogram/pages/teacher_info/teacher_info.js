// miniprogram/pages/teacher_info/teacher_info.js



Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: "张三",
    course: "语文",
    tele: "13212376576",
    mail: "1287318@qq.com",
    office_x: "27幢教学楼",
    office_y: "312",
    lo: '119.640142',
    la: '29.135324'
  },

  showInMap: function () {
    var that=this
    // 使用页面栈修改其他页面数据
    var pages=getCurrentPages();
    var index=pages[pages.length-3];

    // var = [] 默认为指针变量，坑
    index.data.markers[1] = {
      iconPath: "/images/1.png",
      id: 1,
      latitude: that.data.la,
      longitude: that.data.lo,
      width: 25,
      height: 38
    }
    index.setData({
      markers: index.data.markers,
      latitude: that.data.la,
      longitude: that.data.lo,
    })

    console.log("(from teacher) marker个数：" + index.data.markers.length)

    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  // pages.teacher_info.teacher_info?name=张三&&course=语文&&tele=13212376576&&mail=1287318@qq.com&&office_x=27幢教学楼&&office_y=312&&lo=119.640142&&la=29.135324
  onLoad: function (options) {
    var that = this;
    that.setData({
      name: options.name,
      course: options.course,
      tele: options.tele,
      mail: options.mail,
      office_x: options.office_x,
      office_y: options.office_y,
      lo: options.lo,
      la: options.la
    })
    console.log(that.data)
  }
})