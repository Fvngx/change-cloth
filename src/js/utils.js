export const getBg = (url, ver) => {
  const baseUrl = ''
  if (ver) {
    url = url + '?ver=' + ver
  }
  return `background:url(${baseUrl}${url}) center center no-repeat`
}
