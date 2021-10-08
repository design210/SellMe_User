import VueCookies from 'vue-cookies';
//생성
function saveAccessTokenCookie(value) {
	VueCookies.set('accessToken', value, '0');
}
function adminUserSidCookie(value) {
	VueCookies.set('adminUserSid', value, '0');
}
function adminUserNameCookie(value) {
	VueCookies.set('adminUserName', value, '0');
}
//호출
function getAccessTokenCookie() {
	return VueCookies.get('accessToken');
}
function getAdminUserSidCookie() {
	return VueCookies.get('adminUserSid');
}
//삭제
function deleteCookie(value) {
	VueCookies.remove(value);
}

export { saveAccessTokenCookie, adminUserSidCookie, adminUserNameCookie, deleteCookie, getAccessTokenCookie, getAdminUserSidCookie };
