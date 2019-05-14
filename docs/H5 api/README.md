### 获取地理定位
```js
getLocation = () => { 
  if (navigator.geolocation){ 
    console.log('getlocation')
    navigator.geolocation.getCurrentPosition(this.showPosition, this.showError); 
  }else{ 
    Toast.info("浏览器不支持地理定位。"); 
  } 
} 

showError = (error) => { 
  switch(error.code) { 
    case error.PERMISSION_DENIED: 
      Toast.info("定位失败,用户拒绝请求地理定位"); 
      break; 
    case error.POSITION_UNAVAILABLE: 
      Toast.info("定位失败,位置信息是不可用"); 
      break; 
    case error.TIMEOUT: 
      Toast.info("定位失败,请求获取用户位置超时"); 
      break; 
    case error.UNKNOWN_ERROR: 
      Toast.info("定位失败,定位系统失效"); 
      break; 
  } 
} 
showPosition = (position) => { 
  console.log('position', position)
  var lat = position.coords.latitude; //纬度 
  var lag = position.coords.longitude; //经度 
  Toast.info('纬度:'+lat+',经度:'+lag); 
} 
```