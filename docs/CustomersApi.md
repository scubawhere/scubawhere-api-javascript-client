# ScubawhereApiDocumentation.CustomersApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllWithTrashedCustomers**](CustomersApi.md#getAllWithTrashedCustomers) | **GET** /customer/all-with-trashed | Retrieve all customer including any deleted models


<a name="getAllWithTrashedCustomers"></a>
# **getAllWithTrashedCustomers**
> [Customer] getAllWithTrashedCustomers()

Retrieve all customer including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomersApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedCustomers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Customer]**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

