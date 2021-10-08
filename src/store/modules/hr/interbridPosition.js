import { getPositionList, getPositionDetail, setPosition, delPosition, modifyPosition } from '@/api/hr/interbridPosition';
const position = {
	namespaced: true,
	state: {
		getPositionList: {},
		getPositionDetail: {},
	},
	getters: {
		getPositionList: state => {
			return state.getPositionList;
		},
		getPositionDetail: state => {
			return state.getPositionDetail;
		},
	},
	mutations: {
		getPositionList(state, positionList) {
			state.getPositionList = positionList;
		},
		getPositionDetail(state, positionDetail) {
			state.getPositionDetail = positionDetail;
		},
	},
	actions: {
		async POSITION_LIST({ commit }, datas) {
			const { data } = await getPositionList(datas);
			commit('getPositionList', data);
		},
		async POSITION_DETAIL({ commit }, datas) {
			const { data } = await getPositionDetail(datas);
			commit('getPositionDetail', data);
		},
		async POSITION_ADD({ commit }, datas) {
			await setPosition(datas);
		},
		async POSITION_DEL({ commit }, id) {
			await delPosition(id);
		},
		async POSITION_MODIFY({ commit }, datas) {
			await modifyPosition(datas);
		},
	},
};

export default position;
