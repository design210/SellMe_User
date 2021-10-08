import { loginUser, loginout } from '@/api/member/login';
import { saveAccessTokenCookie, adminUserSidCookie, adminUserNameCookie, deleteCookie } from '@/utils/cookie';
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
			const result = data.channeltuneApiResult.login;
			if (result.errorCode == 200) {
				saveAccessTokenCookie(result.access_token.access_token);
				adminUserSidCookie(result.access_token.current_user.adminUserSid);
				adminUserNameCookie(result.access_token.current_user.adminUserName);
			}
			commit('getLoginInfo', result);
		},
		async LOGOUT() {
			await loginout();
			deleteCookie('accessToken');
			deleteCookie('adminUserSid');
			deleteCookie('adminUserName');
		},
	},
};

export default member;
