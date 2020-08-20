let _ = require('lodash');

import { SearchRecordV1 } from './SearchRecordV1';
import { CommandableHttpClient } from 'pip-services3-rpc-node';
import { DateTimeConverter, FilterParams, PagingParams, DataPage, SortParams } from 'pip-services3-commons-node';
import { ISearchClientV1 } from './ISearchClientV1';

export class SearchHttpClientV1 extends CommandableHttpClient implements ISearchClientV1 {

    public constructor() {
        super('v1/search');
    }

    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams,
        callback: (err: any, result: DataPage<SearchRecordV1>) => void): void {
        this.callCommand(
            'get_records',
            correlationId,
            { 
                filter: filter, 
                paging: paging,
                sort: sort 
            },
            (err, page) => {
                if (page == null || page.data.length == 0) {
                    callback(err, page);
                    return;
                }

                page.data = _.map(page.data, (record) => this.fixRecord(record));
                callback(err, page);
            }
        );
    }
    
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void {
        this.callCommand(
            'get_record_by_id',
            correlationId,
            {
                record_id: recordId
            },
            (err, record) => {
                callback(err, this.fixRecord(record));
            }
        );
    }

    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void {
        this.callCommand(
            'set_record',
            correlationId,
            {
                record: record
            },
            (err, record) => {
                callback(err, this.fixRecord(record));
            }
        );
    }

    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void {
        this.callCommand(
            'update_record',
            correlationId,
            {
                record: record
            },
            (err, record) => {
                callback(err, this.fixRecord(record));
            }
        );
    }
    
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void {
        this.callCommand(
            'delete_record_by_id',
            correlationId,
            {
                record_id: recordId
            },
            (err, record) => {
                callback(err, this.fixRecord(record));
            }
        );
    }

    private fixRecord(record: SearchRecordV1): SearchRecordV1 {
        if (record == null) return null;

        record.time = DateTimeConverter.toNullableDateTime(record.time);

        return record;
    }
}