# ScubawhereApiDocumentation.PackageApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createPackage**](PackageApi.md#createPackage) | **POST** /package/add | Create a new package
[**deletePackage**](PackageApi.md#deletePackage) | **DELETE** /package/delete | Delete a package by ID
[**editPackage**](PackageApi.md#editPackage) | **POST** /package/edit | Update a package by ID
[**getAllPackages**](PackageApi.md#getAllPackages) | **GET** /package/all | Retrieve all packages including any deleted models
[**getAllWithTrashedPackages**](PackageApi.md#getAllWithTrashedPackages) | **GET** /package/all-with-trashed | Retrieve all packages including any deleted models
[**getPackage**](PackageApi.md#getPackage) | **GET** /package | Retrieve a package by ID


<a name="createPackage"></a>
# **createPackage**
> InlineResponse20032 createPackage(name, opts)

Create a new package

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var name = "name_example"; // String | 

var opts = { 
  'description': "description_example", // String | 
  'availableFrom': new Date("2013-10-20"), // Date | 
  'availableUntil': new Date("2013-10-20"), // Date | 
  'tickets': [56], // [Integer] | 
  'courses': [56], // [Integer] | 
  'accommodations': [56], // [Integer] | 
  'addons': [56], // [Integer] | 
  'prices': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createPackage(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 
 **availableFrom** | **Date**|  | [optional] 
 **availableUntil** | **Date**|  | [optional] 
 **tickets** | [**[Integer]**](Integer.md)|  | [optional] 
 **courses** | [**[Integer]**](Integer.md)|  | [optional] 
 **accommodations** | [**[Integer]**](Integer.md)|  | [optional] 
 **addons** | [**[Integer]**](Integer.md)|  | [optional] 
 **prices** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deletePackage"></a>
# **deletePackage**
> InlineResponse2003 deletePackage(id)

Delete a package by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deletePackage(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editPackage"></a>
# **editPackage**
> InlineResponse20033 editPackage(id, name, opts)

Update a package by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var id = 789; // Integer | 

var name = "name_example"; // String | 

var opts = { 
  'description': "description_example", // String | 
  'availableFrom': new Date("2013-10-20"), // Date | 
  'availableUntil': new Date("2013-10-20"), // Date | 
  'tickets': [56], // [Integer] | 
  'courses': [56], // [Integer] | 
  'accommodations': [56], // [Integer] | 
  'addons': [56], // [Integer] | 
  'prices': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editPackage(id, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 
 **availableFrom** | **Date**|  | [optional] 
 **availableUntil** | **Date**|  | [optional] 
 **tickets** | [**[Integer]**](Integer.md)|  | [optional] 
 **courses** | [**[Integer]**](Integer.md)|  | [optional] 
 **accommodations** | [**[Integer]**](Integer.md)|  | [optional] 
 **addons** | [**[Integer]**](Integer.md)|  | [optional] 
 **prices** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20033**](InlineResponse20033.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllPackages"></a>
# **getAllPackages**
> [ModelPackage] getAllPackages()

Retrieve all packages including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllPackages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelPackage]**](ModelPackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedPackages"></a>
# **getAllWithTrashedPackages**
> [ModelPackage] getAllWithTrashedPackages()

Retrieve all packages including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedPackages(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[ModelPackage]**](ModelPackage.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPackage"></a>
# **getPackage**
> InlineResponse20032 getPackage(opts)

Retrieve a package by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.PackageApi();

var opts = { 
  'id': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPackage(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20032**](InlineResponse20032.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

