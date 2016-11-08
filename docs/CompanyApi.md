# ScubawhereApiDocumentation.CompanyApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**attachLocations**](CompanyApi.md#attachLocations) | **POST** /company/add-location | Attach a location to a company
[**getLocations**](CompanyApi.md#getLocations) | **GET** /company/locations | Retrieve the locations this Dive Centre uses
[**getPickupSchedule**](CompanyApi.md#getPickupSchedule) | **GET** /company/pick-up-schedule | Retrieve the pick up schedule for a date
[**updateCompany**](CompanyApi.md#updateCompany) | **POST** /company/update | Update the companies information


<a name="attachLocations"></a>
# **attachLocations**
> InlineResponse20023 attachLocations(opts)

Attach a location to a company

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CompanyApi();

var opts = { 
  'name': "name_example", // String | 
  'description': "description_example", // String | 
  'latitude': 3.4, // Number | 
  'longitude': 3.4 // Number | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachLocations(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **latitude** | **Number**|  | [optional] 
 **longitude** | **Number**|  | [optional] 

### Return type

[**InlineResponse20023**](InlineResponse20023.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getLocations"></a>
# **getLocations**
> InlineResponse20024 getLocations(latitude, longitude, opts)

Retrieve the locations this Dive Centre uses

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CompanyApi();

var latitude = "latitude_example"; // String | 

var longitude = "longitude_example"; // String | 

var opts = { 
  'limit': 56 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLocations(latitude, longitude, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latitude** | **String**|  | 
 **longitude** | **String**|  | 
 **limit** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20024**](InlineResponse20024.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPickupSchedule"></a>
# **getPickupSchedule**
> InlineResponse20025 getPickupSchedule(_date)

Retrieve the pick up schedule for a date

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CompanyApi();

var _date = "_date_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPickupSchedule(_date, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **_date** | **String**|  | 

### Return type

[**InlineResponse20025**](InlineResponse20025.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateCompany"></a>
# **updateCompany**
> InlineResponse20026 updateCompany(id, opts)

Update the companies information

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CompanyApi();

var id = 789; // Integer | 

var opts = { 
  'contact': "contact_example", // String | 
  'description': "description_example", // String | 
  'name': "name_example", // String | 
  'address1': "address1_example", // String | 
  'address2': "address2_example", // String | 
  'city': "city_example", // String | 
  'county': "county_example", // String | 
  'postcode': "postcode_example", // String | 
  'countryId': 789, // Integer | 
  'currencyId': 789, // Integer | 
  'businessPhone': "businessPhone_example", // String | 
  'businessEmail': "businessEmail_example", // String | 
  'vatNumber': "vatNumber_example", // String | 
  'registrationNumber': "registrationNumber_example", // String | 
  'website': "website_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateCompany(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **contact** | **String**|  | [optional] 
 **description** | **String**|  | [optional] 
 **name** | **String**|  | [optional] 
 **address1** | **String**|  | [optional] 
 **address2** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **county** | **String**|  | [optional] 
 **postcode** | **String**|  | [optional] 
 **countryId** | **Integer**|  | [optional] 
 **currencyId** | **Integer**|  | [optional] 
 **businessPhone** | **String**|  | [optional] 
 **businessEmail** | **String**|  | [optional] 
 **vatNumber** | **String**|  | [optional] 
 **registrationNumber** | **String**|  | [optional] 
 **website** | **String**|  | [optional] 

### Return type

[**InlineResponse20026**](InlineResponse20026.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

