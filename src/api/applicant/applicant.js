import { createInstanceWithAuth } from '../index';
function getApplicantList(id) {
	return createInstanceWithAuth(`/post/${id}/company`, {}, {}, 'application/json; charset=utf-8').get();
}
function getApplicantAdvList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};
	return createInstanceWithAuth(`/apply/post/${data.id}`, {}, param, 'application/json; charset=utf-8').get();
}
function getApplicantDetail(id) {
	return createInstanceWithAuth(`/apply/${id}`, {}, {}, 'application/json; charset=utf-8').get();
}
function getPostDetail(id) {
	return createInstanceWithAuth(`/post/${id}`, {}, {}, 'application/json; charset=utf-8').get();
}
function getApplicantLikeList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};
	return createInstanceWithAuth(`/apply/post/${data.id}/liked`, {}, param, 'application/json; charset=utf-8').get();
}
export { getApplicantList, getApplicantAdvList, getApplicantDetail, getApplicantLikeList, getPostDetail };
