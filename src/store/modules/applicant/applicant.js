import { getApplicantList, getApplicantAdvList, getApplicantDetail, getApplicantLikeList, getPostDetail } from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getApplicantAdvList: {},
		getApplicantDetail: {},
		getApplicantLikeList: {},
		getPostDetail: {},
	},
	getters: {
		getApplicantList: state => {
			return state.getApplicantList;
		},
		getApplicantAdvList: state => {
			return state.getApplicantAdvList;
		},
		getApplicantDetail: state => {
			return state.getApplicantDetail;
		},
		getApplicantLikeList: state => {
			return state.getApplicantLikeList;
		},
		getPostDetail: state => {
			return state.getPostDetail;
		},
	},
	mutations: {
		getApplicantList(state, data) {
			state.getApplicantList = data;
		},
		getApplicantAdvList(state, data) {
			state.getApplicantAdvList = data;
		},
		getApplicantDetail(state, data) {
			state.getApplicantDetail = data;
		},
		getApplicantLikeList(state, data) {
			state.getApplicantLikeList = data;
		},
		getPostDetail(state, data) {
			state.getPostDetail = data;
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
		async APPLICANT_LIKE_LIST({ commit }, datas) {
			const { data } = await getApplicantLikeList(datas);
			commit('getApplicantLikeList', data);
		},
		async APPLICANT_DETAIL({ commit }, datas) {
			const { data } = await getApplicantDetail(datas);
			commit('getApplicantDetail', data);
		},
		async POST_DETAIL({ commit }, datas) {
			const { data } = await getPostDetail(datas);
			commit('getPostDetail', data);
		},
	},
};

export default applicant;
