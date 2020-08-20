import { DataPage, SortParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { SearchRecordV1 } from './SearchRecordV1';
export interface ISearchClientV1 {
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
