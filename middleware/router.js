/**
 * 路由中间件
 * @param route 当前路由
 * @param store
 * @param req
 * @param res
 */
export default function ({ store, route, req, redirect }) {
  try {
    if (req) {
      console.log('服务端', route.path)
      // if (store.state.global.clientEnv.name !== 'PC') {
      //   if (/^\/mobile\/?$/.test(route.path)) {
      //     redirect('/mobile/wordlibrary')
      //   }
      // }
      // 服务端
    } else {
      console.log('客户端', route.path)
      // 客户端
    }
  } catch (e) {
  }
}
