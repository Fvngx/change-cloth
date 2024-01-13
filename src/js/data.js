if (process.env.NODE_ENV !== 'production') {
  console.log('开发环境')
  window.baseurl = '/assets'
} else {
  console.log('生产环境')
  window.baseurl = '/h5/jf2020/assets'
}
const _baseurl = window.baseurl
const v = 'v=1'
export default {
  bg: {
    bg1: _baseurl + '/img/bg/bg1.jpg?' + v,
    bg2: _baseurl + '/img/bg/bg2.png?' + v,
    bg3: _baseurl + '/img/bg/bg3.png?' + v,
    bg4: _baseurl + '/img/bg/bg4.png?' + v,
    bg5: _baseurl + '/img/bg/bg5.png?' + v,
    bg6: _baseurl + '/img/bg/bg6.png?' + v,
    default: _baseurl + '/img/bg/default.png?' + v,
    bizhi1: _baseurl + '/img/bg/bizhi1.png?' + v
  },
  btn: {
    fenxiang: _baseurl + '/img/btn/fenxiang.png?' + v,
    xuanze: _baseurl + '/img/btn/xuanze.png?' + v,
    queding: _baseurl + '/img/btn/queding.png?' + v,
    zhuli: _baseurl + '/img/btn/zhuli.png?' + v,
    bizhi: _baseurl + '/img/btn/bizhi.png?' + v,
    zuopin: _baseurl + '/img/btn/zuopin.png?' + v,
    zhaohuan: _baseurl + '/img/btn/zhaohuan.png?' + v,
    guize: _baseurl + '/img/btn/guize.png?' + v,
    hecheng: _baseurl + '/img/btn/hecheng.png?' + v,
    weita: _baseurl + '/img/btn/weita.png?' + v,
    metoo: _baseurl + '/img/btn/metoo.png?' + v,
    reset: _baseurl + '/img/btn/reset.png?' + v,
    draw: _baseurl + '/img/btn/draw.png?' + v,
    down: _baseurl + '/img/btn/down.png?' + v,
    usebizhi: _baseurl + '/img/btn/usebizhi.png?' + v,
    shareto: _baseurl + '/img/btn/shareto.png?' + v,
    back: _baseurl + '/img/btn/back.png?' + v,
    tool: _baseurl + '/img/btn/tool.png?' + v,
    pre: _baseurl + '/img/btn/pre.png?' + v,
    create: _baseurl + '/img/btn/create.png?' + v,
    jifen: _baseurl + '/img/btn/jifen.png?' + v,
    active: _baseurl + '/img/btn/active.png?' + v
  },
  banner: {
    wenlan: _baseurl + '/img/banner/wenlan.jpg?' + v,
    boyue: _baseurl + '/img/banner/boyue.jpg?' + v,
    runjing: _baseurl + '/img/banner/runjing.jpg?' + v,
    jinyun: _baseurl + '/img/banner/jinyun.jpg?' + v,
    jinmao: _baseurl + '/img/banner/jinmao.jpg?' + v,
    yunlu: _baseurl + '/img/banner/yunlu.jpg?' + v,
    haiyue: _baseurl + '/img/banner/haiyue.jpg?' + v,
    manyue: _baseurl + '/img/banner/manyue.jpg?' + v
  },
  other: {
    long_txt: _baseurl + '/img/other/long_txt.png?' + v,
    long: _baseurl + '/img/other/long.png?' + v,
    logo: _baseurl + '/img/other/logo.png?' + v,
    hua_long_red: _baseurl + '/img/other/hua_long_red.png?' + v,
    hua_long_jin: _baseurl + '/img/other/hua_long_jin.png?' + v,
    wenlan: _baseurl + '/img/other/wenlan.png?' + v,
    boyue: _baseurl + '/img/other/boyue.png?' + v,
    runjing: _baseurl + '/img/other/runjing.png?' + v,
    jinyun: _baseurl + '/img/other/jinyun.png?' + v,
    jinmao: _baseurl + '/img/other/jinmao.png?' + v,
    yunlu: _baseurl + '/img/other/yunlu.png?' + v,
    haiyue: _baseurl + '/img/other/haiyue.png?' + v,
    manyue: _baseurl + '/img/other/manyue.png?' + v,
    yun: _baseurl + '/img/other/yun.png?' + v,
    menuborder: _baseurl + '/img/other/menuborder.png?' + v,
    haoyouzhuli: _baseurl + '/img/other/haoyouzhuli.png?' + v,
    youxiguize: _baseurl + '/img/other/youxiguize.png?' + v,
    wodebizhi: _baseurl + '/img/other/wodebizhi.png?' + v,
    wodezuopin: _baseurl + '/img/other/wodezuopin.png?' + v,
    ruletxt: _baseurl + '/img/other/ruletxt.png?' + v,
    guang: _baseurl + '/img/other/guang.png?' + v,
    guang2: _baseurl + '/img/other/guang2.png?' + v,
    shenlong: _baseurl + '/img/other/shenlong.png?' + v,
    head: _baseurl + '/img/other/head.png?' + v,
    yun1: _baseurl + '/img/other/yun1.png?' + v,
    line: _baseurl + '/img/other/line.png?' + v,
    yun_ceng: _baseurl + '/img/other/yun_ceng.png?' + v,
    qr: _baseurl + '/img/other/qr.png?' + v
  }
}
