
Page({
  data: {
    wxSearchData: '', // 输入的值
    result: [], // 所有结果
    location: [],
    teacher: [],
    start: "地点",
    slist: [{
        id: 1,
        name: "地点"
      },
      {
        id: 1,
        name: "教师"
      },
    ],
    isstart: false,
    openimg:'/images/up.png',
    offimg:'/images/down.png'
  },

  onLoad: function () {
    wx.showLoading({
      title: 'Loading~',
    })
    var that = this;
    wx.cloud.callFunction({
      name: 'search_teacher',
      complete: res => {
        that.setData({
          teacher: res.result.data
        })
        console.log("云端获取teacher数量："+this.data.teacher.length)
        that.image_tap()
      },
    })   
    wx.cloud.callFunction({
      name: 'search_location',
      complete: res => {
        that.setData({
          location: res.result.data
        })
        console.log("云端获取location数量：" + this.data.location.length)

        // 百度的坐标转为腾讯
        var len = that.data.location.length;
        console.log("Len is " + len);
        for (var i = 0; i < len; i++) {
          let lng = that.data.location[i].lo;
          let lat = that.data.location[i].la;
          let x_pi = (3.14159265358979324 * 3000.0) / 180.0;
          let x = lng - 0.0065;
          let y = lat - 0.006;
          let z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
          let theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
          let lngs = z * Math.cos(theta);
          let lats = z * Math.sin(theta);
          that.data.location[i].lo = lngs;
          that.data.location[i].la = lats;
        }
        that.setData({
          location: that.data.location
        })

        that.image_tap()
      },
    })

    

    wx.hideLoading()
  },

  // 下拉
  opens: function (e) {
    switch (e.currentTarget.dataset.item) {
      case "1":
        if (this.data.isstart) {
          this.setData({
            isstart: false,
          });
        } else {
          this.setData({
            isstart: true,
          });
        }
        break;
    }
  },
  // 改变搜索项 并清空内容
  onclicks1: function (e) {
    var index = e.currentTarget.dataset.index;
    let name = this.data.slist[index].name;
    this.setData({
      isstart: false,
      isfinish: false,
      isdates: false,
      start: this.data.slist[index].name
    })
    this.image_tap();
  },


  // 清空
  image_tap() {
    this.setData({
      wxSearchData: ''
    })
    this.wxSearchInput("")
  },

  // value.detail.value框中的文字变化时，更新搜索内容
  wxSearchInput: function (value) {
    if (value != '') {
      this.setData({
        wxSearchData: value.detail.value
      })
    }
    console.log("查询内容 :" + this.data.wxSearchData);

    // 模糊匹配

    // 正则表达式 
    var reg = new RegExp(this.data.wxSearchData);
    var that = this;
    while (that.data.result.length > 0) {
      that.data.result.splice(0, 1);
    }

    var len = that.data.teacher.length;
    if (that.data.start == '地点')
      len = that.data.location.length;
    if (that.data.start == '教师') {
      for (var i = 0; i < len; i++) {
        if (that.data.teacher[i].name.match(reg))
          that.data.result.push(that.data.teacher[i]);
      }
    }
    else {
      for (var i = 0; i < len; i++) {
        if (that.data.location[i].name.match(reg))
          that.data.result.push(that.data.location[i]);
      }
    }
    console.log("查询个数 :" + that.data.result.length);
    for (var i = 0; i < that.data.result.length; i++) {
      that.data.result[i].idx=i;
      console.log("  结果 :" + that.data.result[i].name);
    }
    that.setData({
      result: that.data.result
    })
  },

  // view里面写data-idx(全小写)='0' 再使用event.currentTarget.dataset.idx获取参数
  click: function (event) {
    var that = this;
    // 如果是地点 直接跳至地图 
    if (that.data.start == '地点') {
      var idx = event.currentTarget.dataset.idx;
      var location = this.data.result[idx];
      console.log("选中：" + location.name + "  (" + location.la + "," + location.lo+")");
      var pages = getCurrentPages();
      var index = pages[pages.length - 2];

      index.data.markers[1] = {
        iconPath: "/images/1.png",
        id: 1,
        latitude: location.la,
        longitude: location.lo,
        width: 25,
        height: 38
      }
      index.setData({
        markers: index.data.markers,
        latitude: location.la,
        longitude: location.lo
      })
      console.log("(from location) marker个数：" + index.data.markers.length)

      wx: wx.switchTab({
        url: '/pages/index/index'
      })
      return;
    }

    // 是老师 先跳到老师页面
    var idx = event.currentTarget.dataset.idx;
    var teacher = this.data.result[idx];
    var len = this.data.location.length;
    var lo = '';
    var la = '';
    for (var i = 0; i < len; i++) {
      if (that.data.location[i].name == teacher.office_x) {
        lo = that.data.location[i].lo,
          la = that.data.location[i].la;
        break;
      }
    }
    if (lo == '') {
      wx.showMoal({
        title: "出错信息",
        content: "此教师的办公室——" + teacher.office_x + "，未记载"
      })
      return false;
    }
    wx.navigateTo({
      url: '/pages/teacher_info/teacher_info?name=' + teacher.name + '&&course=' + teacher.course + '&&tele=' + teacher.tele + '&&mail=' + teacher.mail + '&&office_x=' + teacher.office_x + '&&office_y=' + teacher.office_y + '&&lo=' + lo + '&&la=' + la,
    })
  }
})