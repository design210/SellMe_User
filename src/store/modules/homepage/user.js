import { getUserList, getUserDetail, userAdd, userDelete, userModify } from '@/api/homepage/user';
const contact = {
	namespaced: true,
	state: {
		getUserList: {},
		getUserDetail: {},
	},
	getters: {
		getUserList: state => {
			return state.getUserList;
		},
		getUserDetail: state => {
			return state.getUserDetail;
		},
	},
	mutations: {
		getUserList(state, list) {
			state.getUserList = list;
		},
		getUserDetail(state, detail) {
			state.getUserDetail = detail;
		},
	},
	actions: {
		async USER_LIST({ commit }, datas) {
			const { data } = await getUserList(datas);
			commit('getUserList', data);
		},
		async USER_ADD({ commit }, datas) {
			await userAdd(datas);
		},
		async USER_MODIFY({ commit }, datas) {
			await userModify(datas);
		},
		async USER_DETAIL({ commit }, id) {
			const { data } = await getUserDetail(id);
			commit('getUserDetail', data);
		},
		async USER_DEL({ commit }, id) {
			await userDelete(id);
		},
	},
};

export default contact;
