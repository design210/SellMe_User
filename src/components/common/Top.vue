<template>
	<section class="top">
		<nav class="gnb">
			<ul>
				<li v-for="(item, index) in menuList" :key="index" @click="lnbSet(item.sysCodeName)">
					<router-link :to="item.sysCodeVal1"
						><span>{{ item.sysCodeName }}</span></router-link
					>
				</li>
			</ul>
		</nav>
		<div class="d-flex">
			<div class="logout">
				<a href="javascript:;" @click="logout"><v-icon>mdi-logout</v-icon>로그아웃</a>
			</div>
		</div>
	</section>
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
