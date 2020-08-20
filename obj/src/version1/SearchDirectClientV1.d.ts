import { ISearchClientV1 } from './ISearchClientV1';
import { DirectClient } from 'pip-services3-rpc-node';
import { FilterParams, PagingParams, DataPage, SortParams } from 'pip-services3-commons-node';
import { SearchRecordV1 } from './SearchRecordV1';
export declare class SearchDirectClientV1 extends DirectClient<any> implements ISearchClientV1 {
    constructor();
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
