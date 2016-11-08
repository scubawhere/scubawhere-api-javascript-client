# ScubawhereApiDocumentation.BoatroomApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBoatroom**](BoatroomApi.md#createBoatroom) | **POST** /boatroom/add | Create a new boatroom
[**deleteBoatroom**](BoatroomApi.md#deleteBoatroom) | **DELETE** /boatroom/delete | Delete a boatroom by ID
[**editBoatroom**](BoatroomApi.md#editBoatroom) | **POST** /boatroom/edit | Update a boatroom by ID
[**getAllBoatrooms**](BoatroomApi.md#getAllBoatrooms) | **GET** /boatroom/all | Retrieve all boatrooms
[**getAllWithTrashedBoatrooms**](BoatroomApi.md#getAllWithTrashedBoatrooms) | **GET** /boatroom/all-with-trashed | Retrieve all boatrooms including any deleted models
[**getBoatroom**](BoatroomApi.md#getBoatroom) | **GET** /boatroom | Retrieve a boatroom by ID


<a name="createBoatroom"></a>
# **createBoatroom**
> InlineResponse2006 createBoatroom(name, opts)

Create a new boatroom

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var name = "name_example"; // String | 

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
apiInstance.createBoatroom(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBoatroom"></a>
# **deleteBoatroom**
> InlineResponse2003 deleteBoatroom(id)

Delete a boatroom by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBoatroom(id, callback);
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

<a name="editBoatroom"></a>
# **editBoatroom**
> InlineResponse2006 editBoatroom(id, name, opts)

Update a boatroom by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var id = 789; // Integer | 

var name = "name_example"; // String | 

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
apiInstance.editBoatroom(id, name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | [optional] 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBoatrooms"></a>
# **getAllBoatrooms**
> [Boatroom] getAllBoatrooms()

Retrieve all boatrooms

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllBoatrooms(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Boatroom]**](Boatroom.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedBoatrooms"></a>
# **getAllWithTrashedBoatrooms**
> [Boatroom] getAllWithTrashedBoatrooms()

Retrieve all boatrooms including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedBoatrooms(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Boatroom]**](Boatroom.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBoatroom"></a>
# **getBoatroom**
> InlineResponse2006 getBoatroom(id)

Retrieve a boatroom by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatroomApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoatroom(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse2006**](InlineResponse2006.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

