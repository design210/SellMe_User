import { getTree, getTreeDetail, addItem, delItem, modifyItem } from '@/api/system/tree';
const system = {
	namespaced: true,
	state: {
		setTree: {},
		setTreeDetail: {},
	},
	getters: {
		setTree: state => {
			return state.setTree;
		},
		setTreeDetail: state => {
			return state.setTreeDetail;
		},
	},
	mutations: {
		setTree(state, setTree) {
			state.setTree = setTree;
		},
		setTreeDetail(state, setTreeDetail) {
			state.setTreeDetail = setTreeDetail;
		},
	},
	actions: {
		async TREE({ commit }, id) {
			const { data } = await getTree(id);
			commit('setTree', data);
		},
		async TREE_DETAIL({ commit }, id) {
			const { data } = await getTreeDetail(id);
			commit('setTreeDetail', data);
		},
		async REG({ commit }, datas) {
			await addItem(datas);
		},
		async DEL({ commit }, id) {
			await delItem(id);
		},
		async MODIFY({ commit }, datas) {
			await modifyItem(datas);
		},
	},
};

export default system;
