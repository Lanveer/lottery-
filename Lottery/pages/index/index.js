//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    condition:false,
    userInfo: {},
    needShowActionSheet: false,
    // 声音开关
    isSoundOn: true,
    //时间是否变红
    lotteryEndText:'今日开奖结束',
    didMeetCloseTime: false,
    didLotteryEnd: false,
    lotteryTimeLeft: 100,
    lotteryTotalCount: 10,
    lotteryTodayCount: 10,
    lotteryTotalLeft: 10,
    lotteryStatue: 'end',
    currentIndex: 0,
    nextPKExcept: 9999999999,
    currentPKExcept: 0,
    nextCQExcept: 0,
    currentCQExcept: 0,
    nextXJExcept: 0,
    currentXJExcept: 0,
    nextTJExcept: 0,
    currentTJExcept: 0,
    isPKFirstLaunch: true,
    isCQFirstLaunch: true,
    isXJFirstLaunch: true,
    isTJFirstLaunch: true,
    isPKLatest: true,
    isCQLatest: true,
    isXJLatest: true,
    isTJLatest: true,
    isOpeningLottery: false,
    lotteryStatueText: '开奖进行中...',
    lotteryPKSum: 179,
    lotteryPKRemain: 179,
    lotteryCQRemain: 120,
    lotteryXJRemain: 96,
    lotteryTJRemain: 84,
    loadingHidden: true,
    clock: '',
    minute: '04',
    second: '59',
    fileMap: {
      '01': '../../images/number_pk/1@2x.png',
      '02': '../../images/number_pk/2@2x.png',
      '03': '../../images/number_pk/3@2x.png',
      '04': '../../images/number_pk/4@2x.png',
      '05': '../../images/number_pk/5@2x.png',
      '06': '../../images/number_pk/6@2x.png',
      '07': '../../images/number_pk/7@2x.png',
      '08': '../../images/number_pk/8@2x.png',
      '09': '../../images/number_pk/9@2x.png',
      '10': '../../images/number_pk/10@2x.png',
      '0': '../../images/number/qiu.png',
      '1': '../../images/number/1@2x.png',
      '2': '../../images/number/2@2x.png',
      '3': '../../images/number/3@2x.png',
      '4': '../../images/number/4@2x.png',
      '5': '../../images/number/5@2x.png',
      '6': '../../images/number/6@2x.png',
      '7': '../../images/number/7@2x.png',
      '8': '../../images/number/8@2x.png',
      '9': '../../images/number/9@2x.png'
    },

    webData:
    [
      {
        "expect": "20170120025",
        "opencode": "9,4,6,8,9",
        "opentime": "2017-01-20 14:10:24"
      },
      {
        "expect": "20170120024",
        "opencode": "5,0,4,7,4",
        "opentime": "2017-01-20 14:00:24"
      },
      {
        "expect": "20170120023",
        "opencode": "6,7,9,4,1",
        "opentime": "2017-01-20 13:50:27"
      },
      {
        "expect": "20170120022",
        "opencode": "1,9,4,9,2",
        "opentime": "2017-01-20 13:40:30"
      },
      {
        "expect": "20170120021",
        "opencode": "1,2,0,7,9",
        "opentime": "2017-01-20 13:30:30"
      },
      {
        "expect": "20170120020",
        "opencode": "3,3,7,9,9",
        "opentime": "2017-01-20 13:20:33"
      },
      {
        "expect": "20170120019",
        "opencode": "4,3,8,5,5",
        "opentime": "2017-01-20 13:10:29"
      },
      {
        "expect": "20170120018",
        "opencode": "4,8,3,5,2",
        "opentime": "2017-01-20 13:00:32"
      },
      {
        "expect": "20170120017",
        "opencode": "9,7,1,1,2",
        "opentime": "2017-01-20 12:50:25"
      },
      {
        "expect": "20170120016",
        "opencode": "1,9,6,8,6",
        "opentime": "2017-01-20 12:40:26"
      },
      {
        "expect": "20170120015",
        "opencode": "6,5,4,3,9",
        "opentime": "2017-01-20 12:30:28"
      },
      {
        "expect": "20170120014",
        "opencode": "5,9,7,0,4",
        "opentime": "2017-01-20 12:20:23"
      },
      {
        "expect": "20170120013",
        "opencode": "5,6,7,9,5",
        "opentime": "2017-01-20 12:10:28"
      },
      {
        "expect": "20170120012",
        "opencode": "6,8,3,0,5",
        "opentime": "2017-01-20 12:00:37"
      },
      {
        "expect": "20170120011",
        "opencode": "8,4,9,9,3",
        "opentime": "2017-01-20 11:50:21"
      },
      {
        "expect": "20170120010",
        "opencode": "2,8,5,4,2",
        "opentime": "2017-01-20 11:40:21"
      },
      {
        "expect": "20170120009",
        "opencode": "9,6,5,4,9",
        "opentime": "2017-01-20 11:30:27"
      },
      {
        "expect": "20170120008",
        "opencode": "6,3,6,8,4",
        "opentime": "2017-01-20 11:20:26"
      },
      {
        "expect": "20170120007",
        "opencode": "6,1,9,3,8",
        "opentime": "2017-01-20 11:10:27"
      },
      {
        "expect": "20170120006",
        "opencode": "9,0,6,8,6",
        "opentime": "2017-01-20 11:00:26"
      }
    ],

    //北京 最新的开奖号码
    latestNumberImage: [
      {
        numberURL: '../../images/number_pk/1@2x.png'
      },
      {
        numberURL: '../../images/number_pk/2@2x.png'
      },
      {
        numberURL: '../../images/number_pk/3@2x.png'
      },
      {
        numberURL: '../../images/number_pk/4@2x.png'
      },
      {
        numberURL: '../../images/number_pk/5@2x.png'
      },
      {
        numberURL: '../../images/number_pk/6@2x.png'
      },
      {
        numberURL: '../../images/number_pk/7@2x.png'
      },
      {
        numberURL: '../../images/number_pk/8@2x.png'
      },
      {
        numberURL: '../../images/number_pk/9@2x.png'
      },
      {
        numberURL: '../../images/number_pk/10@2x.png'
      }
    ],

    //除了北京，最新开奖 测试数据
    latestBallNumberImage: [
      {
        numberURL: '../../images/number/6@2x.png'
      },
      {
        numberURL: '../../images/number/7@2x.png'
      },
      {
        numberURL: '../../images/number/8@2x.png'
      },
      {
        numberURL: '../../images/number/9@2x.png'
      },
      {
        numberURL: '../../images/number/qiu.png'
      }
    ],
    //除了北京 最近5期开奖历史 测试数据
    testBallImageURL: {
      first: [
        {
          testLatestNumberImage: [
            {
              numberURL: '../../images/number/6@2x.png'
            },
            {
              numberURL: '../../images/number/7@2x.png'
            },
            {
              numberURL: '../../images/number/8@2x.png'
            },
            {
              numberURL: '../../images/number/9@2x.png'
            },
            {
              numberURL: '../../images/number/qiu.png'
            }

          ],
          issue: '第52期',
          issueTime: '2017-01-12'
        },
        {
          testLatestNumberImage: [
            {
              numberURL: '../../images/number/0@2x.png'
            },
            {
              numberURL: '../../images/number/1@2x.png'
            },
            {
              numberURL: '../../images/number/3@2x.png'
            },
            {
              numberURL: '../../images/number/9@2x.png'
            },
            {
              numberURL: '../../images/number/qiu.png'
            }

          ],
          issue: '第53期',
          issueTime: '2017-01-13'
        },
        {
          testLatestNumberImage: [
            {
              numberURL: '../../images/number/0@2x.png'
            },
            {
              numberURL: '../../images/number/1@2x.png'
            },
            {
              numberURL: '../../images/number/8@2x.png'
            },
            {
              numberURL: '../../images/number/9@2x.png'
            },
            {
              numberURL: '../../images/number/qiu.png'
            }

          ],
          issue: '第54期',
          issueTime: '2017-01-14'
        },
        {
          testLatestNumberImage: [
            {
              numberURL: '../../images/number/0@2x.png'
            },
            {
              numberURL: '../../images/number/1@2x.png'
            },
            {
              numberURL: '../../images/number/2@2x.png'
            },
            {
              numberURL: '../../images/number/7@2x.png'
            },
            {
              numberURL: '../../images/number/8@2x.png'
            }

          ],
          issue: '第55期',
          issueTime: '2017-01-15'
        },
        {
          testLatestNumberImage: [
            {
              numberURL: '../../images/number/0@2x.png'
            },
            {
              numberURL: '../../images/number/1@2x.png'
            },
            {
              numberURL: '../../images/number/7@2x.png'
            },
            {
              numberURL: '../../images/number/8@2x.png'
            },
            {
              numberURL: '../../images/number/qiu.png'
            }

          ],
          issue: '第56期',
          issueTime: '2017-01-16'
        }
      ]
    },

    imageURL: '../../images/pk10@2x.png',

    //顶部四个按钮和不同彩票头像数据
    topTabBarData: [
      {
        title: '北京赛车PK10',
        didSelected: true,
        imagesURL: '../../images/pk10@2x.png'
      },
      {
        title: '重庆时时彩',
        didSelected: false,
        imagesURL: '../../images/cqssc@2x.png'
      },
      {
        title: '新疆时时彩',
        didSelected: false,
        imagesURL: '../../images/xjssc@2x.png'
      },
      {
        title: '天津时时彩',
        didSelected: false,
        imagesURL: '../../images/tjssc@2x.png'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function (event) {
    console.log('onLoad id = ' + event);
    var that = this;
     wx.getSystemInfo({
      success: function (res) {
        if (res.platform == 'ios') {
          console.log('wefgh')
          that.setData({
            condition: true
          })
        }

      }
    })
    
    //this.changeToLotteryPage(event.lotteryIndex);
    //请求彩票数据
    //this.getLotteryData(this.data.currentIndex);

    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })
    //that.count_down(this);
  },
  onReady: function () {
    //开启计时器
    var that = this;
    //count_down(that);
  },

  onShow: function () {
    var that = this;

    //请求彩票数据
   // that.getLotteryData(this.data.currentIndex);

  },

  showLoading: function () {
    var that = this;
    that.setData({
      loadingHidden: false
    })
  },

  hideLoading: function () {
    var that = this;
    that.setData({
      loadingHidden: true
    })
  },

  getLotteryData: function (currentIndex) {
    var that = this;
    var except = '';
    that.showLoading();

    var url = '';
    if (currentIndex == 0) {
      url = 'https://wx.beifengapi.com/news/pk10.php';
    } else if (currentIndex == 1) {
      url = 'https://wx.beifengapi.com/news/cq.php';
    } else if (currentIndex == 2) {
      url = 'https://wx.beifengapi.com/news/xj.php';
    } else {
      url = 'https://wx.beifengapi.com/news/tj.php';
    }

    var nowDate = parseInt(Date.now() / 1000);
    //console.log(parseInt(date / 1000) + "的时间戳为：" + timestamp2);

    var timeleft = 0;
    if (currentIndex == 0) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期9点的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 300 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 180 - Math.ceil((timeNowMinute - timeNineMinute) / 5);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isPKFirstLaunch) {
              that.setData({
                isPKFirstLaunch: false,
                //nextPKExcept: next,
                currentPKExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentPKExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentPKExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 0;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryPKRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
            that.setData({
              webData: res.data
            })
            that.hideLoading();
            // total_micro_second = 20 * 1000;
          } else {
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })


    } else if (currentIndex == 1) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          var timeNineMinute = Date.parse(new Date(get_time_format())) / (1000 * 60);
          var timeNowMinute = nowDate / 60;
          if (res.data.length > 0){
          //code... lotteryTimeLeft = nowDate - latestLotteryTime
          except = res.data[0].expect;
          except = parseInt(except.substr(7, 3));
          //判断剩余期数，如果为0，设置结束状态
          var remain = 0;
          //设置彩票剩余时间
          var startTime = parseInt((new Date(Date.parse(get_time_format(1))))).getTime() / 1000;
          var deltaTime = nowDate - startTime;
          if (deltaTime >= 43200) {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 300 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 5) - 72;
          } else {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 600 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
          }
          
          console.log("timeopen = " + timeleft)
          console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
          
          //设置下一次的开奖期数
          var next = parseInt(except) + 1;
          if (that.data.isCQFirstLaunch) {
            that.setData({
              isCQFirstLaunch: false,
              //nextPKExcept: next,
              currentCQExcept: parseInt(except)
            })
          } else {
            if (parseInt(except) > that.currentCQExcept) {
              that.setData({
                //nextPKExcept: next,
                currentCQExcept: parseInt(except),
                isPKLatest: false
              })
            } else {
              that.setData({
                isPKLatest: true
              })
            }
          }

          if (remain == 0) {
            that.setData({
              lotteryStatue: 'end',
              lotteryCQRemain: remain,
              lotteryTimeLeft: 300,
              currentCQExcept: expect,
              lotteryStatueText: '今日开奖结束...',
              isOpeningLottery: true,
              didLotteryEnd: true
            })
            total_micro_second = 600000;
          } else {
            //否则判断彩票剩余时间
            that.setData({
              lotteryCQRemain: remain,
              didLotteryEnd: false
            })
            //如果小于30秒
            if (timeleft <= 30) {
              that.setData({
                didMeetCloseTime: true
              })

              if (timeleft == 0) {
                that.setData({
                  lotteryStatue: 'opening',
                  lotteryTimeLeft: timeleft,
                  lotteryStatueText: '开奖进行中...',
                  isOpeningLottery: true
                })
                total_micro_second = timeleft * 1000;
              } else {
                that.setData({
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            } else {
              that.setData({
                didMeetCloseTime: false,
                lotteryStatue: 'waiting',
                lotteryTimeLeft: timeleft,
                isOpeningLottery: false
              })
              total_micro_second = timeleft * 1000;
            }
          }
          console.log("total_micro_second... = " + total_micro_second)
          var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            expect = expect.substr(7, 3);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
          that.hideLoading();
          // total_micro_second = 20 * 1000;
          } else {
            that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })
    } else if (currentIndex == 2) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期10点10分的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format(2)))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 600 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 96 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isXJFirstLaunch) {
              that.setData({
                isXJFirstLaunch: false,
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryXJRemain: remain,
                lotteryTimeLeft: 300,
                currentXJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryXJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })


    } else {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期9点的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 1000 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 84 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isTJFirstLaunch) {
              that.setData({
                isTJFirstLaunch: false,
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentTJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryTJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })

    }
    count_down(that);
  },

autoGetWebData: function (currentIndex) {
    var that = this;
    var except = '';

    var url = '';
    isUpdating = true;
    if (currentIndex == 0) {
      url = 'https://wx.beifengapi.com/news/pk10.php';
    } else if (currentIndex == 1) {
      url = 'https://wx.beifengapi.com/news/cq.php';
    } else if (currentIndex == 2) {
      url = 'https://wx.beifengapi.com/news/xj.php';
    } else {
      url = 'https://wx.beifengapi.com/news/tj.php';
    }

    var nowDate = parseInt(Date.now() / 1000);
    //console.log(parseInt(date / 1000) + "的时间戳为：" + timestamp2);

    var timeleft = 0;
    if (currentIndex == 0) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期9点的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 300 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 180 - Math.ceil((timeNowMinute - timeNineMinute) / 5);
            //设置下一次的开奖期数
            if(that.data.currentPKExcept >= parseInt(except))
            {
              return;
            }
            var next = parseInt(except) + 1;
            if (that.data.isPKFirstLaunch) {
              that.setData({
                isPKFirstLaunch: false,
                //nextPKExcept: next,
                currentPKExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentPKExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentPKExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 0;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryPKRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
            that.setData({
              webData: res.data
            })
            that.hideLoading();
            count_down(that);
            // total_micro_second = 20 * 1000;
          } else {
            
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          
          
        },
        complete: function () {
          // complete
          //that.hideLoading();
          isUpdating = false;
        }
      })


    } else if (currentIndex == 1) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);
          if(res.data.length <= 0){
            return;
          }

          var timeNineMinute = Date.parse(new Date(get_time_format())) / (1000 * 60);
          var timeNowMinute = nowDate / 60;
          //code... lotteryTimeLeft = nowDate - latestLotteryTime
          except = res.data[0].expect;
          except = parseInt(except.substr(7, 3));
          if(that.data.currentCQExcept >= except)
          {
            return;
          }
          //判断剩余期数，如果为0，设置结束状态
          var remain = 0;
          //设置彩票剩余时间
          var startTime = parseInt((new Date(Date.parse(get_time_format(1))))).getTime() / 1000;
          var deltaTime = nowDate - startTime;
          if (deltaTime >= 43200) {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 300 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 5) - 72;
          } else {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 600 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
          }
          
          console.log("timeopen = " + timeleft)
          console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
          
          //设置下一次的开奖期数
          var next = parseInt(except) + 1;
          if (that.data.isCQFirstLaunch) {
            that.setData({
              isCQFirstLaunch: false,
              //nextPKExcept: next,
              currentCQExcept: parseInt(except)
            })
          } else {
            if (parseInt(except) > that.currentCQExcept) {
              that.setData({
                //nextPKExcept: next,
                currentCQExcept: parseInt(except),
                isPKLatest: false
              })
            } else {
              that.setData({
                isPKLatest: true
              })
            }
          }

          if (remain == 0) {
            that.setData({
              lotteryStatue: 'end',
              lotteryCQRemain: remain,
              lotteryTimeLeft: 300,
              currentCQExcept: expect,
              lotteryStatueText: '今日开奖结束...',
              isOpeningLottery: true,
              didLotteryEnd: true
            })
            total_micro_second = 600000;
          } else {
            //否则判断彩票剩余时间
            that.setData({
              lotteryCQRemain: remain,
              didLotteryEnd: false
            })
            //如果小于30秒
            if (timeleft <= 30) {
              that.setData({
                didMeetCloseTime: true
              })

              if (timeleft == 0) {
                that.setData({
                  lotteryStatue: 'opening',
                  lotteryTimeLeft: timeleft,
                  lotteryStatueText: '开奖进行中...',
                  isOpeningLottery: true
                })
                total_micro_second = timeleft * 1000;
              } else {
                that.setData({
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            } else {
              that.setData({
                didMeetCloseTime: false,
                lotteryStatue: 'waiting',
                lotteryTimeLeft: timeleft,
                isOpeningLottery: false
              })
              total_micro_second = timeleft * 1000;
            }
          }
          console.log("total_micro_second... = " + total_micro_second)
          var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            expect = expect.substr(7, 3);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
          that.hideLoading();
          count_down(that);
          // total_micro_second = 20 * 1000;

        },
        fail: function () {
          // fail
          console.log("get data fail");
          
        },
        complete: function () {
          // complete
          //that.hideLoading();
          isUpdating = false
        }
      })
    } else if (currentIndex == 2) {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);
          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期10点10分的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format(2)))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            if(that.data.currentXJExcept >= except)
            {
              return;
            }
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 600 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 96 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isXJFirstLaunch) {
              that.setData({
                isXJFirstLaunch: false,
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryXJRemain: remain,
                lotteryTimeLeft: 300,
                currentXJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryXJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            count_down(that);
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          
        },
        complete: function () {
          // complete
          //that.hideLoading();
          isUpdating = false;
        }
      })


    } else {
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);
          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期9点的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            if(that.data.currentTJExcept >= except)
            {
              return;
            }
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 1000 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 84 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isTJFirstLaunch) {
              that.setData({
                isTJFirstLaunch: false,
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentTJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryTJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            count_down(that);
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
        },
        complete: function () {
          // complete
          //that.hideLoading();
          isUpdating = false;
        }
      })

    }
    
  },


  //当页面加载时，判断需要展示哪种彩票
  changeToLotteryPage: function (pageIndex) {
    var index = pageIndex;
    if (!index) {
      index = 0;
    }

    var that = this;
    var obj = {};
    var key = "";
    var condition = false;
    var url = '';

    for (var i = 0; i < that.data.topTabBarData.length; ++i) {
      key = 'topTabBarData[' + i + '].didSelected';
      if (i == index) {
        condition = true;
        that.setData({
          imageURL: that.data.topTabBarData[i].imagesURL
        });
      } else {
        condition = false;
      }
      obj[key] = condition;
      that.setData(obj);
    }

    that.setData({
      currentIndex: index
    });

    console.log("cuttentIndex = " + that.data.currentIndex);

    if (index != 0) {
      that.setData({
        isPK: false
      })
    } else {
      that.setData({
        isPK: true
      })
    }

  that.getLotteryData(index);

  },

  //点击顶部四个按钮后的响应
  topBarItemClicked: function (event) {
    var that = this;
    var index = event.currentTarget.dataset.index;
    var obj = {};
    var key = "";
    var condition = false;
    var url = '';


    for (var i = 0; i < that.data.topTabBarData.length; ++i) {
      key = 'topTabBarData[' + i + '].didSelected';
      if (i == index) {
        condition = true;
        that.setData({
          imageURL: that.data.topTabBarData[i].imagesURL
        });
      } else {
        condition = false;
      }
      obj[key] = condition;
      that.setData(obj);
    }

    that.setData({
      currentIndex: index
    })

    if (index != 0) {
      that.setData({
        isPK: false
      })
    } else {
      that.setData({
        isPK: true
      })
    }
    that.getLotteryData(index);
  },

  //声音开关
  soundSwitch: function () {
    var that = this;
    if (that.data.isSoundOn) {
      that.setData({
        isSoundOn: false
      })
    } else {
      that.setData({
        isSoundOn: true
      })
    }
  },

  //即时开奖菜单栏点击
  actionSheetClicked: function (event) {
    var that = this;
    console.log("actionSheetClicked");
    that.topBarItemClicked(event);
    that.setData({
      needShowActionSheet: false
    })
  },

  //点击时时彩动态
  rightBarClicked: function () {
    var that = this;
    wx.navigateTo({
      url: '../newsPage/news?pageIndex=' + that.data.currentIndex,
      success: function (res) {
        // success
      },
      fail: function () {
        // fail
      },
      complete: function () {
        // complete
      }
    })
  },

  //点击即时开奖，显示菜单
  leftBarClicked: function () {
    var that = this;
    if (that.data.needShowActionSheet) {
      that.setData({
        needShowActionSheet: false
      })
    } else {
      that.setData({
        needShowActionSheet: true
      })
    }
  },

  getLatestLotteryData: function () {
    var that = this;
    var currentIndex = that.data.currentIndex;
    var nowDate = parseInt(Date.now() / 1000);
    //console.log(parseInt(date / 1000) + "的时间戳为：" + timestamp2);

    var timeleft = 0;
    var url = '';
    if (currentIndex == 0) {
      url = 'https://wx.beifengapi.com/news/pk10.php';
      console.log("getLatestLotteryData index = " + currentIndex);
      that.setData({
        isOpeningLottery: true
      })
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          if (res.data.length > 0) {
            // success
            console.log("latest...")
            console.log(res);
            var expect = parseInt(res.data[0].expect);
            var next = that.data.nextPKExcept;
            console.log("expect = " + expect)
            console.log("currentExpect = " + parseInt(that.data.currentPKExcept));
            if (expect > parseInt(that.data.currentPKExcept)) {
              var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
              var timeNowMinute = parseInt(nowDate / 60);
              //code... lotteryTimeLeft = nowDate - latestLotteryTime
              //判断剩余期数，如果为0，设置结束状态
              var remain = 0;
              //设置彩票剩余时间
              timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 300 - nowDate;
              remain = 180 - Math.ceil((timeNowMinute - timeNineMinute) / 5);
              console.log("latest timeleft = " + timeleft)
              console.log("latest timeDelta = " + (timeNowMinute - timeNineMinute));
              if (remain == 0) {

                that.setData({
                  lotteryPKRemain: remain,
                  lotteryTimeLeft: 300,
                  currentPKExcept: expect,
                  didLotteryEnd: true
                })
                //clearInterval(timer)
              } else {
                that.setData({
                  didLotteryEnd:false
                })
              }
              total_micro_second = timeleft * 1000;
              console.log("clearTimer ");
              console.log("remain = " + remain);
              count_down(that);
              that.setData({
                isOpeningLottery: false,
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentPKExcept: expect,
                didMeetCloseTime: false,
                webData: res.data
              })
              //clearInterval(timer)
              return;
            } else {
              // request_limit += 1;
              // if (request_limit == 20) {
              //   that.setData({
              //     currentPKExcept: 20
              //   })
              //   request_limit = 0;
              // }
              // that.getLatestLotteryData();
            }
          } else {
            //网络错误，请重新登录
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 1")
            return;
          }

          //code... lotteryTimeLeft = nowDate - latestLotteryTime

          // total_micro_second = 20 * 1000;

        },
        fail: function () {
          // fail
          console.log("get data fail");
          //that.hideLoading();
          //that.getLatestLotteryData();
          //网络错误，请重新登录
          that.hideLoading();
          //网络错误，请重新登录
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
          console.log("network error 2")
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })
    } else if (currentIndex == 1) {
      url = 'https://wx.beifengapi.com/news/cq.php';
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          var timeNineMinute = Date.parse(new Date(get_time_format())) / (1000 * 60);
          var timeNowMinute = nowDate / 60;
          //code... lotteryTimeLeft = nowDate - latestLotteryTime
          except = res.data[0].expect;
          except = parseInt(except.substr(7, 3));
          //判断剩余期数，如果为0，设置结束状态
          var remain = 0;
          //设置彩票剩余时间
          var startTime = parseInt((new Date(Date.parse(get_time_format(1))))).getTime() / 1000;
          var deltaTime = nowDate - startTime;
          if (deltaTime >= 43200) {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 300 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 5) - 72;
          } else {
            timeleft = Date.parse(new Date(res.data[0].opentime)) / 1000 + 600 - nowDate;
            remain = 120 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
          }
          
          console.log("timeopen = " + timeleft)
          console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
          
          //设置下一次的开奖期数
          var next = parseInt(except) + 1;
          if (that.data.isCQFirstLaunch) {
            that.setData({
              isCQFirstLaunch: false,
              //nextPKExcept: next,
              currentCQExcept: parseInt(except)
            })
          } else {
            if (parseInt(except) > that.currentCQExcept) {
              that.setData({
                //nextPKExcept: next,
                currentCQExcept: parseInt(except),
                isPKLatest: false
              })
            } else {
              that.setData({
                isPKLatest: true
              })
            }
          }

          if (remain == 0) {
            that.setData({
              lotteryStatue: 'end',
              lotteryCQRemain: remain,
              lotteryTimeLeft: 300,
              currentCQExcept: expect,
              lotteryStatueText: '今日开奖结束...',
              isOpeningLottery: true,
              didLotteryEnd: true
            })
            total_micro_second = 600000;
          } else {
            //否则判断彩票剩余时间
            that.setData({
              lotteryCQRemain: remain,
              didLotteryEnd: false
            })
            //如果小于30秒
            if (timeleft <= 30) {
              that.setData({
                didMeetCloseTime: true
              })

              if (timeleft == 0) {
                that.setData({
                  lotteryStatue: 'opening',
                  lotteryTimeLeft: timeleft,
                  lotteryStatueText: '开奖进行中...',
                  isOpeningLottery: true
                })
                total_micro_second = timeleft * 1000;
              } else {
                that.setData({
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            } else {
              that.setData({
                didMeetCloseTime: false,
                lotteryStatue: 'waiting',
                lotteryTimeLeft: timeleft,
                isOpeningLottery: false
              })
              total_micro_second = timeleft * 1000;
            }
          }
          console.log("total_micro_second... = " + total_micro_second)
          var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            expect = expect.substr(7, 3);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
          that.hideLoading();
          // total_micro_second = 20 * 1000;

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })
    } else if (currentIndex == 2) {
      url = 'https://wx.beifengapi.com/news/xj.php';
      wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期10点10分的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format(2)))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 600 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 96 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isXJFirstLaunch) {
              that.setData({
                isXJFirstLaunch: false,
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentXJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryXJRemain: remain,
                lotteryTimeLeft: 300,
                currentXJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryXJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })
    } else {
      url = 'https://wx.beifengapi.com/news/tj.php';
       wx.request({
        url: url,
        data: {},
        method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
        // header: {}, // 设置请求的 header
        success: function (res) {
          // success
          console.log(res);

          //     var a="2014-05-08 00:22:11";
          // a = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime();
          // a = a.getTime();
          if (res.data.length > 0) {
            //得到当前日期9点的时间戳
            var timeNineMinute = parseInt((new Date(Date.parse(get_time_format()))).getTime() / (1000 * 60));
            //得到当前时间戳
            var timeNowMinute = parseInt(nowDate / 60);
            //code... lotteryTimeLeft = nowDate - latestLotteryTime
            except = res.data[0].expect;
            except = parseInt(except.substr(7, 3));
            //判断剩余期数，如果为0，设置结束状态
            var remain = 0;
            //设置彩票剩余时间
            timeleft = (new Date(Date.parse((res.data[0].opentime).replace(/-/g, "/")))).getTime() / 1000 + 1000 - nowDate;

            console.log("timeleft = " + timeleft)
            console.log("timeDelta = " + (timeNowMinute - timeNineMinute));
            remain = 84 - Math.ceil((timeNowMinute - timeNineMinute) / 10);
            //设置下一次的开奖期数
            var next = parseInt(except) + 1;
            if (that.data.isTJFirstLaunch) {
              that.setData({
                isTJFirstLaunch: false,
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            } else {
              that.setData({
                //nextPKExcept: next,
                currentTJExcept: parseInt(except)
              })
            }

            if (remain == 0) {
              that.setData({
                lotteryStatue: 'end',
                lotteryPKRemain: remain,
                lotteryTimeLeft: 300,
                currentTJExcept: expect,
                lotteryStatueText: '今日开奖结束...',
                isOpeningLottery: true,
                didLotteryEnd: true
              })
              total_micro_second = 600;
            } else {
              //否则判断彩票剩余时间
              that.setData({
                lotteryTJRemain: remain,
                didLotteryEnd:false
              })
              //如果小于30秒
              if (timeleft <= 30) {
                that.setData({
                  didMeetCloseTime: true
                })

                if (timeleft == 0) {
                  that.setData({
                    lotteryStatue: 'opening',
                    lotteryTimeLeft: timeleft,
                    lotteryStatueText: '开奖进行中...',
                    isOpeningLottery: true
                  })
                  total_micro_second = timeleft * 1000;
                } else {
                  that.setData({
                    lotteryStatue: 'waiting',
                    lotteryTimeLeft: timeleft,
                    isOpeningLottery: false
                  })
                  total_micro_second = timeleft * 1000;
                }
              } else {
                that.setData({
                  didMeetCloseTime: false,
                  lotteryStatue: 'waiting',
                  lotteryTimeLeft: timeleft,
                  isOpeningLottery: false
                })
                total_micro_second = timeleft * 1000;
              }
            }
            console.log("total_micro_second... = " + total_micro_second)
             var parseData = res.data;
          for (var i = 0; i < parseData.length; ++i){
            var expect = parseData[i].expect;
            var dateTime = expect.substr(0, 8);
            dateTime = dateTime.substr(0, 4) + "-" + dateTime.substr(4, 2) + "-" + dateTime.substr(6, 2)
            parseData[i].expect = expect;
            parseData[i].dateTime = dateTime;
          }
          that.setData({
            webData: parseData
          })
            that.hideLoading();
            // total_micro_second = 20 * 1000;
          } else {
            //网络错误，请重新登录
            that.hideLoading();
            //网络错误，请重新登录
            wx.showModal({
              title: '提示',
              content: '网络错误，请重新登录',
              showCancel: false,
              success: function (res) {
                if (res.confirm) {
                  console.log('用户点击确定')
                }
              }
            })
            console.log("network error 3")
          }

        },
        fail: function () {
          // fail
          console.log("get data fail");
          that.hideLoading();
          wx.showModal({
            title: '提示',
            content: '网络错误，请重新登录',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定')
              }
            }
          })
        },
        complete: function () {
          // complete
          //that.hideLoading();
        }
      })
    }
    count_down(that);
  }

})



var total_micro_second = 300 * 1000;
var timer;
var request_limit = 20;
var isUpdating = false;

function count_down(that) {
  var h = date_format(total_micro_second);
  // console.log(h);
  var minite = h.substring(0, 2);
  var seconds = h.substring(3, 5);
  // 渲染倒计时时钟
  that.setData({
    clock: date_format(total_micro_second),
    minute: minite,
    second: seconds
  });
  var deltaTime = parseInt(total_micro_second / 1000)
  if (deltaTime % 2 == 0 && !isUpdating) {
    console.log("updating...");
    that.autoGetWebData(that.data.currentIndex);
  }

  //console.log("时间：" + total_micro_second);
  if (deltaTime > 30) {
    //console.log("大于30");
    that.setData({
      didMeetCloseTime: false
    });
    // timeout则跳出递归
    //return;
  } else {
    //that.playSound();
    if (deltaTime <= 30) {
      if (that.isSoundOn) {
        wx.playBackgroundAudio({
          dataUrl: 'https://wx.beifengapi.com/number/du.mp3'
        })
      }
    }
    if (deltaTime == 0) {
      //请求彩票数据
      //that.getLotteryData(this.data.currentIndex);
      that.getLatestLotteryData();
      //timer = setInterval(function(){getLatestLotteryData()},1000);
      return;
    }
    //console.log("小于30");
    that.setData({
      didMeetCloseTime: true
    });
  }


  setTimeout(function () {
    // 放在最后--
    total_micro_second -= 10;
    count_down(that);
  }
    , 10)
}

// 时间格式化输出，如03:25:19 86。每10ms都会调用一次
function date_format(micro_second) {
  // 秒数
  var second = Math.floor(micro_second / 1000);
  // 小时位
  var hr = Math.floor(second / 3600);
  // 分钟位
  var min = fill_zero_prefix(Math.floor((second - hr * 3600) / 60));
  // 秒位
  var sec = fill_zero_prefix((second - hr * 3600 - min * 60));// equal to => var sec = second % 60;
  // 毫秒位，保留2位

  return min + ":" + sec;
}

// 位数不足补零
function fill_zero_prefix(num) {
  return num < 10 ? "0" + num : num
}

function get_time_format(index = 0) {

  var date = new Date();

  var Y = date.getFullYear(),
    m = date.getMonth() + 1,
    d = date.getDate(),
    H = date.getHours(),
    i = date.getMinutes(),
    s = date.getSeconds();
  if (m < 10) {
    m = '0' + m;
  }
  if (d < 10) {
    d = '0' + d;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (i < 10) {
    i = '0' + i;
  }
  if (s < 10) {
    s = '0' + s;
  }
  if (index == 0) {
    var t = Y + '/' + m + '/' + d + ' ' + '09:00:00';

  } else if (index == 1) {
    var t = Y + '/' + m + '/' + d + ' ' + '10:00:00';

  } else if (index == 2) {
    var t = Y + '/' + m + '/' + d + ' ' + '10:10:00';

  } else {
    var t = Y + '/' + m + '/' + d + ' ' + '09:10:00';

  }

  console.log("localTime = " + t);
  return t;
}


