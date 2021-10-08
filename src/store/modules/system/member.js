import { getUserList, getUserDetail, setUser, userDelete, userModify } from '@/api/system/user';
const member = {
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
		getUserList(state, userList) {
			state.getUserList = userList;
		},
		getUserDetail(state, userData) {
			state.getUserDetail = userData;
		},
	},
	actions: {
		async USER_LIST({ commit }, listData) {
			const { data } = await getUserList(listData);
			commit('getUserList', data);
		},
		async USER_DETAIL({ commit }, listData) {
			const { data } = await getUserDetail(listData);
			commit('getUserDetail', data);
		},
		async USER_ADD({ commit }, userData) {
			await setUser(userData);
		},
		async USER_DEL({ commit }, id) {
			await userDelete(id);
		},
		async USER_MODIFY({ commit }, userData) {
			await userModify(userData);
		},
	},
};

export default member;
