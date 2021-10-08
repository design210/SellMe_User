import { getContactList, getcontactDetail, contactDelete, contactModify } from '@/api/homepage/inquire';
const contact = {
	namespaced: true,
	state: {
		getContactList: {},
		getcontactDetail: {},
	},
	getters: {
		getContactList: state => {
			return state.getContactList;
		},
		getcontactDetail: state => {
			return state.getcontactDetail;
		},
	},
	mutations: {
		getContactList(state, contactList) {
			state.getContactList = contactList;
		},
		getcontactDetail(state, detail) {
			state.getcontactDetail = detail;
		},
	},
	actions: {
		async CONTACT_LIST({ commit }, datas) {
			const { data } = await getContactList(datas);
			commit('getContactList', data);
		},
		async CONTACT_MODIFY({ commit }, datas) {
			await contactModify(datas);
		},
		async CONTACT_DETAIL({ commit }, id) {
			const { data } = await getcontactDetail(id);
			commit('getcontactDetail', data);
		},
		async CONTACT_DEL({ commit }, id) {
			await contactDelete(id);
		},
	},
};

export default contact;
