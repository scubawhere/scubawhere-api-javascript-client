# ScubawhereApiDocumentation.ClassApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classGet**](ClassApi.md#classGet) | **GET** /class | Retrieve a class by ID
[**createClass**](ClassApi.md#createClass) | **POST** /class/add | Create a new class
[**deleteClass**](ClassApi.md#deleteClass) | **DELETE** /class/delete | Delete a class by ID
[**editClass**](ClassApi.md#editClass) | **POST** /class/edit | Update a class by ID
[**getAllClass**](ClassApi.md#getAllClass) | **GET** /class/all | Retrieve all classes including any deleted models
[**getAllWithTrashedClass**](ClassApi.md#getAllWithTrashedClass) | **GET** /class/all-with-trashed | Retrieve all classes including any deleted models


<a name="classGet"></a>
# **classGet**
> Training classGet(id)

Retrieve a class by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Training**](Training.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClass"></a>
# **createClass**
> InlineResponse20021 createClass(name, duration, opts)

Create a new class

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var name = "name_example"; // String | 

var duration = 3.4; // Number | 

var opts = { 
  'description': "description_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClass(name, duration, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **duration** | **Number**|  | 
 **description** | **String**|  | [optional] 

### Return type

[**InlineResponse20021**](InlineResponse20021.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClass"></a>
# **deleteClass**
> InlineResponse2003 deleteClass(id)

Delete a class by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteClass(id, callback);
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

<a name="editClass"></a>
# **editClass**
> InlineResponse20022 editClass(id, name, duration, opts)

Update a class by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var id = 56; // Integer | 

var name = "name_example"; // String | 

var duration = 3.4; // Number | 

var opts = { 
  'description': "description_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editClass(id, name, duration, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **duration** | **Number**|  | 
 **description** | **String**|  | [optional] 

### Return type

[**InlineResponse20022**](InlineResponse20022.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllClass"></a>
# **getAllClass**
> [Training] getAllClass()

Retrieve all classes including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllClass(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Training]**](Training.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedClass"></a>
# **getAllWithTrashedClass**
> [Training] getAllWithTrashedClass()

Retrieve all classes including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClassApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedClass(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Training]**](Training.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

