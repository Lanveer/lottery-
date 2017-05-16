// pages/newsPage/news.js
Page({
  data: {
    needShowActionSheet:false,
    pronounce:["最新开奖开出了100000000元，天呐真是太可怕了！当期7星彩玩法开奖号码为“3847116”，全国共中出一等奖6注，单注奖金4338660元。河南彩民包揽本期6注头奖，成为当期最大赢家，如果这6注头奖被同一彩民包揽，总奖金将高达2603万元。似的发射点发生但是是的"],
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
    ],
    newsContent:[{"id":"9","title":"企业网站应该多长时间备份一次？","imgurl":"../../images/newsImage@2x.png","description":"企业网站的信息量一般比较少，使用MetInfo企业网站管理系统让网站备份操作非常简单，我们建议用户没有必要经常去备份网站，一般只需要做到一下几点即可","updatetime":"2013-12-26"},{"id":"10","title":"如何选择网站关键词?","imgurl":"../../images/newsImage@2x.png","description":"考虑用户搜索习惯，而并非企业名称或产品名称，尤其是对于一种新的产品，当市场还没有人知道的时候，自然不会有人去搜索这个关键词，因此选","updatetime":"2013-12-26"},{"id":"1","title":"为什么企业要建多国语言网站？","imgurl":"../../images/newsImage@2x.png","description":"许多关键字搜索引擎，尤其是Google，在多语言开发方面能力优异。拥有多语言页面的网站能够最大限度的保障您的网站能够被众多搜索引擎检索并展示","updatetime":"2013-12-26"},{"id":"5","title":"MetInfo企业建站系统有何优势？","imgurl":"../../images/newsImage@2x.png","description":"价格更低：网站建设公司自行开发系统，一般的开发成本都会在千元以上，就算网站建设公司使用自己已经开发的系统建站，客户的一些个性化需要也需要二次开发","updatetime":"2013-12-26"},{"id":"6","title":"企业用网站进行网络宣传的优势","imgurl":"../../images/newsImage@2x.png","description":"从价格方面考虑，与报纸杂志或电视宣传相比，目前网络宣传费用还是较为低廉的。获得同等的宣传效应，网络宣传的有效千人成本远远低于传统宣传媒体。","updatetime":"2013-12-26"},{"id":"21","title":"企业用网站进行网络宣传的优势","imgurl":"../../images/newsImage@2x.png","description":"从价格方面考虑，与报纸杂志或电视宣传相比，目前网络宣传费用还是较为低廉的。获得同等的宣传效应，网络宣传的有效千人成本远远低于传统宣传媒体。","updatetime":"2013-12-26"},{"id":"7","title":"什么是伪静态？伪静态有何作用?","imgurl":"../../images/newsImage@2x.png","description":"伪静态是相对真实静态来讲的，真实静态会生成一个html或htm后缀的文件，访客能够访问到真实存在的静态页面，而伪静态则没有生成实体静态页面文件","updatetime":"2013-12-26"},{"id":"8","title":"如何充分发挥MetInfo的SEO功能","imgurl":"../../images/newsImage@2x.png","description":"MetInfo企业网站管理系统以SEO功能完善而著称，但是很多建站的朋友却忽略了网站的真正价值，完全没有考虑网站的优化推广，从而让网站仅仅是一个摆设","updatetime":"2013-12-26"},{"id":"22","title":"什么是伪静态？伪静态有何作用?","imgurl":"../../images/newsImage@2x.png","description":"伪静态是相对真实静态来讲的，真实静态会生成一个html或htm后缀的文件，访客能够访问到真实存在的静态页面，而伪静态则没有生成实体静态页面文件","updatetime":"2013-12-26"},{"id":"23","title":"如何充分发挥MetInfo的SEO功能","imgurl":"../../images/newsImage@2x.png","description":"MetInfo企业网站管理系统以SEO功能完善而著称，但是很多建站的朋友却忽略了网站的真正价值，完全没有考虑网站的优化推广，从而让网站仅仅是一个摆设","updatetime":"2013-12-26"}]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var index = options.pageIndex;
    this.choseCurrentItem(index);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },

  choseCurrentItem: function (pageIndex) {
    var that = this;
    var index = pageIndex;
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
  },

  showNewsDetail:function(event){
    var itemId = event.currentTarget.dataset.itemId;
    wx.navigateTo({
      url: '../detail/detail?itemId=' + itemId,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },

  leftBarClicked:function(){
    var that = this;
    if(that.data.needShowActionSheet) {
      that.setData({
        needShowActionSheet:false
      })
    } else {
      that.setData({
        needShowActionSheet:true
      })
    }
  },

  actionSheetClicked:function(event){
    var that = this;
    var index = event.currentTarget.dataset.index;
    console.log("actionSheetClicked");
    wx.redirectTo({
      url: '../index/index?lotteryIndex=' + index,
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  soundSwitch:function(event){
    console.log('krejfh')
wx.playBackgroundAudio({
          dataUrl: 'https://wx.beifengapi.com/number/du.mp3'
        })
}

})