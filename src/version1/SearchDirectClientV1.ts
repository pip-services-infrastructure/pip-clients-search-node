import { ISearchClientV1 } from './ISearchClientV1';
import { DirectClient } from 'pip-services3-rpc-node';
import { Descriptor, FilterParams, PagingParams, DataPage } from 'pip-services3-commons-node';
import { SearchRecordV1 } from './SearchRecordV1';


export class SearchDirectClientV1 extends DirectClient<any> implements ISearchClientV1 {

    public constructor() {
        super();
        this._dependencyResolver.put('controller', new Descriptor('pip-services-search', 'controller', '*', '*', '1.0'));
    }

    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams,
        callback: (err: any, result: DataPage<SearchRecordV1>) => void): void {
        let timing = this.instrument(correlationId, 'search.get_records');
        this._controller.getRecords(correlationId, filter, paging, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    getRecordById(correlationId: string, recordId: string,
        callback: (err: any, result: SearchRecordV1) => void): void {
        let timing = this.instrument(correlationId, 'search.get_record_by_id');
        this._controller.getRecordById(correlationId, recordId, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    setRecord(correlationId: string, record: SearchRecordV1,
        callback: (err: any, result: SearchRecordV1) => void): void {
        let timing = this.instrument(correlationId, 'search.set_record');
        this._controller.setRecord(correlationId, record, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    updateRecord(correlationId: string, record: SearchRecordV1,
        callback: (err: any, result: SearchRecordV1) => void): void {
        let timing = this.instrument(correlationId, 'search.update_record');
        this._controller.updateRecord(correlationId, record, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }

    deleteRecordById(correlationId: string, recordId: string,
        callback: (err: any, result: SearchRecordV1) => void): void {
        let timing = this.instrument(correlationId, 'search.delete_record_by_id');
        this._controller.deleteRecordById(correlationId, recordId, (err, result) => {
            timing.endTiming();
            callback(err, result);
        });
    }
}