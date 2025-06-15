export function initializeDataTable(tableRef) {
	console.log('init: ' + tableRef);
	$('#' + tableRef).DataTable();
}

export function destroyDataTable(tableRef) {
	console.log('dest: ' + tableRef);
	$('#' + tableRef).DataTable().destroy();
}