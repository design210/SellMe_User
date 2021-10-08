import { createInstanceWithAuth } from '../index';
function getCompanyList(data) {
	let param = {
		size: data.size,
		page: data.page,
		searchText: data.searchText,
	};
	return createInstanceWithAuth('/company/list', {}, param, 'application/json; charset=utf-8').get();
}
function getCompanyDetail(data) {
	return createInstanceWithAuth(`/company/${data.companySid}`, {}, {}, 'application/json; charset=utf-8').get();
}
function setCompany(data) {
	var frm = new FormData();
	if (data.channeltuneFiles.length > 0) {
		data.channeltuneFiles.forEach(row => {
			frm.append('channeltuneFiles[]', row);
		});
	}
	if (data.companyParentsSid !== null) {
		frm.append('companyParentsSid', data.companyParentsSid);
	}
	frm.append('companyNation', data.companyNation);
	frm.append('companyKind', data.companyKind);
	frm.append('companyName', data.companyName);
	frm.append('companyCrNum', data.companyCrNum);
	frm.append('companyBtNum', data.companyBtNum);
	frm.append('companyCeo', data.companyCeo);
	frm.append('companyIndustries', data.companyIndustries);
	frm.append('companyTypeOfBusiness', data.companyTypeOfBusiness);
	frm.append('companyZipCode', data.companyZipCode);
	frm.append('companyAddress1', data.companyAddress1);
	frm.append('companyAddress2', data.companyAddress2);
	frm.append('companyUseFlag', data.companyUseFlag);
	frm.append('companyMemo', data.companyMemo);
	return createInstanceWithAuth('/company', frm, {}, 'multipart/form-data').post();
}
function companyDelete(id) {
	return createInstanceWithAuth(`/company/${id}`, {}, {}, 'application/json; charset=utf-8').delete();
}
function companyModify(data) {
	var frm = new FormData();
	if (data.channeltuneFiles.length > 0) {
		data.channeltuneFiles.forEach(row => {
			frm.append('channeltuneFiles[]', row);
		});
	}
	if (data.companyParentsSid !== null) {
		frm.append('companyParentsSid', data.companyParentsSid);
	}
	frm.append('companyNation', data.companyNation);
	frm.append('companyKind', data.companyKind);
	frm.append('companyName', data.companyName);
	frm.append('companyCrNum', data.companyCrNum);
	frm.append('companyBtNum', data.companyBtNum);
	frm.append('companyCeo', data.companyCeo);
	frm.append('companyIndustries', data.companyIndustries);
	frm.append('companyTypeOfBusiness', data.companyTypeOfBusiness);
	frm.append('companyZipCode', data.companyZipCode);
	frm.append('companyAddress1', data.companyAddress1);
	frm.append('companyAddress2', data.companyAddress2);
	frm.append('companyUseFlag', data.companyUseFlag);
	frm.append('companyMemo', data.companyMemo);
	return createInstanceWithAuth(`/company/${data.companySid}`, frm, {}, 'multipart/form-data').post();
}
export { getCompanyList, getCompanyDetail, companyDelete, setCompany, companyModify };
