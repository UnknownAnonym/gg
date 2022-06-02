/**
 * @description 导出默认通用配置
 */

const setting = {
  // appId
  appId: '',

  // secret
  secret: '',

  // baseUrl
  baseUrl: 'https://www.ilightlife.info/api',

  // 最大请求超时时间
  requestTimeout: 6000,

  // 合法域名(小程序后台域名配置列表)
  urlList: [
    {
      type: 'request',
      url: 'https://www.ilightlife.info',
    },
  ],
}

module.exports = setting
