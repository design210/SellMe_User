<template>
	<header>
		<div class="header_container">
			<div class="header_logo">
				로고img
				<img src="#" alt="" />
			</div>
			<div class="header_currentPage">(주)컴퍼니제이 지원자 관리 시스템</div>
			<div class="header_status">
				<div class="logout"><a href="#">로그아웃</a></div>
			</div>
		</div>
	</header>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import { getAdminUserSidCookie } from '@/utils/cookie.js';
export default {
	computed: {
		...mapGetters('common', ['getMenuList']),
	},
	data() {
		return {
			open: true,
			sid: '',
			menuList: [],
		};
	},
	async mounted() {
		$('.top-nav a').click(function () {
			$('.top-nav li').removeClass('active');
			$(this).closest('li').addClass('active');
		});
		this.sid = getAdminUserSidCookie();
		await this.$store.dispatch('common/MENU_LIST', this.sid);
		//총 갯수
		const count = Object.keys(this.getMenuList).length;
		//새로운 배열
		const list = [];
		for (let i = 0; i < count - 2; i++) {
			await list.push(this.getMenuList[i]);
		}
		this.menuList = list;
	},
	methods: {
		logout() {
			this.$store.dispatch('login/LOGOUT');
			this.$router.push('/login');
		},
		firstOpen() {
			this.open = !this.open;
			this.$emit('open', this.open);
		},
		lnbSet(name) {
			this.$emit('lnbSetting', name);
		},
	},
};
</script>
