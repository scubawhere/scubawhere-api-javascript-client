# ScubawhereApiDocumentation.RefundApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addRefund**](RefundApi.md#addRefund) | **POST** /refund/add | Create a new refund
[**filterRefunds**](RefundApi.md#filterRefunds) | **GET** /refund/filter | Retrieve all refunds that match a filter
[**getAllRefunds**](RefundApi.md#getAllRefunds) | **GET** /refund/all | Retrieve all refunds made
[**getRefund**](RefundApi.md#getRefund) | **GET** /refund | Retrieve a refund by ID


<a name="addRefund"></a>
# **addRefund**
> InlineResponse2012 addRefund(bookingId, paymentgatewayId, amount)

Create a new refund

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.RefundApi();

var bookingId = 789; // Integer | 

var paymentgatewayId = 789; // Integer | 

var amount = 3.4; // Number | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addRefund(bookingId, paymentgatewayId, amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **paymentgatewayId** | **Integer**|  | 
 **amount** | **Number**|  | 

### Return type

[**InlineResponse2012**](InlineResponse2012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterRefunds"></a>
# **filterRefunds**
> InlineResponse20039 filterRefunds(opts)

Retrieve all refunds that match a filter

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.RefundApi();

var opts = { 
  'after': new Date("2013-10-20"), // Date | Date of the earliest payment
  'before': new Date("2013-10-20") // Date | Date of the latest payment to be retrieved
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterRefunds(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**| Date of the earliest payment | [optional] 
 **before** | **Date**| Date of the latest payment to be retrieved | [optional] 

### Return type

[**InlineResponse20039**](InlineResponse20039.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllRefunds"></a>
# **getAllRefunds**
> InlineResponse20038 getAllRefunds()

Retrieve all refunds made

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.RefundApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllRefunds(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20038**](InlineResponse20038.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRefund"></a>
# **getRefund**
> InlineResponse20037 getRefund(id)

Retrieve a refund by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.RefundApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRefund(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse20037**](InlineResponse20037.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

