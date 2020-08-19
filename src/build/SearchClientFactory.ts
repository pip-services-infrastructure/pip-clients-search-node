import { Descriptor } from 'pip-services3-commons-node';
import { Factory } from 'pip-services3-components-node';

import { SearchNullClientV1 } from '../version1/SearchNullClientV1';
import { SearchDirectClientV1 } from '../version1/SearchDirectClientV1';
import { SearchHttpClientV1 } from '../version1/SearchHttpClientV1';

export class SearchClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('pip-services-search', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('pip-services-search', 'client', 'null', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('pip-services-search', 'client', 'direct', 'default', '1.0');
	public static HttpClientV1Descriptor = new Descriptor('pip-services-search', 'client', 'http', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(SearchClientFactory.NullClientV1Descriptor, SearchNullClientV1);
		this.registerAsType(SearchClientFactory.DirectClientV1Descriptor, SearchDirectClientV1);
		this.registerAsType(SearchClientFactory.HttpClientV1Descriptor, SearchHttpClientV1);
	}
}
