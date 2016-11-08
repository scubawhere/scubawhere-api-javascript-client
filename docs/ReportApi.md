# ScubawhereApiDocumentation.ReportApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRevenueStreamReport**](ReportApi.md#getRevenueStreamReport) | **GET** /report/revenue-streams | Get a report containing the distribution of revenue made from all the tickets, packages, courses, addons, accommodations
[**getSourcesReport**](ReportApi.md#getSourcesReport) | **GET** /report/sources | Get a report about the distribution of revenue between the diffrent source of bookings
[**getTrainingUtilisationReport**](ReportApi.md#getTrainingUtilisationReport) | **GET** /report/training-utilisation | Get a report containing the utilisation of all classes between the specified dates
[**getUtilisationReport**](ReportApi.md#getUtilisationReport) | **GET** /report/utilisation | Get a report containing the utilisation of all trips between the specified dates


<a name="getRevenueStreamReport"></a>
# **getRevenueStreamReport**
> InlineResponse20040 getRevenueStreamReport(after, before)

Get a report containing the distribution of revenue made from all the tickets, packages, courses, addons, accommodations

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ReportApi();

var after = new Date("2013-10-20"); // Date | 

var before = new Date("2013-10-20"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRevenueStreamReport(after, before, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**|  | 
 **before** | **Date**|  | 

### Return type

[**InlineResponse20040**](InlineResponse20040.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSourcesReport"></a>
# **getSourcesReport**
> InlineResponse20041 getSourcesReport(after, before)

Get a report about the distribution of revenue between the diffrent source of bookings

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ReportApi();

var after = new Date("2013-10-20"); // Date | 

var before = new Date("2013-10-20"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSourcesReport(after, before, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**|  | 
 **before** | **Date**|  | 

### Return type

[**InlineResponse20041**](InlineResponse20041.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTrainingUtilisationReport"></a>
# **getTrainingUtilisationReport**
> InlineResponse20042 getTrainingUtilisationReport(after, before)

Get a report containing the utilisation of all classes between the specified dates

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ReportApi();

var after = new Date("2013-10-20"); // Date | 

var before = new Date("2013-10-20"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTrainingUtilisationReport(after, before, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**|  | 
 **before** | **Date**|  | 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUtilisationReport"></a>
# **getUtilisationReport**
> InlineResponse20042 getUtilisationReport(after, before)

Get a report containing the utilisation of all trips between the specified dates

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ReportApi();

var after = new Date("2013-10-20"); // Date | 

var before = new Date("2013-10-20"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUtilisationReport(after, before, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**|  | 
 **before** | **Date**|  | 

### Return type

[**InlineResponse20042**](InlineResponse20042.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

