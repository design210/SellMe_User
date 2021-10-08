import { getEmployeeList, getEmployeeDetail, employeeAdd, employeeDel, employeeModify } from '@/api/hr/interbridEmployee';
const employee = {
	namespaced: true,
	state: {
		getEmployeeList: {},
		getEmployeeDetail: {},
	},
	getters: {
		getEmployeeList: state => {
			return state.getEmployeeList;
		},
		getEmployeeDetail: state => {
			return state.getEmployeeDetail;
		},
	},
	mutations: {
		getEmployeeList(state, list) {
			state.getEmployeeList = list;
		},
		getEmployeeDetail(state, detail) {
			state.getEmployeeDetail = detail;
		},
	},
	actions: {
		async EMPLOYEE_LIST({ commit }, datas) {
			const { data } = await getEmployeeList(datas);
			commit('getEmployeeList', data);
		},
		async EMPLOYEE_DETAIL({ commit }, id) {
			const { data } = await getEmployeeDetail(id);
			commit('getEmployeeDetail', data);
		},
		async EMPLOYEE_ADD({ commit }, datas) {
			await employeeAdd(datas);
		},
		async EMPLOYEE_DEL({ commit }, id) {
			await employeeDel(id);
		},
		async EMPLOYEE_MODIFY({ commit }, datas) {
			await employeeModify(datas);
		},
	},
};

export default employee;
