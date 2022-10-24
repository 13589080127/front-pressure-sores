import { request } from '@/utils/request'
export default {
    namespaced: true,
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
        // 报名
        async sign_up() {
            let res = await request('post', 'users/signUp')
            return res
        },

        // 获取省份数据
        async get_province_list() {
            let res = await request('post', '/province/all')
            return res
        }
    }
}
