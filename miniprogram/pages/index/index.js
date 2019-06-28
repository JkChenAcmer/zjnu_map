//index.js

// 我的位置
var mylatitude = ""
var mylongitude = ""
var myaddress=""
var QQMapWX = require('../../src/qqmap-wx-jssdk.min.js');
var qqmapsdk;

Page({
  // 页面的初始数据
  data: {
    // 地图的中心位置
    latitude: "29.135324",
    longitude: "119.640142",
    name: '',
    distance: '',
    // 标记 第一个自身 第二个选中点
    // 数组长度ar.length 属性值ar[0].id 删除ar.splice(i,1) 插入arr.push(node)
    // node为字典：var map={};map[key]=value
    scale:'18',
    markers: [
      // {iconPath: "../../images/1.png",
      // id: 0,
      // latitude: 29.1344033932,
      // longitude: 119.6412760706,
      // width: 25,
      // height: 38}
    ],
    // 直线
    polyline: [],
    // 控制点
    controls: [{
      id: 1,
      iconPath: '../../images/my.png',
      position: {
        left: 20,
        top: 300,
        width: 30,
        height: 30
      },
      clickable: true
    }],
    qqMapKey:'MMGBZ-AET6I-KCIGP-5SO4N-XJPDQ-IYFTR'
  },
  onReady: function () {
    this.mapCtx = wx.createMapContext('mapid'); // map为地图的id
  },
  // 初始化
  onLoad: function (options) {
    this.getLocationAndGo();
    var that=this;
    var that=this;
    setInterval(function(){
      that.getLocation()
    },6000)
  },

  // 取消选中 并调整地图大小，回到自身位置
  cancel: function () {
    while (this.data.markers.length > 1) {
      this.data.markers.pop();
    }
    this.setData({
      markers: this.data.markers,
      polyline: [],
      scale:'18'
    })
    this.getLocationAndGo();
  },
  
  // 画线
  link:function(){
    if(this.data.markers.length!=2)return false;
    var that = this;
    wx.request({
      // url: 'https://apis.map.qq.com/uri/v1/routeplan?type=walk&fromcoord=' + that.data.markers[0].latitude + ',' + that.data.markers[0].longitude + '&tocoord=' + that.data.markers[1].latitude + ',' + that.data.markers[1].longitude + '&policy=2&referer=' + that.data.qqMapKey,

      // walking换成driving就是行车路线 
      url: 'https://apis.map.qq.com/ws/direction/v1/walking/?from=' + that.data.markers[0].latitude + ',' + that.data.markers[0].longitude + '&to=' + that.data.markers[1].latitude + ',' + that.data.markers[1].longitude  +'&output=json&callback=cb&key=' + that.data.qqMapKey,
      success: function (res) {
        var coors = res.data.result.routes[0].polyline
        for (var i = 2; i < coors.length; i++) {
          coors[i] = coors[i - 2] + coors[i] / 1000000
        }
        console.log(coors)
        //划线
        var b = [];
        for (var i = 0; i < coors.length; i = i + 2) {
          b[i / 2] = {
            latitude: coors[i], 
            longitude: coors[i + 1]
          };
          console.log(b[i / 2])
        }
        
        that.setData({
          polyline: [{
            points: b,
            color: '#000000',
            width: 4,
            dottedLine: false
          }],
        })

        // 调整地图大小和位置
        that.mapCtx.includePoints({
          padding: [100, 80, 100, 80],
          points: [{ latitude: that.data.markers[0].latitude, longitude: that.data.markers[0].longitude},
            { latitude: that.data.markers[1].latitude, longitude: that.data.markers[1].longitude }
          ]
        })
      }
    })
  },
  
  // 获取当前位置坐标和逆解析地址 打标记
  getLocation: function () {
    qqmapsdk = new QQMapWX({
      key: this.data.qqMapKey
    });
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        mylatitude = res.latitude;
        mylongitude = res.longitude;
        // 配额问题不实时逆地址解析
        //   location: {
        //     latitude: res.latitude,
        //     longitude: res.longitude
        //   },
        //   success: function (addressRes) {
        //     var address = addressRes.result.formatted_addresses.recommend;
        //     myaddress = address;
        //   }
        // })
        console.log("所在位置：" + "(" + mylatitude + "," + mylongitude + ")")
        var node = {
          iconPath: "../../images/1.png",
          id: 0,
          latitude: mylatitude,
          longitude: mylongitude,
          width: 25,
          height: 38
        }
        that.data.markers[0] = node;
        that.setData({
          markers: that.data.markers
        })
      }
    })
  },

  // 获取当前位置坐标和逆解析地址 打标记 并跳转
  getLocationAndGo: function () {
    qqmapsdk = new QQMapWX({
      key: this.data.qqMapKey
    });
    var that =this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        mylatitude = res.latitude;
        mylongitude = res.longitude;
        qqmapsdk.reverseGeocoder({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          },
          success: function (addressRes) {
            var address = addressRes.result.formatted_addresses.recommend;
            myaddress = address;
            console.log("所在位置：" + myaddress + "(" + mylatitude + "," + mylongitude + ")")
          }
        })
        var node = {
          iconPath: "../../images/1.png",
          id: 0,
          latitude: mylatitude,
          longitude: mylongitude,
          width: 25,
          height: 38
        }
        that.data.markers[0] = node;
        that.setData({
          markers: that.data.markers,
          latitude: mylatitude,
          longitude: mylongitude
        })
      }
    })
  },

  

  // 切换至搜索页
  toSearch: function () {
    this.cancel();
    wx.navigateTo({
      url: '../search/search',
    })
  },

  // 拖动时实时获取位置
  regionChange: function (res) {
    var that = this;
    // 改变中心点位置  
    if (res.type == "end") {
      that.getCenterLocation();
    }
  },
  // 获取地图位置
  getCenterLocation: function () {
    var that = this;
    var mapCtx = wx.createMapContext("mapId");
    mapCtx.getCenterLocation({
      success: function (res) {
        that.updateCenterLocation(res.latitude, res.longitude);
        console.log(1);
        that.regeocodingAddress();
        that.queryMarkerInfo();
      }
    })
  }
})