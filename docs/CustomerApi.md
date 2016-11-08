# ScubawhereApiDocumentation.CustomerApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCustomer**](CustomerApi.md#createCustomer) | **POST** /customer/add | Create a new customer
[**deleteCustomer**](CustomerApi.md#deleteCustomer) | **DELETE** /customer/delete | Delete a customer by ID
[**editCustomer**](CustomerApi.md#editCustomer) | **POST** /customer/edit | Update a customer by ID
[**getAllCustomers**](CustomerApi.md#getAllCustomers) | **GET** /customer/all | Retrieve all customers
[**getCustomer**](CustomerApi.md#getCustomer) | **GET** /customer | Retrieve a customer by ID


<a name="createCustomer"></a>
# **createCustomer**
> InlineResponse20029 createCustomer(email, firstname, lastname, opts)

Create a new customer

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomerApi();

var email = "email_example"; // String | 

var firstname = "firstname_example"; // String | 

var lastname = "lastname_example"; // String | 

var opts = { 
  'birthday': new Date("2013-10-20"), // Date | 
  'gender': 56, // Integer | 
  'address1': "address1_example", // String | 
  'address2': "address2_example", // String | 
  'city': "city_example", // String | 
  'county': "county_example", // String | 
  'postcode': "postcode_example", // String | 
  'countryId': 789, // Integer | 
  'phone': "phone_example", // String | 
  'lastDive': new Date("2013-10-20"), // Date | 
  'numberOfDives': 56, // Integer | 
  'chestSize': "chestSize_example", // String | 
  'showSize': "showSize_example", // String | 
  'height': "height_example", // String | 
  'certificates': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCustomer(email, firstname, lastname, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **email** | **String**|  | 
 **firstname** | **String**|  | 
 **lastname** | **String**|  | 
 **birthday** | **Date**|  | [optional] 
 **gender** | **Integer**|  | [optional] 
 **address1** | **String**|  | [optional] 
 **address2** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **county** | **String**|  | [optional] 
 **postcode** | **String**|  | [optional] 
 **countryId** | **Integer**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **lastDive** | **Date**|  | [optional] 
 **numberOfDives** | **Integer**|  | [optional] 
 **chestSize** | **String**|  | [optional] 
 **showSize** | **String**|  | [optional] 
 **height** | **String**|  | [optional] 
 **certificates** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCustomer"></a>
# **deleteCustomer**
> InlineResponse2003 deleteCustomer(id)

Delete a customer by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomerApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCustomer(id, callback);
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

<a name="editCustomer"></a>
# **editCustomer**
> InlineResponse20030 editCustomer(id, opts)

Update a customer by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomerApi();

var id = 789; // Integer | 

var opts = { 
  'email': "email_example", // String | 
  'firstname': "firstname_example", // String | 
  'lastname': "lastname_example", // String | 
  'birthday': new Date("2013-10-20"), // Date | 
  'gender': 56, // Integer | 
  'address1': "address1_example", // String | 
  'address2': "address2_example", // String | 
  'city': "city_example", // String | 
  'county': "county_example", // String | 
  'postcode': "postcode_example", // String | 
  'countryId': 789, // Integer | 
  'phone': "phone_example", // String | 
  'lastDive': new Date("2013-10-20"), // Date | 
  'numberOfDives': 56, // Integer | 
  'chestSize': "chestSize_example", // String | 
  'showSize': "showSize_example", // String | 
  'height': "height_example", // String | 
  'certificates': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCustomer(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **email** | **String**|  | [optional] 
 **firstname** | **String**|  | [optional] 
 **lastname** | **String**|  | [optional] 
 **birthday** | **Date**|  | [optional] 
 **gender** | **Integer**|  | [optional] 
 **address1** | **String**|  | [optional] 
 **address2** | **String**|  | [optional] 
 **city** | **String**|  | [optional] 
 **county** | **String**|  | [optional] 
 **postcode** | **String**|  | [optional] 
 **countryId** | **Integer**|  | [optional] 
 **phone** | **String**|  | [optional] 
 **lastDive** | **Date**|  | [optional] 
 **numberOfDives** | **Integer**|  | [optional] 
 **chestSize** | **String**|  | [optional] 
 **showSize** | **String**|  | [optional] 
 **height** | **String**|  | [optional] 
 **certificates** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20030**](InlineResponse20030.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllCustomers"></a>
# **getAllCustomers**
> [Customer] getAllCustomers()

Retrieve all customers

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomerApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCustomers(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Customer]**](Customer.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomer"></a>
# **getCustomer**
> InlineResponse20029 getCustomer(opts)

Retrieve a customer by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CustomerApi();

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
apiInstance.getCustomer(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20029**](InlineResponse20029.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

