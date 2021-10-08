import { getCustomerList, getCustomerDetail, customerModify, setCustomer, customerDelete } from '@/api/operation/prospectiveCustomer';
const customer = {
	namespaced: true,
	state: {
		getCustomerList: {},
		getCustomerDetail: {},
	},
	getters: {
		getCustomerList: state => {
			return state.getCustomerList;
		},
		getCustomerDetail: state => {
			return state.getCustomerDetail;
		},
	},
	mutations: {
		getCustomerList(state, customerList) {
			state.getCustomerList = customerList;
		},
		getCustomerDetail(state, customerData) {
			state.getCustomerDetail = customerData;
		},
	},
	actions: {
		async CUSTOMER_LIST({ commit }, datas) {
			const { data } = await getCustomerList(datas);
			commit('getCustomerList', data);
		},
		async CUSTOMER_ADD({ commit }, datas) {
			await setCustomer(datas);
		},
		async CUSTOMER_MODIFY({ commit }, datas) {
			await customerModify(datas);
		},
		async CUSTOMER_DETAIL({ commit }, id) {
			const { data } = await getCustomerDetail(id);
			commit('getCustomerDetail', data);
		},
		async CUSTOMER_DEL({ commit }, id) {
			await customerDelete(id);
		},
	},
};

export default customer;
