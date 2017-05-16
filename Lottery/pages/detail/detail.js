// pages/detail/detail.js
Page({
  data: {
    condition: '',
    itemId:0,
    info: [
      {
        header_title: '这是小标题1',
        content: 'TL 1.0 发布于 2002 年 6 月，由四个定制标记库（core、format、xml 和 sql）和一对通用标记库验证器（ScriptFreeTLV 和 PermittedTaglibsTLV）组成。core 标记库提供了定制操作，通过限制了作用域的变量管理数据，以及执行页面内容的迭代和条件操作。它还提供了用来生成和操作 URL 的标记。顾名思义'
      },
      {
        header_title: '这是小标题2',
        content: 'TL 1.0 发布于 2002 年 6 月，由四个定制标记库（core、format、xml 和 sql）和一对通用标记库验证器（ScriptFreeTLV 和 PermittedTaglibsTLV）组成。core 标记库提供了定制操作，通过限制了作用域的变量管理数据，以及执行页面内容的迭代和条件操作。它还提供了用来生成和操作 URL 的标记。顾名思义'
      },
      {
        header_title: '这是小标题3',
        content: 'TL 1.0 发布于 2002 年 6 月，由四个定制标记库（core、format、xml 和 sql）和一对通用标记库验证器（ScriptFreeTLV 和 PermittedTaglibsTLV）组成。core 标记库提供了定制操作，通过限制了作用域的变量管理数据，以及执行页面内容的迭代和条件操作。它还提供了用来生成和操作 URL 的标记。顾名思义'
      },
    ],
    getInfo:[]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var itemId = options.itemId;
    var that = this;
    wx.request({
url: 'https://wx.beifengapi.com/news/newsinfo.php',
  data: {id:itemId},
  method: 'GET',
  header: { 'Content-Type': 'application/json' },
  success: function(res){
    // success
    console.log(res);
    if (res.statusCode == 200) {
          var detail=res.data;
          // console.log(detail.content);
          var neirong=detail.content;
          var title= detail.title;
           var s = neirong.replace(/<.*?>/ig,"");
           var b=s;
           var c=b.replace(/&nbsp;/ig,"")
           console.log(c);
          var getInfo=[];       
          getInfo.push(title); 
           getInfo.push(c);    
          that.setData({
            getInfo:getInfo
          })
        }

  },
  fail: function() {
    // fail
  },
  complete: function() {
    // complete
  }
})
    console.log('wefdewr')
    // 判断设备
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

    // 请求数据

  },



})
