let _ = require('lodash');
let async = require('async');
let assert = require('chai').assert;

import { PagingParams, FilterParams } from 'pip-services3-commons-node';

import { SearchRecordV1 } from '../../src/version1/SearchRecordV1';
import { ISearchClientV1 } from '../../src/version1/ISearchClientV1';
import { TestModel } from '../data/TestModel';

const RECORD1: SearchRecordV1 = TestModel.createSearchRecord1();
const RECORD2: SearchRecordV1 = TestModel.createSearchRecord2();
const RECORD3: SearchRecordV1 = TestModel.createSearchRecord3();

export class SearchClientFixtureV1 {
    private _client: ISearchClientV1;
    private _timeout: number;

    constructor(client: ISearchClientV1, timeout: number = 0) {
        this._client = client;
        this._timeout = timeout;
    }

    private testCreateSearch(done) {
        async.series([
            // Create the first record
            (callback) => {
                this._client.setRecord(
                    null,
                    RECORD1,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isObject(record);
                        TestModel.assertEqualSearchRecord(RECORD1, record);

                        callback();
                    }
                );
            },
            // Create the second record
            (callback) => {
                this._client.setRecord(
                    null,
                    RECORD2,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isObject(record);
                        TestModel.assertEqualSearchRecord(RECORD2, record);

                        callback();
                    }
                );
            },
            // Create the third record
            (callback) => {
                this._client.setRecord(
                    null,
                    RECORD3,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isObject(record);
                        TestModel.assertEqualSearchRecord(RECORD3, record);

                        callback();
                    }
                );
            }
        ], done);
    }

    public testCrudOperations(done) {
        let record1: SearchRecordV1;

        async.series([
            // Create items
            (callback) => {
                this.testCreateSearch(callback);
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, this._timeout);
            },
            // Get all records
            (callback) => {
                this._client.getRecords(
                    null,
                    new FilterParams(),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.isObject(page);
                        assert.lengthOf(page.data, 3);

                        record1 = page.data[0];

                        callback();
                    }
                )
            },
            // Update the record
            (callback) => {
                record1.name = 'New Name';

                this._client.updateRecord(
                    null,
                    record1,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isObject(record);
                        assert.equal(record1.id, record.id);
                        assert.equal('New Name', record.name);

                        callback();
                    }
                )
            },
            // Delete the record
            (callback) => {
                this._client.deleteRecordById(
                    null,
                    record1.id,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isObject(record);
                        assert.equal(record1.id, record.id);

                        callback();
                    }
                )
            },
            // Try to get deleted record
            (callback) => {
                this._client.getRecordById(
                    null,
                    record1.id,
                    (err, record) => {
                        assert.isNull(err);

                        assert.isNull(record || null);

                        callback();
                    }
                )
            }
        ], done);
    }

    public testGetWithFilters(done) {
        async.series([
            // Create items
            (callback) => {
                this.testCreateSearch(callback);
            },
            (callback) => {
                setTimeout(() => {
                    callback();
                }, this._timeout);
            },
            // Filter by id
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'id', '1'
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 1);

                        callback();
                    }
                )
            },
            // Filter by type
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'type', 'Test type1'
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                )
            },
            // Filter by name
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'name', 'Test name 1'
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 1);

                        callback();
                    }
                )
            },
            // Filter by search pattern
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'search', 'type1'
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 2);

                        callback();
                    }
                )
            },
            // Filter by tags
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'tags', ['red']
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 1);

                        callback();
                    }
                )
            },
            // Filter by time
            (callback) => {
                this._client.getRecords(
                    null,
                    FilterParams.fromTuples(
                        'from_time', new Date(2005, 1, 1),
                        'to_time', new Date(2015, 1, 1),
                    ),
                    new PagingParams(),
                    (err, page) => {
                        assert.isNull(err);

                        assert.lengthOf(page.data, 1);

                        callback();
                    }
                )
            },
        ], done);
    }
}
