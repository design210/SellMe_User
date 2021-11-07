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
function getAppicantMemo(id) {
	return createInstanceWithAuth(`/apply/${id}/memo`, {}, {}, 'application/json; charset=utf-8').get();
}
function getApplicantLikeList(data) {
	let param = {
		pageNo: data.pageNo,
		pageSize: data.pageSize,
	};
	return createInstanceWithAuth(`/apply/post/${data.id}/liked`, {}, param, 'application/json; charset=utf-8').get();
}
function getAppicantMemoWrite(data) {
	let paramData = {
		contents: data.contents,
	};
	return createInstanceWithAuth(`/apply/${data.id}/memo`, paramData, {}, 'application/json; charset=utf-8').post();
}
export { getAppicantMemoWrite, getAppicantMemo, getApplicantList, getApplicantAdvList, getApplicantDetail, getApplicantLikeList, getPostDetail };
