const CONFIG = require('./config.js')
const API_BASE_URL = 'https://api.it120.cc'
const request = (url, needSubDomain, method, data) => {
  let _url = API_BASE_URL + (needSubDomain ? '/' + CONFIG.subDomain : '') + url
  return new Promise((resolve, reject) => {
    wx.request({
      url: _url,
      method: method,
      data: data,
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success(request) {
        resolve(request.data)
      },
      fail(error) {
        reject(error)
      },
      complete(aaa) {
        // 加载完成
      }
    })
  })
}

/**
 * 小程序的promise没有finally方法，自己扩展下
 */
Promise.prototype.finally = function(callback) {
  var Promise = this.constructor
  return this.then(
    function(value) {
      Promise.resolve(callback()).then(function() {
        return value
      })
    },
    function(reason) {
      Promise.resolve(callback()).then(function() {
        throw reason
      })
    }
  )
}

module.exports = {
  request
}
