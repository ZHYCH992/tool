function websiteContext() {
  var imgList = document.querySelectorAll('body img');
  var siteId, columnId, path;
  var reg = function reg(txt) {
    if (!txt || typeof txt !== 'string' || txt.indexOf('siteId') < 0) {
      console.error('websiteContext: siteId, columnId 获取失败！');
      return void 0;
    }
    var params = new URLSearchParams(txt);
    siteId = params.get('siteId');
    columnId = params.get('columnId');
  };
  if (imgList.length > 1) {
    for (var i = imgList.length - 1; i > 0; i--) {
      console.log(1);
      var img = imgList[i];
      var src = img.src;
      if (src.indexOf('siteId') > -1) {
        reg(src.split('?')[1]);
        break;
      }
    }
  } else {
    reg(imgList[0].src.split('?')[1]);
  }
  return {
    siteId: siteId,
    columnId: columnId,
    path: path
  };
}
export default websiteContext;