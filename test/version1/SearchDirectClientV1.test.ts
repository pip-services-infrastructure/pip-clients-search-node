let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { SearchMemoryPersistence } from 'pip-services-search-node';
import { SearchController } from 'pip-services-search-node';
import { ISearchClientV1 } from '../../src/version1/ISearchClientV1';
import { SearchDirectClientV1 } from '../../src/version1/SearchDirectClientV1';
import { SearchClientFixtureV1 } from './SearchClientFixtureV1';

suite('SearchDirectClientV1', () => {
    let client: SearchDirectClientV1;
    let fixture: SearchClientFixtureV1;

    setup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new SearchMemoryPersistence();
        let controller = new SearchController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services-commons', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-search', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-search', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new SearchDirectClientV1();
        client.setReferences(references);

        fixture = new SearchClientFixtureV1(client);

        client.open(null, done);
    });

    teardown((done) => {
        client.close(null, done);
    });

    test('CRUD Operations', (done) => {
        fixture.testCrudOperations(done);
    });

    test('Get with Filters', (done) => {
        fixture.testGetWithFilters(done);
    });

    test('Sorting', (done) => {
        fixture.testSorting(done);
    });

});
