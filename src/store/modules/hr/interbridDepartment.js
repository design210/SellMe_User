import { getPartList, getPartDetail, setPart, delPart, modifyPart } from '@/api/hr/interbridDepartment';
const department = {
	namespaced: true,
	state: {
		getPartList: {},
		getPartDetail: {},
	},
	getters: {
		getPartList: state => {
			return state.getPartList;
		},
		getPartDetail: state => {
			return state.getPartDetail;
		},
	},
	mutations: {
		getPartList(state, list) {
			state.getPartList = list;
		},
		getPartDetail(state, detail) {
			state.getPartDetail = detail;
		},
	},
	actions: {
		async PART_LIST({ commit }, datas) {
			const { data } = await getPartList(datas);
			commit('getPartList', data);
		},
		async PART_DETAIL({ commit }, datas) {
			const { data } = await getPartDetail(datas);
			commit('getPartDetail', data);
		},
		async PART_ADD({ commit }, datas) {
			await setPart(datas);
		},
		async PART_DEL({ commit }, id) {
			await delPart(id);
		},
		async PART_MODIFY({ commit }, datas) {
			await modifyPart(datas);
		},
	},
};

export default department;
