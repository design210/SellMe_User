<template>
	<div>
		<div class="appList_container">
			<nav class="lnb">
				<p>채용 공고</p>
				<ul class="position_name" v-for="(item, index) in uiList" :key="index">
					<li @click="[callLikeList({ postNo: item.postNo }), callList({ postNo: item.postNo, subject: item.subject }), resetTab()]">
						{{ item.subject }}
					</li>
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
							<div class="tab_liked" @click="tab = 'liked'">
								관심 지원자 (<span>{{ totalLikeCount }}</span
								>)
							</div>
						</div>
						<div v-if="tab === 'liked'">
							<div class="tab_liked" @click="tab = 'all'">
								전체 지원자 (<span>{{ totalCount }}</span
								>)
							</div>
							<div class="tab_all" @click="tab = 'liked'">
								관심 지원자 (<span>{{ totalLikeCount }}</span
								>)
							</div>
						</div>
						<div class="tab_excelBtn" @click="downloadExcel">
							<a><img src="@/assets/img/Icon_excel.svg" />엑셀 다운</a>
						</div>
					</div>
					<!-- 전체 지원자 -->
					<div class="applicantList_list" v-if="tab === 'all'" style="margin-bottom: 50px">
						<ul id="applicantList">
							<li class="applicantList_card" v-for="(item, index) in applicantList" :key="index">
								<div class="app_card">
									<a href="#"><img src="#" /></a>
								</div>
								<div class="app_div1">
									<div class="app_name" @click="detail(item.applyUserNo)">{{ item.applyUserName }}</div>
									<div class="app_career" v-if="item.resume.isNew === 0">경력 {{ item.resume.career }}</div>
									<div class="app_career" v-if="item.resume.isNew === 1">신입</div>
								</div>
								<div class="app_education">
									{{ item.resume.schoolName }}
									<span v-if="item.resume.isGraduate === 1">학사졸업</span>
									<span v-if="item.resume.isGraduate === 2">학사 재학중</span>
									<span v-if="item.resume.isGraduate === 3">석사 졸업</span>
									<span v-if="item.resume.isGraduate === 4">석사 재학 중</span>
									<span v-if="item.resume.isGraduate === 5">박사 졸업</span>
									<span v-if="item.resume.isGraduate === 6">박사 재학 중</span>
									<br />
									{{ item.resume.major }} 전공 / {{ item.resume.subMajor }}
									<span v-if="item.resume.subMajorType === 1">복수전공</span>
									<span v-if="item.resume.subMajorType === 2">부전공</span>
								</div>
								<div class="app_div3">
									<div class="app_M">
										M <span class="app_phone">{{ item.applyPhoneNo }}</span>
									</div>
									<div class="app_E">
										E <span class="app_email">{{ item.applyEmail }}</span>
									</div>
								</div>
								<div class="app_div4">
									<div
										class="app_bookmark"
										@click="[(item.like = !item.like), like({ applyUserNo: item.applyUserNo, like: item.like })]"
										v-if="item.like == false"
									>
										북마크<img src="@/assets/img/icon_bookmark_off.svg" />
									</div>
									<div class="app_bookmark" @click="[(item.like = !item.like), like({ applyUserNo: item.applyUserNo, like: item.like })]" v-else>
										북마크<img src="@/assets/img/icon_bookmark_on.svg" />
									</div>
									<div class="app_applyDate">{{ item.regDate }} {{ item.regTime }} 지원</div>
								</div>
							</li>
						</ul>
						<!--지원자 없을 경우 -->
						<div class="applicantList_empty" v-if="totalCount === 0">
							<div class="applicantList_zero">
								<img src="@/assets/img/icon_emptylist_text.svg" />
							</div>
						</div>
						<div>
							<v-pagination v-model="pageNo" :length="totalPage" :total-visible="10"></v-pagination>
						</div>
					</div>
					<!-- 즐겨찾기 지원자 -->
					<div class="applicantList_list" v-if="tab === 'liked'" style="margin-bottom: 50px">
						<ul id="applicantList">
							<li class="applicantList_card" v-for="(item, index) in applicantLikeList" :key="index">
								<div class="app_card">
									<a href="#"><img src="#" /></a>
								</div>
								<div class="app_div1">
									<div class="app_name" @click="detail(item.applyUserNo)">{{ item.applyUserName }}</div>
									<div class="app_career" v-if="item.resume.isNew === 0">경력 {{ item.resume.career }}</div>
									<div class="app_career" v-if="item.resume.isNew === 1">신입</div>
								</div>
								<div class="app_education">
									{{ item.resume.schoolName }}
									<span v-if="item.resume.isGraduate === 1">학사졸업</span>
									<span v-if="item.resume.isGraduate === 2">학사 재학중</span>
									<span v-if="item.resume.isGraduate === 3">석사 졸업</span>
									<span v-if="item.resume.isGraduate === 4">석사 재학 중</span>
									<span v-if="item.resume.isGraduate === 5">박사 졸업</span>
									<span v-if="item.resume.isGraduate === 6">박사 재학 중</span>
									<br />
									{{ item.resume.major }} 전공 / {{ item.resume.subMajor }}
									<span v-if="item.resume.subMajorType === 1">복수전공</span>
									<span v-if="item.resume.subMajorType === 2">부전공</span>
								</div>
								<div class="app_div3">
									<div class="app_M">
										M <span class="app_phone">{{ item.applyPhoneNo }}</span>
									</div>
									<div class="app_E">
										E <span class="app_email">{{ item.applyEmail }}</span>
									</div>
								</div>
								<div class="app_div4">
									<div
										class="app_bookmark"
										@click="[(item.like = !item.like), like({ applyUserNo: item.applyUserNo, like: item.like })]"
										v-if="item.like == false"
									>
										북마크<img src="@/assets/img/icon_bookmark_off.svg" />
									</div>
									<div class="app_bookmark" @click="[(item.like = !item.like), like({ applyUserNo: item.applyUserNo, like: item.like })]" v-else>
										북마크<img src="@/assets/img/icon_bookmark_on.svg" />
									</div>
									<div class="app_applyDate">{{ item.regDate }} {{ item.regTime }} 지원</div>
								</div>
							</li>
						</ul>
						<!--지원자 없을 경우 -->
						<div class="applicantList_empty" v-if="totalLikeCount === 0">
							<div class="applicantList_zero">
								<img src="@/assets/img/icon_emptylist_text.svg" />
							</div>
						</div>
						<div>
							<v-pagination v-model="pageLikeNo" :length="totalLikePage" :total-visible="10"></v-pagination>
						</div>
					</div>
					<!-- 엑셀 출력용 -->
					<table id="excel" style="display: none">
						<tr>
							<td>이름</td>
							<td>학교</td>
							<td>전공</td>
							<td>경력</td>
							<td>전화번호</td>
							<td>이메일</td>
							<td>지원날짜</td>
						</tr>
						<tr v-for="(item, index) in excelList" :key="index">
							<td>{{ item.applyUserName }}</td>
							<td>{{ item.resume.schoolName }}</td>
							<td>{{ item.resume.major }}</td>
							<td>{{ item.resume.career }}</td>
							<td>{{ item.applyPhoneNo }}</td>
							<td>{{ item.applyEmail }}</td>
							<td>{{ item.regDate }} {{ item.regTime }}</td>
						</tr>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import { getCompanyUserNoCookie, saveAdvertisemenNameCookie } from '@/utils/cookie';
import XLSX from 'sheetjs-style';
export default {
	computed: {
		...mapGetters('applicant', ['getApplicantList', 'getApplicantAdvList', 'getApplicantLikeList']),
	},
	data() {
		return {
			postNo: '',
			companyUserNo: '',
			tab: 'all',
			uiList: [],
			pageNo: 1,
			pageSize: 30,
			totalPage: null,
			totalCount: null,
			pageLikeNo: 1,
			pageLikeSize: 30,
			totalLikePage: null,
			totalLikeCount: null,
			applicantList: [],
			applicantLikeList: [],
			excelList: [],
		};
	},
	mounted() {
		this.companyUserNo = getCompanyUserNoCookie();
		this.reload();
	},
	watch: {
		pageNo() {
			this.reload();
		},
		pageLikeNo() {
			this.reload();
		},
		tab(n) {
			this.callList(this.posNo);
			this.callLikeList(this.posNo);
			this.excelSet(n);
		},
	},
	methods: {
		async reload() {
			await this.$store.dispatch('applicant/APPLICANT_LIST', this.companyUserNo);
			this.uiList = this.getApplicantList.items;
			this.callList({ postNo: this.uiList[0].postNo, subject: this.uiList[0].subject });
			this.callLikeList();
		},
		async callList(data) {
			if (data !== undefined) {
				this.postNo = data.postNo;
				saveAdvertisemenNameCookie(data.subject);
			}
			await this.$store.dispatch('applicant/APPLICANT_ADV_LIST', {
				id: this.postNo,
				pageNo: this.pageNo,
				pageSize: this.pageSize,
			});
			this.applicantList = this.getApplicantAdvList.result;
			this.applicantList.forEach(ele => {
				ele.regTime = ele.regDate.substr(11, 5);
				ele.regDate = ele.regDate.substr(0, 10);
			});
			this.totalCount = this.getApplicantAdvList.totalCount;
			this.totalPage = this.getApplicantAdvList.totalPage;
			this.excelSet(this.tab);
		},
		async callLikeList(data) {
			if (data !== undefined) {
				this.postNo = data.postNo;
			}
			await this.$store.dispatch('applicant/APPLICANT_LIKE_LIST', {
				id: this.postNo,
				pageNo: this.pageLikeNo,
				pageSize: this.pageLikeSize,
			});
			if (this.getApplicantLikeList.msg !== '') {
				this.totalLikeCount = 0;
				this.applicantLikeList = [];
			}
			if (this.getApplicantLikeList.msg == undefined) {
				this.applicantLikeList = this.getApplicantLikeList.result;
				this.applicantLikeList.forEach(ele => {
					ele.regTime = ele.regDate.substr(11, 5);
					ele.regDate = ele.regDate.substr(0, 10);
				});
				this.totalLikePage = this.getApplicantLikeList.totalPage;
				this.totalLikeCount = this.getApplicantLikeList.totalCount;
			}
		},
		resetTab() {
			this.tab = 'all';
		},
		async excelSet(data) {
			if (data == 'all') {
				//엑셀용
				await this.$store.dispatch('applicant/APPLICANT_ADV_LIST', {
					id: this.postNo,
					pageNo: 1,
					pageSize: 10000,
				});
				this.excelList = this.getApplicantAdvList.result;
				this.excelList.forEach(ele => {
					ele.regTime = ele.regDate.substr(11, 5);
					ele.regDate = ele.regDate.substr(0, 10);
				});
			} else {
				//엑셀용
				await this.$store.dispatch('applicant/APPLICANT_LIKE_LIST', {
					id: this.postNo,
					pageNo: 1,
					pageSize: 10000,
				});
				if (this.getApplicantLikeList.msg !== '') {
					this.excelList = [];
				}
				if (this.getApplicantLikeList.msg == undefined) {
					this.excelList = this.getApplicantLikeList.result;
					this.excelList.forEach(ele => {
						ele.regTime = ele.regDate.substr(11, 5);
						ele.regDate = ele.regDate.substr(0, 10);
					});
				}
			}
		},
		async like(data) {
			await this.$store.dispatch('common/LIKE', data);
			this.callLikeList();
			this.excelSet(this.tab);
			this.callList();
		},
		detail(id) {
			this.$router.push(`/applicant/detail/${id}/${this.postNo}`);
		},
		downloadExcel() {
			if (this.excelList.length > 0) {
				var excelData = XLSX.utils.table_to_sheet(document.getElementById('excel'));
				excelData.A1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.B1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.C1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.D1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.E1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.F1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				excelData.G1.s = {
					font: {
						sz: 12,
						bold: true,
					},
					alignment: {
						horizontal: 'center',
					},
					fill: {
						fgColor: {
							rgb: 'cccccc',
						},
					},
				};
				var workBook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workBook, excelData, '지원 현황');
				XLSX.writeFile(workBook, '지원자 리스트.xlsx');
			} else {
				alert('지원자 데이터가 없습니다.');
			}
		},
	},
};
</script>

<style>
.position_name,
.app_name {
	cursor: pointer;
}
</style>
