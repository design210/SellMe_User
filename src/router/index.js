import Vue from 'vue';
import VueRouter from 'vue-router';
import { getAccessTokenCookie } from '@/utils/cookie';
const footer = () => import('@/components/common/Footer.vue');
const top = () => import('@/components/common/Top.vue');

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/main',
		},
		{
			path: '/login',
			name: 'login',
			component: () => import('@/views/login/Login.vue'),
			meta: { unauthorized: true },
		},
		{
			path: '/main',
			name: 'main',
			meta: { lnb: 'system' },
			components: {
				top,
				contents: () => import('@/views/main.vue'),
			},
		},
		{
			path: '/applicant/detail',
			name: 'applicant_detail',
			components: {
				top,
				footer,
				contents: () => import('@/views/applicant/applicantDetail.vue'),
			},
			meta: { unauthorized: true },
		},
		//404
		{
			path: '*',
			name: 'pageNotFound',
			component: () => import('@/views/error/NotFoundPage.vue'),
			meta: { unauthorized: true },
		},
	],
});

//router guard
router.beforeEach(async (to, from, next) => {
	//액세스 토큰이 있을 경우
	if (getAccessTokenCookie() !== null) {
		return next();
	}

	//로그인 필요 없는 페이지
	if (to.matched.some(record => record.meta.unauthorized) || getAccessTokenCookie()) {
		return next();
	}

	//액세스 토큰이 없을 경우
	return next('/login');
});

export default router;
