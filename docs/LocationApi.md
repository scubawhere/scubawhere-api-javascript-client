# ScubawhereApiDocumentation.LocationApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachLocation**](LocationApi.md#attachLocation) | **POST** /location/attach | Attach a location to a company
[**createLocation**](LocationApi.md#createLocation) | **POST** /location/add | Create a location
[**dettachLocation**](LocationApi.md#dettachLocation) | **POST** /location/dettach | Dettach a location to a company
[**getAllLocations**](LocationApi.md#getAllLocations) | **GET** /location/all | Retrieve all locations associated with the company
[**getLocationTags**](LocationApi.md#getLocationTags) | **GET** /location/tags | Retrieve all tags associated to all locations
[**updateLocation**](LocationApi.md#updateLocation) | **PUT** /location/edit | Update a location


<a name="attachLocation"></a>
# **attachLocation**
> InlineResponse2003 attachLocation(locationId)

Attach a location to a company

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var locationId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachLocation(locationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createLocation"></a>
# **createLocation**
> InlineResponse2003 createLocation(name, opts)

Create a location

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var name = "name_example"; // String | 

var opts = { 
  'description': "description_example", // String | 
  'latitude': 3.4, // Number | 
  'longitude': 3.4, // Number | 
  'tags': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createLocation(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 
 **latitude** | **Number**|  | [optional] 
 **longitude** | **Number**|  | [optional] 
 **tags** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dettachLocation"></a>
# **dettachLocation**
> InlineResponse2003 dettachLocation(locationId)

Dettach a location to a company

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var locationId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dettachLocation(locationId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllLocations"></a>
# **getAllLocations**
> InlineResponse2003 getAllLocations()

Retrieve all locations associated with the company

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllLocations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLocationTags"></a>
# **getLocationTags**
> InlineResponse2003 getLocationTags()

Retrieve all tags associated to all locations

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocationTags(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateLocation"></a>
# **updateLocation**
> InlineResponse2003 updateLocation(locationId, description)

Update a location

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.LocationApi();

var locationId = 789; // Integer | 

var description = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateLocation(locationId, description, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locationId** | **Integer**|  | 
 **description** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

