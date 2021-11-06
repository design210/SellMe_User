import { fileUpload, setLike } from '@/api/common/common';
const common = {
	namespaced: true,
	state: {
		getFileInfo: {},
	},
	getters: {
		getFileInfo: state => {
			return state.getFileInfo;
		},
	},
	mutations: {
		getFileInfo(state, data) {
			state.getFileInfo = data;
		},
	},
	actions: {
		async FILE_UPLOAD({ commit }, datas) {
			const { data } = await fileUpload(datas);
			commit('getFileInfo', data);
		},
		async LIKE({ commit }, datas) {
			await setLike(datas);
		},
	},
};

export default common;
