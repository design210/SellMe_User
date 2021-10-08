import {
	getCompanyList,
	getCompanyDetail,
	setPower,
	setAllPower,
	powerDelete,
	powerAdminDelete,
	getAdminList,
	getAdminDetail,
	setAllAdminPower,
} from '@/api/system/menu';
const menu = {
	namespaced: true,
	state: {
		getCompanyList: {},
		getCompanyDetail: {},
		getAdminList: {},
		getAdminDetail: {},
	},
	getters: {
		getCompanyList: state => {
			return state.getCompanyList;
		},
		getCompanyDetail: state => {
			return state.getCompanyDetail;
		},
		getAdminList: state => {
			return state.getAdminList;
		},
		getAdminDetail: state => {
			return state.getAdminDetail;
		},
	},
	mutations: {
		getCompanyList(state, companyList) {
			state.getCompanyList = companyList;
		},
		getCompanyDetail(state, companyData) {
			state.getCompanyDetail = companyData;
		},
		getAdminList(state, adminList) {
			state.getAdminList = adminList;
		},
		getAdminDetail(state, adminData) {
			state.getAdminDetail = adminData;
		},
	},
	actions: {
		async COMPANY_LIST({ commit }, datas) {
			const { data } = await getCompanyList(datas);
			commit('getCompanyList', data);
		},
		async COMPANY_DETAIL({ commit }, listData) {
			const { data } = await getCompanyDetail(listData);
			commit('getCompanyDetail', data);
		},
		async POWER_SET({ commit }, datas) {
			await setPower(datas);
		},
		async POWER_ALLSET({ commit }, datas) {
			await setAllPower(datas);
		},
		async POWER_DEL({ commit }, id) {
			await powerDelete(id);
		},
		async ADMIN_LIST({ commit }, datas) {
			const { data } = await getAdminList(datas);
			commit('getAdminList', data);
		},
		async ADMIN_DETAIL({ commit }, listData) {
			const { data } = await getAdminDetail(listData);
			commit('getAdminDetail', data);
		},
		async POWER_ADMIN_ALLSET({ commit }, datas) {
			await setAllAdminPower(datas);
		},
		async POWER_ADMIN_DEL({ commit }, id) {
			await powerAdminDelete(id);
		},
	},
};

export default menu;
