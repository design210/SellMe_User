<template>
	<div>
		<div class="appList_container">
			<nav>
				<p>채용 공고{{ companyUserNo }}</p>
				<ul class="position_name" v-for="(item, index) in uiList" :key="index">
					<li @click="callList(item.postNo)">{{ item.subject }}</li>
				</ul>
			</nav>

			<div class="app_container">
				<div class="applicantList">
					<h2>퍼포먼스 리드 마케터 지원자 리스트</h2>
					<div class="tab">
						<div v-if="tab === 'all'">
							<div class="tab_all" @click="tab = 'all'">
								전체 지원자 (<span>{{ totalCount }}</span
								>)
							</div>
							<div class="tab_liked" @click="tab = 'liked'">관심 지원자 (<span>20</span>)</div>
						</div>
						<div v-if="tab === 'liked'">
							<div class="tab_liked" @click="tab = 'all'">
								전체 지원자 (<span>{{ totalCount }}</span
								>)
							</div>
							<div class="tab_all" @click="tab = 'liked'">관심 지원자 (<span>20</span>)</div>
						</div>
						<div class="tab_excelBtn">
							<a><img src="@/assets/img/Icon_excel.svg" />엑셀 다운</a>
						</div>
					</div>
					<div class="applicantList_list">
						<ul id="applicantList">
							<li class="applicantList_card" v-for="(item, index) in applicantList" :key="index">
								<div class="app_card">
									<a href="#"><img src="#" /></a>
								</div>
								<div class="app_div1">
									<div class="app_name">{{ item.applyUserName }}</div>
									<div class="app_career">경력 {{ item.resume.career }}</div>
								</div>
								<div class="app_education">{{ item.resume.schoolName }}<br />{{ item.resume.major }}</div>
								<div class="app_div3">
									<div class="app_M">
										M <span class="app_phone">{{ item.applyPhoneNo }}</span>
									</div>
									<div class="app_E">
										E <span class="app_email">{{ item.applyEmail }}</span>
									</div>
								</div>
								<div class="app_div4">
									<div class="app_bookmark" @click="favoriteRge(true)" v-if="favorite == false">
										북마크<img src="@/assets/img/icon_bookmark_off.svg" />
									</div>
									<div class="app_bookmark" @click="favoriteRge(false)" v-else>북마크<img src="@/assets/img/icon_bookmark_on.svg" /></div>
									<div class="app_applyDate">{{ item.regDate }} {{ item.regTime }} 지원</div>
								</div>
							</li>
						</ul>
					</div>
					<!--지원자 없을 경우 -->
					<div class="applicantList_empty" style="display: block" v-if="applicantList.length === 0">
						<div class="applicantList_zero">
							<img src="@/assets/img/icon_emptylist_text.svg" />
						</div>
					</div>
					<div class="pagination">
						<v-pagination v-model="pageNo" :length="totalPage" :total-visible="7"></v-pagination>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getCompanyUserNoCookie } from '@/utils/cookie';
export default {
	computed: {
		...mapGetters('applicant', ['getApplicantList', 'getApplicantAdvList']),
	},
	data() {
		return {
			companyUserNo: '',
			tab: 'all',
			favorite: false,
			uiList: [],
			pageNo: 1,
			pageSize: 10,
			totalCount: null,
			applicantList: [],
			totalPage: null,
		};
	},
	mounted() {
		this.companyUserNo = getCompanyUserNoCookie();
		this.reload();
	},
	methods: {
		async reload() {
			await this.$store.dispatch('applicant/APPLICANT_LIST', this.companyUserNo);
			this.uiList = this.getApplicantList.items;
			this.callList(this.uiList[0].postNo);
		},
		async callList(id) {
			await this.$store.dispatch('applicant/APPLICANT_ADV_LIST', {
				id,
				pageNo: this.pageNo,
				pageSize: this.pageSize,
			});
			this.tab = 'all';
			this.applicantList = this.getApplicantAdvList.result;
			this.applicantList.forEach(ele => {
				ele.regTime = ele.regDate.substr(11, 5);
				ele.regDate = ele.regDate.substr(0, 10);
			});
			this.totalCount = this.getApplicantAdvList.totalCount;
		},
		favoriteRge(status) {},
	},
};
</script>

<style>
.position_name {
	cursor: pointer;
}
</style>
