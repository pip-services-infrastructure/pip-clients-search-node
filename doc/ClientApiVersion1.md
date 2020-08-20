Node.js client API for Search microservice is a thin layer on the top of
communication protocols. It hides details related to specific protocol implementation
and provides high-level API to access the microservice for simple and productive development.

* [ISearchClientV1 interface](#interface)
    - [getRecords()](#operation1)
    - [getRecordById()](#operation2)
    - [setRecord()](#operation3)
    - [updateRecord()](#operation4)
    - [deleteRecordById()](#operation5)
* [SearchHttpClientV1 class](#client_http)
* [SearchDirectClientV1 class](#client_direct)
* [SearchNullClientV1 class](#client_null)

## <a name="interface"></a> ISearchClientV1 interface

If you are using Typescript, you can use ISearchClientV1 as a common interface across all client implementations.
If you are using plain typescript, you shall not worry about ISearchClientV1 interface. You can just expect that
all methods defined in this interface are implemented by all client classes.

```typescript
interface ISearchClientV1 {
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
```

### <a name="operation1"></a> getRecords(correlationId, filter, paging, callback)

Get search records by filter

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- filter: FilterParams - filter parameters
  - id: string - (optional) unique retry id
  - type: string - (optional) record type
  - subtype: string - (optional) record sub type
  - fromTime: Date - (optional) the start date of the range for the time field
  - toTime: Date - (optional) end date range for time field
  - field1: string - (optional) record field1
  - field2: string - (optional) record field2
  - field3: string - (optional) record field3
  - tags: array - (optional) array of tags
  - content: string - (optional) record content
  - search: string - (optional) substring for simultaneous search in record fields: type, subtype, name, description, 
        field1, field2, field3, content

- paging: PagingParams - paging parameters
  - skip: int - (optional) start of page (default: 0). Operation returns paged result
  - take: int - (optional) page length (max: 100). Operation returns paged result

- sort: SortParams - sorting parameters

**Returns:**
- err: Error - occured error or null for success
- result: DataPage<SearchRecordV1> - Page with retrieved search records

### <a name="operation2"></a> getRecordById(correlationId, recordId, callback)

Get search record by id

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- recordId: string - unique search record id

**Returns:**
- err: Error - occured error or null for success
- result: SearchRecordV1 - finded search record

### <a name="operation3"></a> setRecord(correlationId, record, callback)

Add new search record

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- record: SearchRecordV1 - search record

**Returns:**
- err: Error - occured error or null for success
- result: SearchRecordV1 - generated new search record

### <a name="operation4"></a> updateRecord(correlationId, record, callback)

Changes search record properties

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- record: SearchRecordV1 - search record

**Returns:**
- err: Error - occured error or null for success
- result: SearchRecordV1 - updated search record

### <a name="operation5"></a> deleteRecordById(correlationId, recordId, callback)

Delete search record by id

**Arguments:**
- correlationId: string - id that uniquely identifies transaction
- recordId: string - unique search record id

**Returns:**
- err: Error - occured error or null for success
- result: SearchRecordV1 - deleted search record

## <a name="client_http"></a> SearchHttpClientV1 class

SearchHttpClientV1 is a client that implements HTTP protocol

```typescript
class SearchHttpClientV1 extends CommandableHttpClient implements ISearchClientV1 {
    constructor(config?: any);
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
```

**Constructor config properties:**
- connection: object -HTTP transport configuration options
  - protocol: string -HTTP protocol - 'http' or 'https'(default is 'http')
  - host: string -IP address / hostname binding(default is '0.0.0.0')
  - port: number - HTTP port number

## <a name="client_http"></a> SearchDirectClientV1 class

SearchDirectClientV1 is a dummy client calls controller from the same container.
It can be used in monolytic deployments.

```typescript
class SearchDirectClientV1 extends DirectClient<any> implements ISearchClientV1 {
    constructor();
    setReferences(references);
    open(correlationId, callback);
    close(correlationId, callback);
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
```

## <a name="client_http"></a> SearchNullClientV1 class

SearchNullClientV1 is a dummy client that mimics the real client but doesn't call a microservice.
It can be useful in testing scenarios to cut dependencies on external microservices.

```typescript
class SearchNullClientV1 implements ISearchClientV1 {
    constructor();
    getRecords(correlationId: string, filter: FilterParams, paging: PagingParams, sort: SortParams, callback: (err: any, result: DataPage<SearchRecordV1>) => void): void;
    getRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
    setRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    updateRecord(correlationId: string, record: SearchRecordV1, callback: (err: any, result: SearchRecordV1) => void): void;
    deleteRecordById(correlationId: string, recordId: string, callback: (err: any, result: SearchRecordV1) => void): void;
}
```

