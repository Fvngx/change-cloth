import data from '@/js/data'
export const getBg = (url, ver) => {
  const baseUrl = ''
  if (ver) {
    url = url + '?ver=' + ver
  }
  return `background:url(${baseUrl}${url}) center center no-repeat`
}

export const changePage = (pageName) => {
  const params = new URL(window.location.href).searchParams
  params.set('isToLog', pageName)
  const searchParams = params.toString()
  location.href = location.origin + location.pathname + '?' + searchParams
}

// 获取壁纸
export const getBizhi = (userInfo, hasShenlong) => {
  const result = []
  let temp = {}
  if (userInfo.wallpaper1 && userInfo.wallpaper1 == '0') {
    temp.id = '1'
    temp.name = '祥龙献瑞'
    temp.jifen = 10
    temp.src = data.bg.bizhi1
    temp.num = Number(userInfo.wallpaper1) + 8
    result.push(temp)
  }
  if (userInfo.wallpaper2 && userInfo.wallpaper2 != '0') {
    temp.id = '2'
    temp.src = data.bg.bizhi1
    temp.num = userInfo.wallpaper2
    result.push(temp)
  }
  if (userInfo.wallpaper3 && userInfo.wallpaper3 != '0') {
    temp.id = '3'
    temp.src = data.bg.bizhi1
    temp.num = userInfo.wallpaper3
    result.push(temp)
  }
  if (userInfo.wallpaper4 && userInfo.wallpaper4 != '0') {
    temp.id = '4'
    temp.src = data.bg.bizhi1
    temp.num = userInfo.wallpaper4
    result.push(temp)
  }
  if (userInfo.wallpaper5 && userInfo.wallpaper5 != '0') {
    temp.id = '5'
    temp.src = data.bg.bizhi1
    temp.num = userInfo.wallpaper5
    result.push(temp)
  }
  if (hasShenlong) {
    if (userInfo.Synthesis && userInfo.Synthesis != '0') {
      temp.id = '6'
      temp.src = data.bg.bizhi1
      temp.num = userInfo.Synthesis
      result.push(temp)
    }
  }

  return result
}
