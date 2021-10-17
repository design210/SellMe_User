<template>
	<div>
		<main class="login">
			<div class="login_container">
				<div class="login_title">
					<h4>셀미 자기소개 영상 채용</h4>
					<h2>기업 관리자 로그인</h2>
					<!-- <h2>셀미 ADMIN</h2> -->
				</div>

				<form class="form_login">
					<div class="longin_id">
						<label for="idInput">아이디</label>
						<input type="text" name="adminId" id="idInput" placeholder="아이디를 입력해주세요." v-model="id" />
						<span class="errmess" v-if="idError">이메일 주소를 입력해주세요.</span>
					</div>
					<div class="longin_password">
						<label for="passwordInput">비밀번호</label>
						<input type="password" id="passwordInput" placeholder="비밀번호를 입력해주세요." v-model="pw" />
						<span class="errmess" v-if="pwError">비밀번호를 입력해주세요.</span>
					</div>
					<div>
						<button type="button" id="loginBtn" @click="login">로그인</button>
					</div>
				</form>
			</div>
		</main>
		<Footer style="position: fixed; bottom: 0; left: 0"></Footer>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import loginAlertModal from '@/components/modal/LoginAlert';
import { getPopupOpt } from '@/utils/modal';
import { verifyEmail } from '@/utils/validate';
import Footer from '@/components/common/Footer.vue';
export default {
	components: { Footer },
	computed: {
		...mapGetters('login', ['getLoginInfo']),
	},
	data() {
		return {
			username: '',
			password: '',
			logMessage: '',
			id: '',
			pw: '',
			idError: false,
			pwError: false,
		};
	},
	methods: {
		login() {
			if (this.id !== '') {
				let result = verifyEmail(this.id);
				if (result == false) {
					this.idError = true;
					return false;
				}
			} else {
				this.idError = true;
				return false;
			}
			if (this.pw == '') {
				this.pwError = true;
				return false;
			}
			this.submitLogin();
		},
		//알럿 모달
		showModalPopup() {
			this.$modal.show(loginAlertModal, {}, getPopupOpt('loginAlertModal', '280px', 'auto', false));
		},
		async submitLogin() {
			try {
				const userData = {
					id: this.id,
					password: this.pw,
				};
				await this.$store.dispatch('login/LOGIN', userData);
				if (this.getLoginInfo.token !== '') {
					this.$router.push('/main');
				} else {
					this.logMessage = this.getLoginInfo.message;
				}
			} catch (error) {
				console.log('error:', error);
			} finally {
				this.initForm();
			}
		},
		initForm() {
			this.id = '';
			this.pw = '';
		},
	},
};
</script>
