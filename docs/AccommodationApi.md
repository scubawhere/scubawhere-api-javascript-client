# ScubawhereApiDocumentation.AccommodationApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addAccommodation**](AccommodationApi.md#addAccommodation) | **POST** /accommodation/add | 
[**deleteAccommodation**](AccommodationApi.md#deleteAccommodation) | **DELETE** /accommodation/delete | Delete an accommodation by ID
[**editAgent**](AccommodationApi.md#editAgent) | **POST** /agent/edit | Create a new agent
[**filterAccommodation**](AccommodationApi.md#filterAccommodation) | **GET** /accommodation/filter | Get all the accommodations matching a filter
[**findAccommodation**](AccommodationApi.md#findAccommodation) | **GET** /accommodation | 
[**getAllAccommodations**](AccommodationApi.md#getAllAccommodations) | **GET** /accommodations/all | 
[**getAllWithTrashedAccommodations**](AccommodationApi.md#getAllWithTrashedAccommodations) | **GET** /accommodations/all-with-trashed | Retrieve all accommodation including any deleted models
[**updateAccommodation**](AccommodationApi.md#updateAccommodation) | **PUT** /accommodation/edit | Update an Accommodation


<a name="addAccommodation"></a>
# **addAccommodation**
> InlineResponse200 addAccommodation(name, capacity, basePrices, opts)



Create an accommodation

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var name = "name_example"; // String | Name of the type of accommodation

var capacity = 789; // Integer | Number of beds in the accommodation

var basePrices = 56; // Integer | Price of the accommodation and the dates of when the price is applicable

var opts = { 
  'description': "description_example" // String | Description of the accommodation
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addAccommodation(name, capacity, basePrices, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Name of the type of accommodation | 
 **capacity** | **Integer**| Number of beds in the accommodation | 
 **basePrices** | **Integer**| Price of the accommodation and the dates of when the price is applicable | 
 **description** | **String**| Description of the accommodation | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAccommodation"></a>
# **deleteAccommodation**
> InlineResponse200 deleteAccommodation(body)

Delete an accommodation by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var body = 789; // Integer | ID of the accommodation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAccommodation(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | **Integer**| ID of the accommodation | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editAgent"></a>
# **editAgent**
> InlineResponse2004 editAgent(id, name, branchName, branchAddress, branchPhone, branchEmail, commission, terms, opts)

Create a new agent

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var id = 789; // Integer | 

var name = 789; // Integer | 

var branchName = "branchName_example"; // String | 

var branchAddress = "branchAddress_example"; // String | 

var branchPhone = "branchPhone_example"; // String | 

var branchEmail = "branchEmail_example"; // String | 

var commission = 3.4; // Number | 

var terms = "terms_example"; // String | 

var opts = { 
  'website': "website_example", // String | 
  'billingAddress': "billingAddress_example", // String | 
  'billingPhone': "billingPhone_example", // String | 
  'billingEmail': "billingEmail_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editAgent(id, name, branchName, branchAddress, branchPhone, branchEmail, commission, terms, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **Integer**|  | 
 **branchName** | **String**|  | 
 **branchAddress** | **String**|  | 
 **branchPhone** | **String**|  | 
 **branchEmail** | **String**|  | 
 **commission** | **Number**|  | 
 **terms** | **String**|  | 
 **website** | **String**|  | [optional] 
 **billingAddress** | **String**|  | [optional] 
 **billingPhone** | **String**|  | [optional] 
 **billingEmail** | **String**|  | [optional] 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterAccommodation"></a>
# **filterAccommodation**
> InlineResponse200 filterAccommodation(opts)

Get all the accommodations matching a filter

Get all the accommodations and their bookings between certain dates and / or an accommodation id

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var opts = { 
  'before': new Date("2013-10-20"), // Date | The date for the upper boundary of the dates
  'after': new Date("2013-10-20"), // Date | The date for the lower boundary of the dates
  'accommodationId': 789 // Integer | ID Accommodation to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterAccommodation(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **before** | **Date**| The date for the upper boundary of the dates | [optional] 
 **after** | **Date**| The date for the lower boundary of the dates | [optional] 
 **accommodationId** | **Integer**| ID Accommodation to filter by | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findAccommodation"></a>
# **findAccommodation**
> InlineResponse200 findAccommodation(id)



Retrieve an accommodation by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var id = [56]; // [Integer] | ID of the accommodation to be retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.findAccommodation(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**[Integer]**](Integer.md)| ID of the accommodation to be retrieved | 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAccommodations"></a>
# **getAllAccommodations**
> [Accommodation] getAllAccommodations()



Retrieve all accommodation

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAccommodations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Accommodation]**](Accommodation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedAccommodations"></a>
# **getAllWithTrashedAccommodations**
> [Accommodation] getAllWithTrashedAccommodations()

Retrieve all accommodation including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedAccommodations(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Accommodation]**](Accommodation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateAccommodation"></a>
# **updateAccommodation**
> InlineResponse200 updateAccommodation(id, opts)

Update an Accommodation

Updates the accommodation by id using the specified fields

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AccommodationApi();

var id = 789; // Integer | ID of the Accommodation to be updated

var opts = { 
  'name': "name_example", // String | Name of the Accommodation
  'capacity': 789 // Integer | Number of rooms the accommodation holds
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateAccommodation(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the Accommodation to be updated | 
 **name** | **String**| Name of the Accommodation | [optional] 
 **capacity** | **Integer**| Number of rooms the accommodation holds | [optional] 

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

