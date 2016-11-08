# ScubawhereApiDocumentation.PaymentApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addPayment**](PaymentApi.md#addPayment) | **POST** /payment/add | Create a new payment
[**filterPayments**](PaymentApi.md#filterPayments) | **GET** /payment/filter | Retrieve all payments that match a filter
[**getAllPayments**](PaymentApi.md#getAllPayments) | **GET** /payment/all | Retrieve all payments made
[**getPayment**](PaymentApi.md#getPayment) | **GET** /payment | Retrieve a payment by ID
[**getPaymentGateways**](PaymentApi.md#getPaymentGateways) | **GET** /payment/paymentgateways | Retrieve all the payment gateways


<a name="addPayment"></a>
# **addPayment**
> InlineResponse2011 addPayment(bookingId, paymentgatewayId, amount)

Create a new payment

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PaymentApi();

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
apiInstance.addPayment(bookingId, paymentgatewayId, amount, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **paymentgatewayId** | **Integer**|  | 
 **amount** | **Number**|  | 

### Return type

[**InlineResponse2011**](InlineResponse2011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterPayments"></a>
# **filterPayments**
> InlineResponse20035 filterPayments(opts)

Retrieve all payments that match a filter

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PaymentApi();

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
apiInstance.filterPayments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**| Date of the earliest payment | [optional] 
 **before** | **Date**| Date of the latest payment to be retrieved | [optional] 

### Return type

[**InlineResponse20035**](InlineResponse20035.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllPayments"></a>
# **getAllPayments**
> [Payment] getAllPayments()

Retrieve all payments made

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPayments(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Payment]**](Payment.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPayment"></a>
# **getPayment**
> InlineResponse20034 getPayment(id)

Retrieve a payment by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PaymentApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayment(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse20034**](InlineResponse20034.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPaymentGateways"></a>
# **getPaymentGateways**
> InlineResponse20036 getPaymentGateways()

Retrieve all the payment gateways

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PaymentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPaymentGateways(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20036**](InlineResponse20036.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

