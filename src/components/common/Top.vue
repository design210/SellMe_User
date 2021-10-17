<template>
	<header>
		<div class="header_container">
			<div class="header_logo">
				{{ companyLogo }}
				<img src="#" alt="" />
			</div>
			<div class="header_currentPage">{{ companyName }} 지원자 관리 시스템</div>
			<div class="header_status">
				<div class="logout"><a href="#" @click="logout">로그아웃</a></div>
			</div>
		</div>
	</header>
</template>

<script>
import { getCompanyNameCookie, getCompanyLogoCookie, deleteCookie } from '@/utils/cookie.js';
export default {
	data() {
		return {
			companyName: '',
			companyLogo: '',
		};
	},
	async mounted() {
		this.companyName = getCompanyNameCookie();
		this.companyLogo = getCompanyLogoCookie();
	},
	methods: {
		logout() {
			deleteCookie('accessToken');
			deleteCookie('companyName');
			deleteCookie('companyLogo');
			this.$router.push('/login');
		},
	},
};
</script>
