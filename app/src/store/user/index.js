import { reqGetCode, reqRegister, reqLogin, reqUserInfo, reqLogout } from '@/api';
import { setToken, getToken, removeToken } from '@/utils/token';
const state = {
    code: '',
    // 仓库中的token初始化为local storage中的TOKEN，没有set时，token就是空传，
    // setitem后，从localtorage中获取token，这样刷新后也不会消失，已达到持久化存储token数据
    token: getToken(),
    userInfo: '',
};
const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
    USERLOGIN(state, token) {
        state.token = token
    },
    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo
    },
    CLEAR(state) {
        // 清空本地存储数据和仓库数据
        state.token = '';
        state.userInfo = {};
        removeToken();
    }
};
const actions = {
    // 获取验证码
    async getCode({ commit }, phone) {
        // 此处由后台返回验证码，正常应由后台发送给手机，而不是返回
        let result = await reqGetCode(phone);
        // console.log(result)
        if (result.code == 200) {
            // 若是由后台发送给手机则不用提交结果数据
            commit('GETCODE', result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 用户注册
    async userRegister({ commit }, user) {
        let result = await reqRegister(user);
        // console.log(result);
        if (result.code == 200) {
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    // 用户登入
    async userLogin({ commit }, data) {
        let result = await reqLogin(data);
        // 服务器传回token（令牌）以及用户信息
        // 一般需要使用token找服务器要用户信息
        // console.log(result);
        // token用户唯一标识
        if (result.code == 200) {
            commit('USERLOGIN', result.data.token);
            // 持久化存储token
            setToken(result.data.token);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }

    },
    // 获取用户信息
    async getUserInfo({ commit }) {
        // 在home页面派发，在挂载home的时候申请用户信息
        let result = await reqUserInfo()
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    },
    // 退出登入
    async userLogout({ commit }) {
        let result = await reqLogout();
        if (result.code == 200) {
            commit("CLEAR");
            return 'ok'
        } else {
            return Promise.reject(new Error('faile'))
        }
    }
};
const getters = {

};
export default {
    state,
    mutations,
    actions,
    getters
}