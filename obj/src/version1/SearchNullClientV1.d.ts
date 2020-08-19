import { DataPage } from 'pip-services3-commons-node';
import { ISearchClientV1 } from './ISearchClientV1';
import { SearchRecordV1 } from './SearchRecordV1';
export declare class SearchNullClientV1 implements ISearchClientV1 {
    constructor(config?: any);
    getRecords(correlationId: string, filter: any, paging: any, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
