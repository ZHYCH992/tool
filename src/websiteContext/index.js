function webSiteContext() {
  const imgList = document.querySelectorAll('body img');
  let siteId, columnId, path;

  const reg = (txt) => {
    if (!txt || typeof txt !== 'string' || txt.indexOf('siteId') < 0) {
      console.error('websiteContext: siteId, columnId 获取失败！');
      return void 0;
    }
    const params = new URLSearchParams(txt);
    siteId = params.get('siteId');
    columnId = params.get('columnId');
  };

  if (imgList.length > 1) {
    for (let i = imgList.length - 1; i > 0; i--) {
      console.log(1);
      const img = imgList[i];
      const src = img.src;
      if (src.indexOf('siteId') > -1) {
        reg(src.split('?')[1]);
        break;
      }
    }
  } else {
    reg(imgList[0].src.split('?')[1]);
  }

  const link = document.querySelectorAll('link');
  for (let i = 0; i < link.length; i++) {
    const e = link[i];
    if (e.href.includes('_upload')) {
      const lastSlashIndex = e.href.lastIndexOf('/');
      path = e.href.substring(0, lastSlashIndex + 1);
      break;
    }
  }

  if (document.querySelector('#webSiteContext')) {
    const ip = window.location.origin;
    path = i.href.replace(ip, '').replace('favicon.ico', '');
  }

  return { siteId, columnId, path };
}

export default webSiteContext;
