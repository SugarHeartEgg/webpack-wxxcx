const baseUrl = 'http://127.0.0.1:3000/'

// 请求地址处理
const getUrl = (url) => {
  if (url.indexOf('://') == -1) {
    url = baseUrl + url
  }
  return url
}

const http = ({
  url = "",
  params = {},
  ...other
} = {}) => {
  wx.showLoading({
    title: '正在加载数据...',
  })
  let timeStart = Date.now()
  return new Promise((resolve, reject) => {
    wx.request({
      url: getUrl(url + "?t=" + (new Date().getTime())),
      data: params,
      header: {
        'content-type': 'application/json', // 微信默认是json格式的
        // 'content-type': 'application/x-www-form-urlencoded' // 还可以自己设置成formData格式的
      },
      ...other,
      complete: (res) => {
        wx.hideLoading();

        console.log(`耗时${Date.now() - timeStart}`)
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(res)
        } else {
          reject(res)
          wx.showToast({
            title: '网络请求失败，请重试...',
            icon: "none",
            duration: 2000
          })
        }
      }
    })
  })
}


function objTostr(obj) {
  let response = []
  for (let key in obj) {
    response.push(key + "=" + obj[key])
  }
  return response.join("&")
}

// get请求
// get不用穿method是应为  微信方法wx.request默认传GET方法
const _get = (url, params = {}) => {
  console.log(params)
  return http({
    url,
    params
  })
}

// post请求
const _post = (url, params = {}) => {
  return http({
    url,
    params,
    method: "post"
  })
}

// put请求
const _put = (url, params = {}) => {
  return http({
    url,
    params,
    method: "put"
  })
}

// _delete请求
const _delete = (url, params = {}) => {
  return http({
    url,
    params,
    method: "put"
  })
}

// 把方法暴露出去
module.exports = {
  baseUrl,
  _get,
  _post,
  _put,
  _delete
}