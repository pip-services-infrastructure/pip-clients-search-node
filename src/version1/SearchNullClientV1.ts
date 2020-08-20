import { IdGenerator, SortParams } from 'pip-services3-commons-node';
import { FilterParams } from 'pip-services3-commons-node';
import { PagingParams } from 'pip-services3-commons-node';
import { DataPage } from 'pip-services3-commons-node';

import { ISearchClientV1 } from './ISearchClientV1';
import { SearchRecordV1 } from './SearchRecordV1';

export class SearchNullClientV1 implements ISearchClientV1 {
    constructor(config?: any) { }

    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams,
        callback: (err: any, result: DataPage<SearchRecordV1>) => void): void {
        callback(null, new DataPage<SearchRecordV1>());
    }

    getRecordById(correlationId: string, recordId: string,
        callback: (err: any, result: SearchRecordV1) => void): void {
        callback(null, null);
    }

    setRecord(correlationId: string, record: SearchRecordV1, 
        callback: (err: any, result: SearchRecordV1) => void): void {
        callback(null, null);
    }

    updateRecord(correlationId: string, record: SearchRecordV1, 
        callback: (err: any, result: SearchRecordV1) => void): void {
        callback(null, null);
    }

    deleteRecordById(correlationId: string, recordId: string, 
        callback: (err: any, result: SearchRecordV1) => void): void {
        callback(null, null);
    }
}
