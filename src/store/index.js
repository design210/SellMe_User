import Vue from 'vue';
import Vuex from 'vuex';
import login from '@/store/modules/member/login.js';
import common from '@/store/modules/common/common.js';
import applicant from '@/store/modules/applicant/applicant.js';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		login,
		common,
		applicant,
	},
});
