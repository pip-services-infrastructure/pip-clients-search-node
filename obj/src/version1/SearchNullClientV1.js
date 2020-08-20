"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class SearchNullClientV1 {
    constructor(config) { }
    getRecords(correlationId, filter, paging, sort, callback) {
        callback(null, new pip_services3_commons_node_1.DataPage());
    }
    getRecordById(correlationId, recordId, callback) {
        callback(null, null);
    }
    setRecord(correlationId, record, callback) {
        callback(null, null);
    }
    updateRecord(correlationId, record, callback) {
        callback(null, null);
    }
    deleteRecordById(correlationId, recordId, callback) {
        callback(null, null);
    }
}
exports.SearchNullClientV1 = SearchNullClientV1;
//# sourceMappingURL=SearchNullClientV1.js.map