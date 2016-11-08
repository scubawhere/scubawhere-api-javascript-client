# ScubawhereApiDocumentation.TripApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTrip**](TripApi.md#createTrip) | **POST** /trip/add | Create a new trip
[**deleteTrip**](TripApi.md#deleteTrip) | **DELETE** /trip/delete | Delete a trip by ID
[**editTrip**](TripApi.md#editTrip) | **POST** /trip/edit | Update a trip by ID
[**getAllTrips**](TripApi.md#getAllTrips) | **GET** /trip/all | Retrieve all trips including any deleted models
[**getAllWithTrashedTrips**](TripApi.md#getAllWithTrashedTrips) | **GET** /trip/all-with-trashed | Retrieve all trips including any deleted models
[**tripGet**](TripApi.md#tripGet) | **GET** /trip | Retrieve a trip by ID


<a name="createTrip"></a>
# **createTrip**
> InlineResponse20046 createTrip(name, duration, locations, tags, opts)

Create a new trip

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var name = "name_example"; // String | 

var duration = 3.4; // Number | 

var locations = [56]; // [Integer] | 

var tags = [56]; // [Integer] | 

var opts = { 
  'description': "description_example", // String | 
  'boatRequired': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTrip(name, duration, locations, tags, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **duration** | **Number**|  | 
 **locations** | [**[Integer]**](Integer.md)|  | 
 **tags** | [**[Integer]**](Integer.md)|  | 
 **description** | **String**|  | [optional] 
 **boatRequired** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20046**](InlineResponse20046.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTrip"></a>
# **deleteTrip**
> InlineResponse2003 deleteTrip(id)

Delete a trip by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTrip(id, callback);
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

<a name="editTrip"></a>
# **editTrip**
> InlineResponse20047 editTrip(id, name, duration, locations, tags, opts)

Update a trip by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var id = 789; // Integer | 

var name = "name_example"; // String | 

var duration = 3.4; // Number | 

var locations = [56]; // [Integer] | 

var tags = [56]; // [Integer] | 

var opts = { 
  'description': "description_example", // String | 
  'boatRequired': true // Boolean | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editTrip(id, name, duration, locations, tags, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **duration** | **Number**|  | 
 **locations** | [**[Integer]**](Integer.md)|  | 
 **tags** | [**[Integer]**](Integer.md)|  | 
 **description** | **String**|  | [optional] 
 **boatRequired** | **Boolean**|  | [optional] 

### Return type

[**InlineResponse20047**](InlineResponse20047.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTrips"></a>
# **getAllTrips**
> [Trip] getAllTrips()

Retrieve all trips including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTrips(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Trip]**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedTrips"></a>
# **getAllWithTrashedTrips**
> [Trip] getAllWithTrashedTrips()

Retrieve all trips including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedTrips(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Trip]**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="tripGet"></a>
# **tripGet**
> Trip tripGet(id)

Retrieve a trip by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TripApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.tripGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Trip**](Trip.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

