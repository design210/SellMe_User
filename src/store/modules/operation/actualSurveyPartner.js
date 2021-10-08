import {
	getActualSurveyPartnerList,
	getActualSurveyParnterDetail,
	actualSurveyParnterStatus,
	actualSurveyParnterCustomer,
	getActualSurveyParnterUpdate,
} from '@/api/operation/actualSurveyPartner';
const ActualSurvey = {
	namespaced: true,
	state: {
		getActualSurveyPartnerList: {},
		getActualSurveyPartnerDetail: {},
	},
	getters: {
		getActualSurveyPartnerList: state => {
			return state.getActualSurveyPartnerList;
		},
		getActualSurveyPartnerDetail: state => {
			return state.getActualSurveyPartnerDetail;
		},
	},
	mutations: {
		getActualSurveyPartnerList(state, data) {
			state.getActualSurveyPartnerList = data;
		},
		getActualSurveyPartnerDetail(state, data) {
			state.getActualSurveyPartnerDetail = data;
		},
	},
	actions: {
		async ACTUALSURVEYPARTNER_LIST({ commit }, datas) {
			const { data } = await getActualSurveyPartnerList(datas);
			commit('getActualSurveyPartnerList', data);
		},
		async ACTUALSURVEYPARTNER_DETAIL({ commit }, id) {
			const { data } = await getActualSurveyParnterDetail(id);
			commit('getActualSurveyPartnerDetail', data);
		},
		async ACTUALSURVEYPARTNER_STATUS({ commit }, datas) {
			await actualSurveyParnterStatus(datas);
		},
		async ACTUALSURVEYPARTNER_CUSTOMER({ commit }, id) {
			await actualSurveyParnterCustomer(id);
		},
		async ACTUALSURVEYPARTNER_UPDATE({ commit }, datas) {
			await getActualSurveyParnterUpdate(datas);
		},
	},
};

export default ActualSurvey;
