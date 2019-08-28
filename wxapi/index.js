//存放index页面的api
const { request } = require('./main.js')

module.exports = {
  banners: data => {
    return request('/banner/list', true, 'get', data)
  }
}
