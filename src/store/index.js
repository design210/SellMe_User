import Vue from 'vue';
import Vuex from 'vuex';
import system from '@/store/modules/system/system.js';
import member from '@/store/modules/system/member.js';
import menu from '@/store/modules/system/menu.js';
import login from '@/store/modules/member/login.js';
import company from '@/store/modules/operation/company.js';
import systemCode from '@/store/modules/system/systemCode.js';
import companyPerson from '@/store/modules/operation/companyPerson.js';
import prospectiveCustomer from '@/store/modules/operation/prospectiveCustomer.js';
import actualSurvey from '@/store/modules/operation/actualSurvey.js';
import actualSurveyPartner from '@/store/modules/operation/actualSurveyPartner.js';
import inquire from '@/store/modules/homepage/inquire.js';
import interbridPosition from '@/store/modules/hr/interbridPosition.js';
import interbridDepartment from '@/store/modules/hr/interbridDepartment.js';
import interbridEmployee from '@/store/modules/hr/interbridEmployee.js';
import user from '@/store/modules/homepage/user.js';
import common from '@/store/modules/common/common.js';
Vue.use(Vuex);
export default new Vuex.Store({
	modules: {
		login,
		system,
		member,
		company,
		systemCode,
		companyPerson,
		prospectiveCustomer,
		actualSurvey,
		inquire,
		interbridPosition,
		interbridDepartment,
		interbridEmployee,
		actualSurveyPartner,
		user,
		common,
		menu,
	},
});
