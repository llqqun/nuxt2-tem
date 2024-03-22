export const state = () => {
    return {
        globalParam: 'storeIndex'
    }
}
export const mutations = {
    demoAtion (state, data) {
        state.globalParam = data
    }
}

const handleDev = function (app) {
    // 客户端信息
    const deviceInfo = {
      isPC: true,
      name: 'PC',
      // 企业or个人
      clientType: '',
      // 小程序
      miniClient: ''
    }
  
    // 客户端判断
    const userAgent = app.req.headers['user-agent']
    const Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod']
    const envName = Agents.find((ele) => {
      return userAgent.includes(ele)
    })
    if (envName) {
      deviceInfo.name = envName
      deviceInfo.isPC = false
    }
  
    // 小程序
    if ((/miniProgram/g).test(userAgent)) {
      deviceInfo.clientType = '小程序'
      deviceInfo.miniClient = 'wx'
    } else if (/swan\//.test(userAgent) || /^webswan-/.test(userAgent)) {
      deviceInfo.clientType = '小程序'
      deviceInfo.miniClient = 'baidu'
    } else if (/ToutiaoMicroApp/.test(userAgent)) {
      deviceInfo.clientType = '小程序'
      deviceInfo.miniClient = 'douyin'
    }
    console.log('handleDev', deviceInfo);
  }

export const actions = {
    // 服务端初始页面状态设置(框架自带能力)
    nuxtServerInit (store, nuxtAPP) {
        handleDev(nuxtAPP)
    }
}