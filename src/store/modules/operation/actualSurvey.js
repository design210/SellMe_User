import { getActualSurveyList, getActualSurveyDetail, getActualSurveyUpdate, getActualSurveyReg } from '@/api/operation/actualSurvey';
const ActualSurvey = {
	namespaced: true,
	state: {
		getActualSurveyList: {},
		getActualSurveyDetail: {},
	},
	getters: {
		getActualSurveyList: state => {
			return state.getActualSurveyList;
		},
		getActualSurveyDetail: state => {
			return state.getActualSurveyDetail;
		},
	},
	mutations: {
		getActualSurveyList(state, data) {
			state.getActualSurveyList = data;
		},
		getActualSurveyDetail(state, data) {
			state.getActualSurveyDetail = data;
		},
	},
	actions: {
		async ACTUALSURVEY_LIST({ commit }, datas) {
			const { data } = await getActualSurveyList(datas);
			commit('getActualSurveyList', data);
		},
		async ACTUALSURVEY_DETAIL({ commit }, id) {
			const { data } = await getActualSurveyDetail(id);
			commit('getActualSurveyDetail', data);
		},
		async ACTUALSURVEY_UPDATE({ commit }, datas) {
			await getActualSurveyUpdate(datas);
		},
		async ACTUALSURVEY_REG({ commit }, datas) {
			await getActualSurveyReg(datas);
		},
	},
};

export default ActualSurvey;
