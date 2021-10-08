import { getManagerList, getManagerDetail, setManager, managerModify, managerDelete } from '@/api/operation/companyPerson';
const person = {
	namespaced: true,
	state: {
		getManagerList: {},
		getManagerDetail: {},
	},
	getters: {
		getManagerList: state => {
			return state.getManagerList;
		},
		getManagerDetail: state => {
			return state.getManagerDetail;
		},
	},
	mutations: {
		getManagerList(state, managerList) {
			state.getManagerList = managerList;
		},
		getManagerDetail(state, managerData) {
			state.getManagerDetail = managerData;
		},
	},
	actions: {
		async MANAGER_LIST({ commit }, managerData) {
			const { data } = await getManagerList(managerData);
			commit('getManagerList', data);
		},
		async MANAGER_ADD({ commit }, managerData) {
			await setManager(managerData);
		},
		async MANAGER_MODIFY({ commit }, companyData) {
			await managerModify(companyData);
		},
		async MANAGER_DETAIL({ commit }, managerData) {
			const { data } = await getManagerDetail(managerData);
			commit('getManagerDetail', data);
		},
		async MANAGER_DEL({ commit }, id) {
			await managerDelete(id);
		},
	},
};

export default person;
