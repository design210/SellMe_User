<template>
	<div class="side-bar">
		<div class="logo">
			<router-link to="/main"><span>Channel</span> TUNE</router-link>
		</div>
		<nav class="lnb">
			<ul>
				<li v-for="(item, index) in subList" :key="index" :class="{ 'init-depths': item.submenu !== undefined }">
					<router-link :to="item.sysCodeVal1" :class="{ depths1: item.submenu !== undefined }"
						><span class="icon"
							><v-icon>{{ item.sysCodeVal2 }}</v-icon></span
						>{{ item.sysCodeName }}<span class="arrow" v-if="item.submenu !== undefined"><v-icon>mdi-chevron-down</v-icon></span></router-link
					>
					<ul class="depths2" v-if="item.submenu !== undefined">
						<li v-for="(item, index) in item.submenu" :key="index">
							<router-link :to="item.sysCodeVal1">{{ item.sysCodeName }}</router-link>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	</div>
</template>

<script>
import $ from 'jquery';
import { mapGetters } from 'vuex';
import { getAdminUserSidCookie } from '@/utils/cookie.js';
export default {
	props: ['lnbprop'],
	computed: {
		...mapGetters('common', ['getMenuList']),
		lnbName() {
			return this.lnbprop;
		},
	},
	data() {
		return {
			sid: '',
			subList: [],
		};
	},
	async mounted() {
		//메뉴동작 script
		$(function () {
			const depths1 = $('nav > ul > li > a');
			const depths2 = $('.depths2 > li > a');
			$(document).on('click', 'nav > ul > li > a', function () {
				if (!$(this).hasClass('depths1')) {
					$('nav > ul > li > a').removeClass('active');
					$('nav > ul > li > a').removeClass('router-link-exact-active');
					$('.side-bar .depths2').slideUp('fast');
					$(this).addClass('active');
					depths2.removeClass('active');
				} else {
					depths1.not($(this)).removeClass('active');
					depths1.not($(this)).removeClass('router-link-exact-active');
					depths1.not($(this)).next().slideUp('fast');
					$(this).toggleClass('active');
					$(this).next().stop().slideToggle('fast');
				}
			});
			$(document).on('click', '.depths2 > li > a', function () {
				depths2.removeClass('active');
				$(this).addClass('active');
				$(this).closest('.init-depths').find('.depths1').addClass('router-link-exact-active');
			});
		});
		this.reload();
	},
	methods: {
		async reload() {
			this.sid = getAdminUserSidCookie();
			await this.$store.dispatch('common/MENU_LIST', this.sid);
			//총 갯수
			const count = Object.keys(this.getMenuList).length;
			const list = [];
			//새로운 배열
			for (let i = 0; i < count - 2; i++) {
				await list.push(this.getMenuList[i]);
			}
			const lnbList = [];
			const Temp = this.$route.meta.lnb;
			await list.forEach(ele => {
				if (ele.sysCodeName === Temp) {
					lnbList.push(ele);
				}
			});
			this.menuList = lnbList;
			this.subList = this.menuList[0].submenu;
		},
	},
	watch: {
		lnbprop(n) {
			this.reload();
		},
	},
};
</script>
