import { getApplicantList, getApplicantAdvList } from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getApplicantAdvList: {},
	},
	getters: {
		getApplicantList: state => {
			return state.getApplicantList;
		},
		getApplicantAdvList: state => {
			return state.getApplicantAdvList;
		},
	},
	mutations: {
		getApplicantList(state, data) {
			state.getApplicantList = data;
		},
		getApplicantAdvList(state, data) {
			state.getApplicantAdvList = data;
		},
	},
	actions: {
		async APPLICANT_LIST({ commit }, id) {
			const { data } = await getApplicantList(id);
			commit('getApplicantList', data);
		},
		async APPLICANT_ADV_LIST({ commit }, datas) {
			const { data } = await getApplicantAdvList(datas);
			commit('getApplicantAdvList', data);
		},
	},
};

export default applicant;
