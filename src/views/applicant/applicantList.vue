<template>
	<div>
		<v-file-input accept="image/*" label="File input" @change="selectFile" placeholder="파일첨부"></v-file-input>
		<div class="appList_container">
			<nav>
				<p>채용 공고</p>
				<ul class="position_name" id="positionName">
					<li>경력직 퍼포먼스 마케터</li>
				</ul>
			</nav>

			<div class="app_container">
				<div class="applicantList">
					<h2>퍼포먼스 리드 마케터 지원자 리스트</h2>
					<div class="tab">
						<div v-if="tab === 'all'">
							<div class="tab_all" @click="tab = 'all'">전체 지원자 (<span>56</span>)</div>
							<div class="tab_liked" @click="tab = 'liked'">관심 지원자 (<span>20</span>)</div>
						</div>
						<div v-if="tab === 'liked'">
							<div class="tab_liked" @click="tab = 'all'">전체 지원자 (<span>56</span>)</div>
							<div class="tab_all" @click="tab = 'liked'">관심 지원자 (<span>20</span>)</div>
						</div>
						<div class="tab_excelBtn">
							<a><img src="@/assets/img/Icon_excel.svg" />엑셀 다운</a>
						</div>
					</div>
					<div class="applicantList_empty">
						<div class="applicantList_zero">
							<img src="@/assets/img/icon_emptylist_text.svg" />
						</div>
					</div>
					<div class="applicantList_list">
						<ul id="applicantList">
							<li class="applicantList_card" id="applicantCard">
								<div class="app_card">
									<a href="#"><img src="#" /></a>
								</div>
								<div class="app_div1">
									<div class="app_name"><a href="#">김셀미</a></div>
									<div class="app_career">경력 6년 4개월</div>
								</div>
								<div class="app_education">건국대학교 글로벌 캠퍼스<br />나노전자기계공학과 학사 졸업</div>
								<div class="app_div3">
									<div class="app_M">M <span class="app_phone">010-0000-0000</span></div>
									<div class="app_E">E <span class="app_email">letuin.sellme@gmail.com</span></div>
								</div>
								<div class="app_div4">
									<div class="app_bookmark" @click="favoriteRge(true)" v-if="favorite == false">
										북마크<img src="@/assets/img/icon_bookmark_off.svg" />
									</div>
									<div class="app_bookmark" @click="favoriteRge(false)" v-else>북마크<img src="@/assets/img/icon_bookmark_on.svg" /></div>
									<div class="app_applyDate">2021.10.13 11:44 지원</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="pagination">
						<div class="page_prev"><img src="@/assets/img/icon_pg_arrowL.svg" /></div>
						<div class="page_1">1</div>
						<div class="page_2">2</div>
						<div class="page_3">3</div>
						<div class="page_4">4</div>
						<div class="page_5">5</div>
						<div class="page_next"><img src="@/assets/img/icon_pg_arrowR.svg" /></div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import axios from 'axios';
export default {
	computed: {
		...mapGetters('common', ['getFileInfo']),
	},
	data() {
		return {
			favorite: false,
			tab: 'all',
		};
	},
	mounted() {
		const id = 7;
		const url = `http://3.38.88.178:3000/post/${id}`;
		axios
			.get(url)
			.then(response => console.log(response))
			.catch(error => console.log(error));
	},
	methods: {
		favoriteRge(status) {
			if (status === true) {
				this.favorite = true;
			} else if (status === false) {
				this.favorite = false;
			}
		},
		selectFile(file) {
			this.upload(file);
		},
		async upload(file) {
			await this.$store.dispatch('common/FILE_UPLOAD', {
				filePath: file.name,
				contentType: file.type,
				fileSize: file.size,
			});
			const url = this.getFileInfo.s3Url;
			await axios
				.put(url, file)
				.then(response => console.log(response))
				.catch(error => console.log(error));
		},
	},
};
</script>

<style></style>
