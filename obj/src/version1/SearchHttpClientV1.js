"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let _ = require('lodash');
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class SearchHttpClientV1 extends pip_services3_rpc_node_1.CommandableHttpClient {
    constructor() {
        super('v1/search');
    }
    getRecords(correlationId, filter, paging, sort, callback) {
        this.callCommand('get_records', correlationId, {
            filter: filter,
            paging: paging,
            sort: sort
        }, (err, page) => {
            if (page == null || page.data.length == 0) {
                callback(err, page);
                return;
            }
            page.data = _.map(page.data, (record) => this.fixRecord(record));
            callback(err, page);
        });
    }
    getRecordById(correlationId, recordId, callback) {
        this.callCommand('get_record_by_id', correlationId, {
            record_id: recordId
        }, (err, record) => {
            callback(err, this.fixRecord(record));
        });
    }
    setRecord(correlationId, record, callback) {
        this.callCommand('set_record', correlationId, {
            record: record
        }, (err, record) => {
            callback(err, this.fixRecord(record));
        });
    }
    updateRecord(correlationId, record, callback) {
        this.callCommand('update_record', correlationId, {
            record: record
        }, (err, record) => {
            callback(err, this.fixRecord(record));
        });
    }
    deleteRecordById(correlationId, recordId, callback) {
        this.callCommand('delete_record_by_id', correlationId, {
            record_id: recordId
        }, (err, record) => {
            callback(err, this.fixRecord(record));
        });
    }
    fixRecord(record) {
        if (record == null)
            return null;
        record.time = pip_services3_commons_node_1.DateTimeConverter.toNullableDateTime(record.time);
        return record;
    }
}
exports.SearchHttpClientV1 = SearchHttpClientV1;
//# sourceMappingURL=SearchHttpClientV1.js.map