"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_rpc_node_1 = require("pip-services3-rpc-node");
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
class SearchDirectClientV1 extends pip_services3_rpc_node_1.DirectClient {
    constructor() {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_node_1.Descriptor('pip-services-search', 'controller', '*', '*', '1.0'));
    }
    getRecords(correlationId, filter, paging, callback) {
        let timing = this.instrument(correlationId, 'search.get_records');
        this._controller.getRecords(correlationId, filter, paging, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    getRecordById(correlationId, recordId, callback) {
        let timing = this.instrument(correlationId, 'search.get_record_by_id');
        this._controller.getRecordById(correlationId, recordId, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    setRecord(correlationId, record, callback) {
        let timing = this.instrument(correlationId, 'search.set_record');
        this._controller.setRecord(correlationId, record, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    updateRecord(correlationId, record, callback) {
        let timing = this.instrument(correlationId, 'search.update_record');
        this._controller.updateRecord(correlationId, record, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
    deleteRecordById(correlationId, recordId, callback) {
        let timing = this.instrument(correlationId, 'search.delete_record_by_id');
        this._controller.deleteRecordById(correlationId, recordId, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
}
exports.SearchDirectClientV1 = SearchDirectClientV1;
//# sourceMappingURL=SearchDirectClientV1.js.map