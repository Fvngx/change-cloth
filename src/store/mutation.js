const mutations = {
  changeUserInfo(state, user) {
    const data = Object.assign(state.userInfo, user)
    state.userInfo = data
  },
  changeShowType(state, type) {
    state.showType = type
  },
  changeIsLog(state, log) {
    state.isLog = log
  },
  changeSquare(state, square) {
    state.square = square
  }
}

export default mutations
