import VueCookies from 'vue-cookies';
//생성
function saveAccessTokenCookie(value) {
	VueCookies.set('accessToken', value, '0');
}
function saveCompanyNameCookie(value) {
	VueCookies.set('companyName', value, '0');
}
function saveCompanyLogoCookie(value) {
	VueCookies.set('companyLogo', value, '0');
}
function saveCompanyUserNoCookie(value) {
	VueCookies.set('companyUserNo', value, '0');
}
function saveAdvertisemenNameCookie(value) {
	VueCookies.set('advertisemenName', value, '0');
}
//호출
function getAccessTokenCookie() {
	return VueCookies.get('accessToken');
}
function getCompanyNameCookie() {
	return VueCookies.get('companyName');
}
function getCompanyLogoCookie() {
	return VueCookies.get('companyLogo');
}
function getCompanyUserNoCookie() {
	return VueCookies.get('companyUserNo');
}
function getAdvertisemenNameCookie() {
	return VueCookies.get('advertisemenName');
}
//삭제
function deleteCookie(value) {
	VueCookies.remove(value);
}

export {
	getAdvertisemenNameCookie,
	saveCompanyUserNoCookie,
	getCompanyUserNoCookie,
	saveAccessTokenCookie,
	deleteCookie,
	getAccessTokenCookie,
	saveCompanyNameCookie,
	getCompanyLogoCookie,
	getCompanyNameCookie,
	saveCompanyLogoCookie,
	saveAdvertisemenNameCookie,
};
