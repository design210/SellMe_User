import { fileDelete, getMenuList } from '@/api/common/common';
const common = {
	namespaced: true,
	state: {
		getMenuList: {},
	},
	getters: {
		getMenuList: state => {
			return state.getMenuList;
		},
	},
	mutations: {
		getMenuList(state, data) {
			state.getMenuList = data;
		},
	},
	actions: {
		async FILE_DELETE({ commit }, id) {
			await fileDelete(id);
		},
		async MENU_LIST({ commit }, id) {
			const { data } = await getMenuList(id);
			commit('getMenuList', data);
		},
	},
};

export default common;
