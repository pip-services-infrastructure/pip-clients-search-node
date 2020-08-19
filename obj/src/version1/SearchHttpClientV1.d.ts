import { SearchRecordV1 } from './SearchRecordV1';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { FilterParams, PagingParams, DataPage } from 'pip-services3-commons-node';
import { ISearchClientV1 } from './ISearchClientV1';
export declare class SearchHttpClientV1 extends CommandableHttpClient implements ISearchClientV1 {
    constructor();
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    private fixRecord;
}
