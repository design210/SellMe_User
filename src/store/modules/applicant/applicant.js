import {
	getAppicantMemo,
	getApplicantList,
	getApplicantAdvList,
	getApplicantDetail,
	getApplicantLikeList,
	getPostDetail,
	getAppicantMemoWrite,
} from '@/api/applicant/applicant';
const applicant = {
	namespaced: true,
	state: {
		getApplicantList: {},
		getApplicantAdvList: {},
		getApplicantDetail: {},
		getApplicantLikeList: {},
		getPostDetail: {},
		getAppicantMemo: {},
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
		getAppicantMemo: state => {
			return state.getAppicantMemo;
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
		getAppicantMemo(state, data) {
			state.getAppicantMemo = data;
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
		async APPLICANT_MEMO({ commit }, datas) {
			const { data } = await getAppicantMemo(datas);
			commit('getAppicantMemo', data);
		},
		async APPLICANT_MEMO_WRITE({ commit }, datas) {
			await getAppicantMemoWrite(datas);
		},
	},
};

export default applicant;
