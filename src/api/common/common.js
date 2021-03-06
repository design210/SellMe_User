import { createInstanceWithAuth } from '../index';
function fileUpload(data) {
	let paramData = {
		filePath: data.filePath,
		contentType: data.contentType,
		fileSize: data.fileSize,
	};
	return createInstanceWithAuth('/auth/signedUrl', paramData, {}, 'application/json; charset=utf-8').post();
}

function setLike(data) {
	return createInstanceWithAuth(`/company/${data.applyUserNo}/apply`, {}, {}, 'application/json; charset=utf-8').put();
}

export { fileUpload, setLike };
