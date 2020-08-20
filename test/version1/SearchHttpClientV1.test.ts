let assert = require('chai').assert;
let async = require('async');

import { Descriptor } from 'pip-services3-commons-node';
import { ConfigParams } from 'pip-services3-commons-node';
import { References } from 'pip-services3-commons-node';
import { ConsoleLogger } from 'pip-services3-components-node';

import { SearchMemoryPersistence } from 'pip-services-search-node';
import { SearchController } from 'pip-services-search-node';
import { SearchCommandableHttpServiceV1 } from 'pip-services-search-node';
import { ISearchClientV1 } from '../../src/version1/ISearchClientV1';
import { SearchHttpClientV1 } from '../../src/version1/SearchHttpClientV1';
import { SearchClientFixtureV1 } from './SearchClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('SearchCommandableHttpServiceV1', () => {
    let service: SearchCommandableHttpServiceV1;
    let client: SearchHttpClientV1;
    let fixture: SearchClientFixtureV1;

    setup((done) => {
        let logger = new ConsoleLogger();
        let persistence = new SearchMemoryPersistence();
        let controller = new SearchController();

        service = new SearchCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('pip-services-search', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('pip-services-search', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('pip-services-search', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new SearchHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new SearchClientFixtureV1(client);

        service.open(null, (err) => {
            client.open(null, done);
        });
    });

    teardown((done) => {
        client.close(null, (err) => {
            service.close(null, done);
        });
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
