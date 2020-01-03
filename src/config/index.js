export default {
  // 配置显示在浏览器标签的title
  title: 'admin-cli',
  // token在Cookie中存储的天数，默认1天
  cookieExpires: 1,
  /**
   * @description 是否使用国际化，默认为false
   *              如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
   *              用来在菜单中显示文字
   */
  useI18n: true,
  // api请求基础路径
  baseUrl: {
    dev: 'https://www.easy-mock.com/mock/5add9213ce4d0e69998a6f51/iview-admin/',
    pro: 'https://produce.com'
  },
  // 默认打开的首页的路由name值，默认为home
  homeName: 'home',
  // 头像
  avatorImg: 'http://m.qpic.cn/psc?/V11bzsqh2i1PJJ/lX1BhdNAWy*lo8EgHnGEzvpnyqtF1PsfTl*K.ghQmPQpf3urB*wQBbvix1GqlXGo23BsPLS4UGb0kRHU31r1cx.4Ay88mCbxzhmWBSwjgnU!/anull&bo=RgJVAgAAAAARByM!&rf=photolist&t=5'
}