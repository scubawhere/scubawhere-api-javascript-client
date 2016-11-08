# ScubawhereApiDocumentation.BoatApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBoat**](BoatApi.md#createBoat) | **POST** /boat/add | Create a new boat
[**deleteBoat**](BoatApi.md#deleteBoat) | **DELETE** /boat/delete | Delete a boat by ID
[**editBoat**](BoatApi.md#editBoat) | **POST** /boat/edit | Update a boat by ID
[**getAllBoats**](BoatApi.md#getAllBoats) | **GET** /boat/all | Retrieve all boats
[**getAllWithTrashedBoats**](BoatApi.md#getAllWithTrashedBoats) | **GET** /boat/all-with-trashed | Retrieve all agents including any deleted models
[**getBoat**](BoatApi.md#getBoat) | **GET** /boat | Retrieve a boat by ID


<a name="createBoat"></a>
# **createBoat**
> InlineResponse2005 createBoat(name, capacity, opts)

Create a new boat

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var name = "name_example"; // String | 

var capacity = 789; // Integer | 

var opts = { 
  'description': "description_example", // String | 
  'boatrooms': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBoat(name, capacity, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **capacity** | **Integer**|  | 
 **description** | **String**|  | [optional] 
 **boatrooms** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBoat"></a>
# **deleteBoat**
> InlineResponse2003 deleteBoat(id)

Delete a boat by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBoat(id, callback);
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

<a name="editBoat"></a>
# **editBoat**
> InlineResponse2004 editBoat(name, capacity, opts)

Update a boat by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var name = "name_example"; // String | 

var capacity = 789; // Integer | 

var opts = { 
  'description': "description_example", // String | 
  'boatrooms': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editBoat(name, capacity, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **capacity** | **Integer**|  | 
 **description** | **String**|  | [optional] 
 **boatrooms** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBoats"></a>
# **getAllBoats**
> [Boat] getAllBoats()

Retrieve all boats

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllBoats(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Boat]**](Boat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedBoats"></a>
# **getAllWithTrashedBoats**
> [Boat] getAllWithTrashedBoats()

Retrieve all agents including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedBoats(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Boat]**](Boat.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBoat"></a>
# **getBoat**
> InlineResponse2005 getBoat(id)

Retrieve a boat by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BoatApi();

var id = 789; // Integer | ID of the boat to be retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoat(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the boat to be retrieved | 

### Return type

[**InlineResponse2005**](InlineResponse2005.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

