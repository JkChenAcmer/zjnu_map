
Page({
  data: {
    wxSearchData: '', // 输入的值
    result: [], // 所有结果
    location: [
      {
        name: "浙江师范大学国际交流中心",
        lo: "119.657404",
        la: "29.140042",
      },
      {
        name: "浙江师范大学国际交流中心-北门",
        lo: "119.658208",
        la: "29.140511",
      },
      {
        name: "东北门（东门）",
        lo: "119.658145",
        la: "29.14156",
      },
      {
        name: "浙师大游泳馆",
        lo: "119.656946",
        la: "29.142313",
      },
      {
        name: "综合楼",
        lo: "119.656744",
        la: "29.14337",
      },
      {
        name: "新田体育场（东田）",
        lo: "119.655517",
        la: "29.142498",
      },
      {
        name: "体育学院（新田前）",
        lo: "119.65483",
        la: "29.142467",
      },
      {
        name: "网球场",
        lo: "119.655491",
        la: "29.140578",
      },
      {
        name: "29幢教学楼",
        lo: "119.655669",
        la: "29.139969",
      },
      {
        name: "28幢教学楼",
        lo: "119.655724",
        la: "29.139537",
      },
      {
        name: "科技馆",
        lo: "119.654839",
        la: "29.139083",
      },
      {
        name: "24幢教学楼",
        lo: "119.653537",
        la: "29.139068",
      },
      {
        name: "华人华侨研究中心（24幢）",
        lo: "119.653061",
        la: "29.138965",
      },
      {
        name: "25幢教学楼",
        lo: "119.653262",
        la: "29.139525",
      },
      {
        name: "26幢教学楼",
        lo: "119.653918",
        la: "29.140247",
      },
      {
        name: "27幢教学楼",
        lo: "119.653918",
        la: "29.140716",
      },
      {
        name: "启明湖",
        lo: "119.653918",
        la: "29.140716",
      },
      {
        name: "图文信息中心",
        lo: "119.65165",
        la: "29.141958",
      },
      {
        name: "孔子像",
        lo: "119.651884",
        la: "29.141",
      },
      {
        name: "启明排球场",
        lo: "119.651507",
        la: "29.143374",
      },
      {
        name: "启明篮球场",
        lo: "119.650622",
        la: "29.144072",
      },
      {
        name: "启明足球场",
        lo: "119.651848",
        la: "29.143875",
      },
      {
        name: "樱园",
        lo: "119.651327",
        la: "29.144576",
      },
      {
        name: "共青林",
        lo: "119.652504",
        la: "29.143248",
      },
      {
        name: "23幢教学楼",
        lo: "119.650447",
        la: "29.140266",
      },
      {
        name: "22幢教学楼",
        lo: "119.650429",
        la: "29.139852",
      },
      {
        name: "21幢教学楼",
        lo: "119.651066",
        la: "29.139249",
      },
      {
        name: "20幢教学楼",
        lo: "119.651183",
        la: "29.138768",
      },
      {
        name: "东南门",
        lo: "119.652381",
        la: "29.138095",
      },
      {
        name: "美食苑",
        lo: "119.649472",
        la: "29.140838",
      },
      {
        name: "大学生活动中心",
        lo: "119.648996",
        la: "29.140712",
      },
      {
        name: "初阳公寓A幢",
        lo: "119.648848",
        la: "29.141449",
      },
      {
        name: "初阳公寓B幢",
        lo: "119.647931",
        la: "29.14139",
      },
      {
        name: "初阳公寓C幢",
        lo: "119.647837",
        la: "29.142045",
      },
      {
        name: "初阳公寓D幢",
        lo: "119.647837",
        la: "29.142045",
      },
      {
        name: "初阳公寓E幢",
        lo: "119.648663",
        la: "29.142853",
      },
      {
        name: "初阳公寓F幢",
        lo: "119.649422",
        la: "29.142873",
      },
      {
        name: "佰米智能快递代收点（启明篮球场）",
        lo: "119.650006",
        la: "29.143019",
      },
      {
        name: "华洲超市（桂苑公寓附近）",
        lo: "119.648605",
        la: "29.143011",
      },
      {
        name: "桂苑公寓1幢",
        lo: "119.649503",
        la: "29.143413",
      },
      {
        name: "桂苑公寓2幢",
        lo: "119.648583",
        la: "29.143315",
      },
      {
        name: "桂苑公寓3幢",
        lo: "119.649539",
        la: "29.14389",
      },
      {
        name: "桂苑公寓4幢",
        lo: "119.648785",
        la: "29.143752",
      },
      {
        name: "老游泳馆",
        lo: "119.647873",
        la: "29.142498",
      },
      {
        name: "佰米智能快递代收点（老游泳馆）",
        lo: "119.647424",
        la: "29.142222",
      },
      {
        name: "启明公寓1幢",
        lo: "119.648906",
        la: "29.144237",
      },
      {
        name: "启明公寓2幢",
        lo: "119.648663",
        la: "29.14458",
      },
      {
        name: "启明公寓3幢",
        lo: "119.649687",
        la: "29.144245",
      },
      {
        name: "启明公寓4幢",
        lo: "119.64944",
        la: "29.144829",
      },
      {
        name: "启明公寓5幢",
        lo: "119.65024",
        la: "29.144332",
      },
      {
        name: "启明公寓6幢",
        lo: "119.6502",
        la: "29.144695",
      },
      {
        name: "启明公寓7幢",
        lo: "119.650186",
        la: "29.14503",
      },
      {
        name: "启明篮球场",
        lo: "119.646768",
        la: "29.141591",
      },
      {
        name: "杏园男寝1幢",
        lo: "119.64423",
        la: "29.142021",
      },
      {
        name: "杏园男寝2幢",
        lo: "119.644239",
        la: "29.141643",
      },
      {
        name: "杏园男寝3幢",
        lo: "119.644212",
        la: "29.141189",
      },
      {
        name: "杏园男寝4幢",
        lo: "119.644715",
        la: "29.142049",
      },
      {
        name: "杏园男寝5幢",
        lo: "119.644774",
        la: "29.141658",
      },
      {
        name: "杏园男寝6幢",
        lo: "119.644751",
        la: "29.141173",
      },
      {
        name: "宿管办公室（杏园男寝6幢一楼）",
        lo: "119.644769",
        la: "29.141122",
      },
      {
        name: "杏园女寝7幢",
        lo: "119.645277",
        la: "29.141974",
      },
      {
        name: "杏园女寝8幢",
        lo: "119.645236",
        la: "29.141639",
      },
      {
        name: "杏园女寝9幢",
        lo: "119.645286",
        la: "29.141169",
      },
      {
        name: "杏园女寝10幢",
        lo: "119.645286",
        la: "29.141169",
      },
      {
        name: "杏园女寝11幢",
        lo: "119.645825",
        la: "29.141674",
      },
      {
        name: "杏园女寝12幢",
        lo: "119.645834",
        la: "29.141173",
      },
      {
        name: "杏园女寝13幢",
        lo: "119.646436",
        la: "29.142005",
      },
      {
        name: "杏园女寝14幢",
        lo: "119.646476",
        la: "29.141627",
      },
      {
        name: "杏园女寝15幢",
        lo: "119.646485",
        la: "29.141205",
      },
      {
        name: "学生事务中心",
        lo: "119.645636",
        la: "29.140724",
      },
      {
        name: "浙师大纪念品店",
        lo: "119.645798",
        la: "29.140708",
      },
      {
        name: "自由门",
        lo: "119.645942",
        la: "29.140712",
      },
      {
        name: "地方特色美食（二楼）",
        lo: "119.645973",
        la: "29.140724",
      },
      {
        name: "尖峰创品汇",
        lo: "119.64635",
        la: "29.140763",
      },
      {
        name: "佰米智能快递代收点（杏园主干道）",
        lo: "119.646359",
        la: "29.140605",
      },
      {
        name: "网球场（停车场）",
        lo: "119.64653",
        la: "29.140156",
      },
      {
        name: "杏园排球场",
        lo: "119.645528",
        la: "29.140006",
      },
      {
        name: "杏园篮球场",
        lo: "119.644473",
        la: "29.140022",
      },
      {
        name: "体育运动委员会（风雨操场）",
        lo: "119.643354",
        la: "29.140523",
      },
      {
        name: "16幢教学楼",
        lo: "119.643435",
        la: "29.138346",
      },
      {
        name: "17幢教学楼",
        lo: "119.644839",
        la: "29.138751",
      },
      {
        name: "初阳湖",
        lo: "119.644839",
        la: "29.138751",
      },
      {
        name: "19幢教学楼",
        lo: "119.647945",
        la: "29.138665",
      },
      {
        name: "18幢教学楼",
        lo: "119.648147",
        la: "29.137861",
      },
      {
        name: "行政中心北楼",
        lo: "119.646566",
        la: "29.136942",
      },
      {
        name: "行政中心南楼",
        lo: "119.6464",
        la: "29.13639",
      },
      {
        name: "北门",
        lo: "119.643853",
        la: "29.14225",
      },
      {
        name: "北门大花坛",
        lo: "119.643853",
        la: "29.14225",
      },
      {
        name: "桂苑大花坛",
        lo: "119.648569",
        la: "29.140464",
      },
      {
        name: "北田",
        lo: "119.642357",
        la: "29.141714",
      },
      {
        name: "北田羽毛球馆",
        lo: "119.643215",
        la: "29.142029",
      },
      {
        name: "北田篮球场",
        lo: "119.643103",
        la: "29.141497",
      },
      {
        name: "体育馆（篮球馆）",
        lo: "119.641315",
        la: "29.141832",
      },
      {
        name: "佰米智能代收点（琴人坡旁）",
        lo: "119.6411",
        la: "29.141169",
      },
      {
        name: "琴人坡",
        lo: "119.641639",
        la: "29.140984",
      },
      {
        name: "美院工作室",
        lo: "119.640925",
        la: "29.141359",
      },
      {
        name: "建成华洲超市",
        lo: "119.642407",
        la: "29.13984",
      },
      {
        name: "桃园食堂（内有清真食堂）",
        lo: "119.64185",
        la: "29.139982",
      },
      {
        name: "桃源公寓1幢",
        lo: "119.642815",
        la: "29.140337",
      },
      {
        name: "桃源公寓2幢",
        lo: "119.642797",
        la: "29.140602",
      },
      {
        name: "桃源公寓3幢",
        lo: "119.642187",
        la: "29.140602",
      },
      {
        name: "桃源公寓4幢",
        lo: "119.642218",
        la: "29.140428",
      },
      {
        name: "桃源公寓5幢",
        lo: "119.641172",
        la: "29.140077",
      },
      {
        name: "桃源公寓6幢",
        lo: "119.64074",
        la: "29.140057",
      },
      {
        name: "桃源公寓7幢",
        lo: "119.6411",
        la: "29.140369",
      },
      {
        name: "桃源公寓8幢",
        lo: "119.640668",
        la: "29.140353",
      },
      {
        name: "桃源公寓9幢",
        lo: "119.641118",
        la: "29.140613",
      },
      {
        name: "桃源公寓10幢",
        lo: "119.640682",
        la: "29.140586",
      },
      {
        name: "桃源公寓11幢",
        lo: "119.641145",
        la: "29.140905",
      },
      {
        name: "桃源公寓12幢",
        lo: "119.64061",
        la: "29.140874",
      },
      {
        name: "桃源公寓13幢",
        lo: "119.640282",
        la: "29.13975",
      },
      {
        name: "桃源公寓14幢",
        lo: "119.640134",
        la: "29.140046",
      },
      {
        name: "桃源公寓15幢",
        lo: "119.640116",
        la: "29.140266",
      },
      {
        name: "桃源公寓16幢",
        lo: "119.639986",
        la: "29.140629",
      },
      {
        name: "桃源公寓17幢",
        lo: "119.639887",
        la: "29.140854",
      },
      {
        name: "桃源公寓18幢",
        lo: "119.639267",
        la: "29.140558",
      },
      {
        name: "桃源公寓19幢",
        lo: "119.640615",
        la: "29.141335",
      },
      {
        name: "桃源公寓20幢",
        lo: "119.64057",
        la: "29.141623",
      },
      {
        name: "桃源公寓21幢",
        lo: "119.640368",
        la: "29.142065",
      },
      {
        name: "桃源公寓22幢",
        lo: "119.639788",
        la: "29.142029",
      },
      {
        name: "桃源公寓23幢",
        lo: "119.640619",
        la: "29.142364",
      },
      {
        name: "9幢教学楼",
        lo: "119.642101",
        la: "29.138389",
      },
      {
        name: "8幢教学楼",
        lo: "119.642061",
        la: "29.13794",
      },
      {
        name: "7幢教学楼",
        lo: "119.642106",
        la: "29.137608",
      },
      {
        name: "新月湖",
        lo: "119.642294",
        la: "29.135002",
      },
      {
        name: "邵逸夫图书馆（非洲博物馆）",
        lo: "119.641976",
        la: "29.136126",
      },
      {
        name: "4幢教学楼",
        lo: "119.642865",
        la: "29.136244",
      },
      {
        name: "3幢教学楼",
        lo: "119.64286",
        la: "29.135869",
      },
      {
        name: "5幢（研究生教学大楼）",
        lo: "119.643112",
        la: "29.13695",
      },
      {
        name: "2幢教学楼",
        lo: "119.643709",
        la: "29.13641",
      },
      {
        name: "后勤中心",
        lo: "119.643795",
        la: "29.136063",
      },
      {
        name: "校医院",
        lo: "119.644257",
        la: "29.135522",
      },
      {
        name: "老图书馆",
        lo: "119.643467",
        la: "29.135242",
      },
      {
        name: "美术学院陶艺实验室",
        lo: "119.643822",
        la: "29.134797",
      },
      {
        name: "浙江省高师师资培训中心进修教师宿舍1幢",
        lo: "119.641118",
        la: "29.134647",
      },
      {
        name: "浙江省高师师资培训中心进修教师宿舍2幢",
        lo: "119.641158",
        la: "29.134876",
      },
      {
        name: "浙江省高师师资培训中心进修教师宿舍3幢",
        lo: "119.641149",
        la: "29.1351",
      },
      {
        name: "西田",
        lo: "119.640637",
        la: "29.136465",
      },
      {
        name: "10幢教学楼",
        lo: "119.640637",
        la: "29.136465",
      },
      {
        name: "11幢教学楼",
        lo: "119.640525",
        la: "29.137877",
      },
      {
        name: "12幢教学楼",
        lo: "119.640525",
        la: "29.138306",
      },
      {
        name: "30幢教学楼",
        lo: "119.639914",
        la: "29.137451",
      },
      {
        name: "31幢教学楼",
        lo: "119.63986",
        la: "29.137802",
      },
      {
        name: "红楼",
        lo: "119.641257",
        la: "29.138839",
      },
      {
        name: "15幢教学楼",
        lo: "119.639891",
        la: "29.139115",
      },
      {
        name: "14幢教学楼",
        lo: "119.640929",
        la: "29.139758",
      },
      {
        name: "西南门",
        lo: "119.638805",
        la: "29.138918",
      }

    ],
    teacher: [
      {
        name: "张三",
        course: "语文",
        tele: "13212376576",
        mail: "1287318@qq.com",
        office_x: "26幢教学楼",
        office_y: "312",
      }, {
        name: "李四",
        course: "数学",
        tele: "13212376576",
        mail: "1287318@qq.com",
        office_x: "27幢教学楼",
        office_y: "312",
      }, {
        name: "小四",
        course: "英语",
        tele: "13212376576",
        mail: "1287318@qq.com",
        office_x: "28幢教学楼",
        office_y: "312",
      }, {
        name: "小五",
        course: "体育",
        tele: "13212372576",
        mail: "1287318@qq.com",
        office_x: "29幢教学楼",
        office_y: "312",
      }],
    start: "教师",
    slist: [{
      id: 1,
      name: "教师"
    },
    {
      id: 1,
      name: "地点"
    },
    ],
    isstart: false,
    openimg:'/images/up.png',
    offimg:'/images/down.png'
  },

  onLoad: function () {
    // 百度的坐标转为腾讯
    var len=this.data.location.length;
    var that=this;
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
    this.setData({
      location:that.data.location
    })

    this.image_tap()
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