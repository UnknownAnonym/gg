// import { getUserInfo, demo } from '@/api/demo'

/**
 * @author
 * @createTime  2021-8-7
 * @description  例子接口
 */

const state = {
  userInfo: {
    username: '',
  },
  wstoken: '',
}

const getters = {
  // 用户信息
  userInfo: state => state.userInfo,
  wstoken: state => state.wstoken,
}

const mutations = {
  SET_USERINFO: (state, userInfo) => {
    state.userInfo = userInfo
  },
  SET_WSTOKEN: (state, wstoken) => {
    state.wstoken = wstoken
  },
}
const actions = {
  // 获取用户信息
  // async getUserInfo({ commit }) {
  //   try {
  //     let { data } = await getUserInfo()
  //     console.log('getUserInfo', data)
  //     commit('SET_USERINFO', data)
  //     uni.hideLoading()
  //   } catch (e) {
  //     console.log('getUserInfo', e)
  //   }
  // },
}
export default { state, getters, mutations, actions }
