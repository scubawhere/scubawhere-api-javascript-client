# ScubawhereApiDocumentation.AddonApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAddon**](AddonApi.md#addAddon) | **POST** /addon/add | Create a new addon
[**deleteAddon**](AddonApi.md#deleteAddon) | **DELETE** /addon/delete | Delete an addon by ID
[**getAddon**](AddonApi.md#getAddon) | **GET** /addon | Retrieve an addon by ID
[**getAllAddons**](AddonApi.md#getAllAddons) | **GET** /addon/all | Retrieve all addons
[**getAllWithTrashedAddons**](AddonApi.md#getAllWithTrashedAddons) | **GET** /addon/all-with-trashed | Retrieve all addons including any deleted models
[**updateAddon**](AddonApi.md#updateAddon) | **PUT** /addon/edit | Update an Addon


<a name="addAddon"></a>
# **addAddon**
> InlineResponse2002 addAddon(name, basePrices, opts)

Create a new addon

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var name = "name_example"; // String | Name of the type of addon

var basePrices = 789; // Integer | Prices for addon

var opts = { 
  'description': "description_example" // String | Description of the addon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAddon(name, basePrices, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the type of addon | 
 **basePrices** | **Integer**| Prices for addon | 
 **description** | **String**| Description of the addon | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAddon"></a>
# **deleteAddon**
> InlineResponse2003 deleteAddon(opts)

Delete an addon by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var opts = { 
  'body': 789 // Integer | ID of the Addon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAddon(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Integer**| ID of the Addon | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAddon"></a>
# **getAddon**
> InlineResponse2001 getAddon(id)

Retrieve an addon by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var id = 789; // Integer | ID of the addon to be retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAddon(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the addon to be retrieved | 

### Return type

[**InlineResponse2001**](InlineResponse2001.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAddons"></a>
# **getAllAddons**
> [Addon] getAllAddons()

Retrieve all addons

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAddons(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedAddons"></a>
# **getAllWithTrashedAddons**
> [Addon] getAllWithTrashedAddons()

Retrieve all addons including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedAddons(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Addon]**](Addon.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAddon"></a>
# **updateAddon**
> InlineResponse2002 updateAddon(id, opts)

Update an Addon

Updates the addon by id using the specified fields

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AddonApi();

var id = 789; // Integer | ID of the Addon to be updated

var opts = { 
  'name': "name_example", // String | Name of the Addon
  'description': "description_example" // String | Description of the Addon
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAddon(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the Addon to be updated | 
 **name** | **String**| Name of the Addon | [optional] 
 **description** | **String**| Description of the Addon | [optional] 

### Return type

[**InlineResponse2002**](InlineResponse2002.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

