// home模块的仓库

import {reqCategoryList} from '@/api/index';

// mock请求
import {reqBannerList} from '@/api/index';

const state={
    // state的初始值根据服务器返回的值确定，返回的是数组，初始值就是数组；返回的是对象，初始值就是对象。 
    categoryList:[],

    // mock数据
    bannerList:[],
};

const mutations={
    CATEGORYLIST(state,categoryList){
        state.categoryList = categoryList;
    },


    // mock数据
    BANNERLIST(state,bannerList){
        state.bannerList = bannerList;
    }

};

const actions={
    // 通过API里面的接口函数调用，向服务器发送请求，获取服务器的数据
    async categoryList({commit}){
        let result = await reqCategoryList();
        // 接收成功结果，需要解构提交数据，让mutation修改数据
        // console.log(result)

        if(result.code == 200){
            commit('CATEGORYLIST',result.data)
        }


    },


    // mock数据
    async bannerList({commit}){
        let bannerResult = await reqBannerList();

        console.log(bannerResult);
        if(bannerResult.code == 200){
            commit('BANNERLIST',bannerResult.data)
        }
    }
};

const getters = {};



// 对外暴露仓库
export default ({
    state,
    mutations,
    actions,
    getters
 })