import { loginUser } from '@/api/member/login';
import { saveAccessTokenCookie, saveCompanyUserNoCookie, saveCompanyNameCookie, saveCompanyLogoCookie } from '@/utils/cookie';
const member = {
	namespaced: true,
	state: {
		getLoginInfo: {},
	},
	getters: {
		getLoginInfo: state => {
			return state.getLoginInfo;
		},
	},
	mutations: {
		getLoginInfo(state, userInfo) {
			state.getLoginInfo = userInfo;
		},
	},
	actions: {
		async LOGIN({ commit }, userData) {
			const { data } = await loginUser(userData);
			if (data.token !== '') {
				saveAccessTokenCookie(data.token);
				saveCompanyNameCookie(data.user.companyName);
				saveCompanyLogoCookie(data.user.companyLogo);
				saveCompanyUserNoCookie(data.user.companyUserNo);
			}
			commit('getLoginInfo', data);
		},
	},
};

export default member;
