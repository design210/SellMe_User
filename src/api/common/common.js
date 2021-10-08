import { createInstanceWithAuth } from '../index';
function fileDelete(id) {
	return createInstanceWithAuth(`/file/${id}`, {}, {}, 'application/json; charset=utf-8').delete();
}
function getMenuList(data) {
	let param = {
		menuManagementKind: 'SYS21928B009',
		menuManagementMember: data.id,
	};
	return createInstanceWithAuth('/menumanagement/membermenulist', {}, param, 'application/json; charset=utf-8').get();
}
export { fileDelete, getMenuList };
