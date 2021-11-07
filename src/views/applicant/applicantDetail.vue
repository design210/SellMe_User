<template>
	<div>
		<div class="header_profile">
			<div class="header_profile_container">
				<div class="profile">
					<div class="profile_first">
						<span class="profile_position">{{ advertisemenName }} 지원자</span>
					</div>
					<div class="profile_second">
						<span class="profile_name">{{ applyUserName }}</span>
						<span class="profile_career" v-if="isNew === 0">경력 {{ career }}</span>
						<span class="profile_career" v-if="isNew === 1">신입</span>
						<span class="profile_M">M | </span><span class="profile_phone">{{ applyPhoneNo }}</span> <span class="profile_E">E | </span
						><span class="profile_email">{{ applyEmail }}</span>
					</div>
				</div>
				<div class="pageBtn">
					<button type="button" class="prev_profile" @click="prev" v-if="prevUser !== null"><img src="@/assets/img/arrow_L.svg" alt="" /></button>
					<button type="button" class="prev_profile" v-if="prevUser === null"><img src="@/assets/img/arrow_L.svg" alt="" class="opacity" /></button>
					<img src="@/assets/img/icon_person.svg" alt="" />
					<button type="button" class="next_profile" @click="next" v-if="nextUser !== null"><img src="@/assets/img/arrow_R.svg" alt="" /></button>
					<button type="button" class="next_profile" v-if="nextUser === null"><img src="@/assets/img/arrow_R.svg" alt="" class="opacity" /></button>
				</div>
			</div>
		</div>
		<div class="main_profile">
			<div class="main_profile_container">
				<div class="contents_left">
					<div class="portpolio_video">
						<h2>
							<img src="/img/img_pin.png" alt="" />'<span>{{ applyUserName }}</span
							>'님의 지원 영상
						</h2>
						<div class="desc_video">
							<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ contents }}</h5>
							<div class="videoplayer">
								<video-player class="video-player-box" ref="videoPlayer" :options="playerOptions" :playsinline="true"> </video-player>
							</div>
						</div>
					</div>
					<div class="portpolio_resume">
						<h2><img src="@/assets/img/img_pin.png" alt="" />자기소개서</h2>
						<div class="textarea question">
							<div v-if="text_question_1 !== ''">
								<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ text_question_1 }}</h5>
								<div class="text">
									{{ answer_1 }}
								</div>
							</div>
							<div v-if="text_question_2 !== ''">
								<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ text_question_2 }}</h5>
								<div class="text">
									{{ answer_2 }}
								</div>
							</div>
							<div v-if="text_question_3 !== ''">
								<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ text_question_3 }}</h5>
								<div class="text">
									{{ answer_2 }}
								</div>
							</div>
							<div v-if="text_question_4 !== ''">
								<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ text_question_2 }}</h5>
								<div class="text">
									{{ answer_2 }}
								</div>
							</div>
							<div v-if="text_question_5 !== ''">
								<h5><img src="@/assets/img/icon_Q.svg" alt="" /> {{ text_question_5 }}</h5>
								<div class="text">
									{{ answer_2 }}
								</div>
							</div>
						</div>
					</div>
					<div class="portpolio_career">
						<h2><img src="@/assets/img/img_pin.png" alt="" />이력/경력</h2>
						<div class="textarea">
							<h5 v-if="isNew === 0">총 경력 {{ career }}</h5>
							<h5 v-if="isNew === 1">신입</h5>
							<div class="text">
								{{ introduction }}
							</div>
						</div>
					</div>
					<div class="portpolio_education">
						<h2><img src="@/assets/img/img_pin.png" alt="" />최종 학력</h2>
						<div class="textarea">
							<h5>
								{{ schoolName }}
								<span v-if="isGraduate === 1">학사졸업</span>
								<span v-if="isGraduate === 2">학사 재학중</span>
								<span v-if="isGraduate === 3">석사 졸업</span>
								<span v-if="isGraduate === 4">석사 재학 중</span>
								<span v-if="isGraduate === 5">박사 졸업</span>
								<span v-if="isGraduate === 6">박사 재학 중</span>
							</h5>
							<div class="text">
								{{ major }} 전공 / {{ subMajor }}
								<span v-if="subMajorType === 1">복수전공</span>
								<span v-if="subMajorType === 2">부전공</span>
							</div>
						</div>
						<div class="btn-wrap">
							<button style="margin: 40px 5px 0 0" @click="$router.push('/applicant/list')" class="btn-gray">목록 보기</button>
						</div>
					</div>
				</div>

				<div class="contents_right">
					<div class="memo">
						<h5>메모</h5>
						<div class="memo_input">
							<textarea class="memo_text" v-model="memoWrite"></textarea>
							<button type="button" class="memo_btn" @click="memoReg">등록</button>
						</div>
						<div class="memo_contents">
							<div class="memo_contents_empty">
								<img src="@/assets/img/memo_empty.svg" alt="" />
							</div>
							<div class="memo_contents_history">
								<ul class="memo_list">
									<li v-for="(item, index) in memo" :key="index">
										<span>{{ item.contents }}</span
										><span style="color: #bebebe; font-size: 12px"><br />{{ item.regDate.substr(0, 10) }}</span>
										<hr />
									</li>
									<li v-if="memo.length === 0">메모가 없습니다.</li>
								</ul>
							</div>
						</div>
						<button type="button" class="likeBtn">
							<span v-if="like === false" @click="likeSet"><img src="@/assets/img/icon_heart_off.svg" />관심지원자 등록</span>
							<span v-else @click="likeSet"><img src="@/assets/img/icon_heart_on.svg" />관심지원자 해제</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getAdvertisemenNameCookie } from '@/utils/cookie';
import 'video.js/dist/video-js.css';
import { videoPlayer } from 'vue-video-player';
export default {
	components: {
		videoPlayer,
	},
	computed: {
		...mapGetters('applicant', ['getApplicantDetail', 'getPostDetail', 'getAppicantMemo']),
	},
	data() {
		return {
			memo: [],
			memoWrite: '',
			contents: '',
			text_question_1: '',
			text_question_2: '',
			text_question_3: '',
			text_question_4: '',
			text_question_5: '',
			advertisemenName: '',
			applyUserNo: '',
			nextUser: null,
			prevUser: null,
			like: false,
			applyUserName: '',
			applyPhoneNo: '',
			applyEmail: '',
			career: '',
			answer_1: '',
			answer_2: '',
			answer_3: '',
			answer_4: '',
			answer_5: '',
			schoolName: '',
			major: '',
			isGraduate: null,
			subMajor: '',
			subMajorType: null,
			isNew: null,
			introduction: '',
			playerOptions: {
				// videojs options
				muted: true,
				language: 'en',
				playbackRates: [0.7, 1.0, 1.5, 2.0],
				sources: [
					{
						type: 'video/mp4',
						src: '',
					},
				],
				poster: '/static/images/author.jpg',
			},
		};
	},
	mounted() {
		this.reload();
		this.memoList();
	},
	methods: {
		async reload() {
			this.advertisemenName = getAdvertisemenNameCookie();
			await this.$store.dispatch('applicant/APPLICANT_DETAIL', this.$route.params.id);
			await this.$store.dispatch('applicant/POST_DETAIL', this.$route.params.postId);
			this.contents = this.getPostDetail.contents;
			this.text_question_1 = this.getPostDetail.text_question_1;
			this.text_question_2 = this.getPostDetail.text_question_2;
			this.text_question_3 = this.getPostDetail.text_question_3;
			this.text_question_4 = this.getPostDetail.text_question_4;
			this.text_question_5 = this.getPostDetail.text_question_5;
			this.like = this.getApplicantDetail.like;
			this.nextUser = this.getApplicantDetail.nextUser;
			this.prevUser = this.getApplicantDetail.prevUser;
			const detail = this.getApplicantDetail.result;
			this.applyUserNo = detail.applyUserNo;
			this.applyUserName = detail.applyUserName;
			this.applyPhoneNo = detail.applyPhoneNo;
			this.applyEmail = detail.applyEmail;
			const resume = this.getApplicantDetail.result.resume[0];
			this.playerOptions.sources[0].src = resume.videoUrl;
			this.career = resume.career;
			this.answer_1 = resume.answer_1;
			this.answer_2 = resume.answer_2;
			this.answer_3 = resume.answer_3;
			this.answer_4 = resume.answer_4;
			this.answer_5 = resume.answer_5;
			this.schoolName = resume.schoolName;
			this.major = resume.major;
			this.isGraduate = resume.isGraduate;
			this.subMajor = resume.subMajor;
			this.subMajorType = resume.subMajorType;
			this.isNew = resume.isNew;
			this.introduction = resume.introduction;
		},
		async memoList() {
			await this.$store.dispatch('applicant/APPLICANT_MEMO', this.$route.params.id);
			this.memo = this.getAppicantMemo[0];
		},
		async likeSet() {
			console.log(this.applyUserNo);
			await await this.$store.dispatch('common/LIKE', { applyUserNo: this.applyUserNo });
			this.like = !this.like;
		},
		prev() {
			this.$router.push(`/applicant/detail/${this.prevUser}`);
			this.reload();
		},
		next() {
			this.$router.push(`/applicant/detail/${this.nextUser}`);
			this.reload();
		},
		async memoReg() {
			await this.$store.dispatch('applicant/APPLICANT_MEMO_WRITE', { contents: this.memoWrite, id: this.$route.params.id });
			this.memoList();
		},
	},
};
</script>

<style>
.btn-wrap {
	text-align: center;
}
.btn-gray {
	border: 1px solid #ccc;
	border-radius: 5px;
	font-size: 14px;
	padding: 3px 15px;
}
.header_profile {
	z-index: 1000;
}
.video-player-box > div {
	width: 716px;
	height: 402px;
}
.video-js .vjs-big-play-button {
	left: 50% !important;
	top: 50% !important;
	transform: translate(-50%, -50%);
}
.opacity {
	opacity: 0.3;
}
.question > div {
	margin-bottom: 20px;
}
.question > div:last-child {
	margin-bottom: 0px;
}
</style>
