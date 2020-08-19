"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pip_services3_commons_node_1 = require("pip-services3-commons-node");
const pip_services3_components_node_1 = require("pip-services3-components-node");
const SearchNullClientV1_1 = require("../version1/SearchNullClientV1");
const SearchDirectClientV1_1 = require("../version1/SearchDirectClientV1");
const SearchHttpClientV1_1 = require("../version1/SearchHttpClientV1");
class SearchClientFactory extends pip_services3_components_node_1.Factory {
    constructor() {
        super();
        this.registerAsType(SearchClientFactory.NullClientV1Descriptor, SearchNullClientV1_1.SearchNullClientV1);
        this.registerAsType(SearchClientFactory.DirectClientV1Descriptor, SearchDirectClientV1_1.SearchDirectClientV1);
        this.registerAsType(SearchClientFactory.HttpClientV1Descriptor, SearchHttpClientV1_1.SearchHttpClientV1);
    }
}
exports.SearchClientFactory = SearchClientFactory;
SearchClientFactory.Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-tempblobs', 'factory', 'default', 'default', '1.0');
SearchClientFactory.NullClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-tempblobs', 'client', 'null', 'default', '1.0');
SearchClientFactory.DirectClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-tempblobs', 'client', 'direct', 'default', '1.0');
SearchClientFactory.HttpClientV1Descriptor = new pip_services3_commons_node_1.Descriptor('pip-services-tempblobs', 'client', 'http', 'default', '1.0');
//# sourceMappingURL=TempBlobsClientFactory.js.map