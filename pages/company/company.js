//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    array: [{
      mode: 'widthFix',
      text: 'scaleToFill：不保持纵横比缩放图片，使图片完全适应'
    }],
    src: '../images/banner3.png'
  },
  imageError: function (e) {
    console.log('image3发生error事件，携带值为', e.detail.errMsg)
  }
})
