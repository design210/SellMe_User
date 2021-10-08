import { getCompanyList, getCompanyDetail, companyDelete, setCompany, companyModify } from '@/api/operation/company';
const company = {
	namespaced: true,
	state: {
		getCompanyList: {},
		getCompanyInfo: {},
	},
	getters: {
		getCompanyList: state => {
			return state.getCompanyList;
		},
		getCompanyInfo: state => {
			return state.getCompanyInfo;
		},
	},
	mutations: {
		getCompanyList(state, companyList) {
			state.getCompanyList = companyList;
		},
		getCompanyInfo(state, companyInfo) {
			state.getCompanyInfo = companyInfo;
		},
	},
	actions: {
		async COMPANY_LIST({ commit }, companyData) {
			const { data } = await getCompanyList(companyData);
			commit('getCompanyList', data);
		},
		async COMPANY_ADD({ commit }, companyData) {
			await setCompany(companyData);
		},
		async COMPANY_MODIFY({ commit }, companyData) {
			await companyModify(companyData);
		},
		async COMPANY_DETAIL({ commit }, companyData) {
			const { data } = await getCompanyDetail(companyData);
			commit('getCompanyInfo', data);
		},
		async COMPANY_DEL({ commit }, id) {
			await companyDelete(id);
		},
	},
};

export default company;
