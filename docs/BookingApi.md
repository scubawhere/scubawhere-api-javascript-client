# ScubawhereApiDocumentation.BookingApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addBookingDetail**](BookingApi.md#addBookingDetail) | **POST** /booking/add-detail | Add a package / course / ticket with its session to the booking
[**attachAccommodation**](BookingApi.md#attachAccommodation) | **POST** /booking/add-accommodation | Attach an accommodation booking to a booking
[**attachAddon**](BookingApi.md#attachAddon) | **POST** /booking/add-addon | Attach an addon to a trip of a booking
[**attachPickup**](BookingApi.md#attachPickup) | **POST** /booking/add-pickup | Attach a pickup location for a booking
[**cancelBooking**](BookingApi.md#cancelBooking) | **POST** /booking/cancel | Cancel a booking
[**confirmBooking**](BookingApi.md#confirmBooking) | **POST** /booking/confirm | Confirm a booking and all of its sessions and notify the lead customer
[**deleteBooking**](BookingApi.md#deleteBooking) | **DELETE** /booking/delete | Delete a booking by ID
[**dettachAccommodation**](BookingApi.md#dettachAccommodation) | **POST** /booking/remove-accommodation | Dettach an accommodation booking to a booking
[**dettachAddon**](BookingApi.md#dettachAddon) | **POST** /booking/remove-addon | Dettach an addon to a trip of a booking
[**dettachPickup**](BookingApi.md#dettachPickup) | **POST** /booking/remove-pickup | Dettach a pickup location for a booking
[**editBookingInfo**](BookingApi.md#editBookingInfo) | **POST** /booking/edit-info | Edit the information related to a booking
[**filterBookings**](BookingApi.md#filterBookings) | **GET** /booking/filter | Get all bookings matching a filter
[**getAllBookings**](BookingApi.md#getAllBookings) | **GET** /booking/all | Retrieve all bookings
[**getAllWithTrashedBookings**](BookingApi.md#getAllWithTrashedBookings) | **GET** /booking/all-with-trashed | Retrieve all bookings including any deleted models
[**getBooking**](BookingApi.md#getBooking) | **GET** /booking | Retrieve a booking by ID
[**getCustomerBookings**](BookingApi.md#getCustomerBookings) | **GET** /booking/customer | Get all bookings for a customer
[**getPayments**](BookingApi.md#getPayments) | **GET** /booking/payments | Retrieve all payments made for a booking
[**getRefunds**](BookingApi.md#getRefunds) | **GET** /booking/refunds | Retrieve all refunds for a booking
[**getTodaysBookings**](BookingApi.md#getTodaysBookings) | **GET** /booking/today | Get all bookings made today
[**getTommorowsBookings**](BookingApi.md#getTommorowsBookings) | **GET** /booking/tommorow | Get all bookings made today
[**initBooking**](BookingApi.md#initBooking) | **POST** /booking/init | Create a new empty booking
[**removeBookingDetail**](BookingApi.md#removeBookingDetail) | **POST** /booking/remove-detail | Remove a detail from a booking
[**resendConfirmation**](BookingApi.md#resendConfirmation) | **POST** /booking/resend-confirmation | Resend the confirmation email to the lead customer
[**reserveBooking**](BookingApi.md#reserveBooking) | **POST** /booking/reserve | Reserve a booking and its sessions capcity until a set date
[**saveBooking**](BookingApi.md#saveBooking) | **POST** /booking/save | Save a booking as a quote and release all capacity of sessions
[**setLeadCustomer**](BookingApi.md#setLeadCustomer) | **POST** /booking/set-lead | Set the lead customer for a booking


<a name="addBookingDetail"></a>
# **addBookingDetail**
> InlineResponse20010 addBookingDetail(bookingId, customerId, opts)

Add a package / course / ticket with its session to the booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var customerId = 789; // Integer | 

var opts = { 
  'ticketId': 789, // Integer | 
  'sessionId': 789, // Integer | 
  'boatroomId': 789, // Integer | 
  'trainingSessionId': 789, // Integer | 
  'temporary': true, // Boolean | 
  'packageId': 789, // Integer | 
  'packagefacadeId': 789, // Integer | 
  'courseId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addBookingDetail(bookingId, customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **customerId** | **Integer**|  | 
 **ticketId** | **Integer**|  | [optional] 
 **sessionId** | **Integer**|  | [optional] 
 **boatroomId** | **Integer**|  | [optional] 
 **trainingSessionId** | **Integer**|  | [optional] 
 **temporary** | **Boolean**|  | [optional] 
 **packageId** | **Integer**|  | [optional] 
 **packagefacadeId** | **Integer**|  | [optional] 
 **courseId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20010**](InlineResponse20010.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachAccommodation"></a>
# **attachAccommodation**
> InlineResponse2008 attachAccommodation(bookingId, accommodationId, customerId, opts)

Attach an accommodation booking to a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var accommodationId = 789; // Integer | 

var customerId = 789; // Integer | 

var opts = { 
  'start': new Date("2013-10-20"), // Date | 
  'end': new Date("2013-10-20") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachAccommodation(bookingId, accommodationId, customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **accommodationId** | **Integer**|  | 
 **customerId** | **Integer**|  | 
 **start** | **Date**|  | [optional] 
 **end** | **Date**|  | [optional] 

### Return type

[**InlineResponse2008**](InlineResponse2008.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachAddon"></a>
# **attachAddon**
> InlineResponse2009 attachAddon(bookingId, bookingdetailId, addonId, opts)

Attach an addon to a trip of a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var bookingdetailId = 789; // Integer | 

var addonId = 789; // Integer | 

var opts = { 
  'quantity': 789, // Integer | 
  'packagefacadeId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachAddon(bookingId, bookingdetailId, addonId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **bookingdetailId** | **Integer**|  | 
 **addonId** | **Integer**|  | 
 **quantity** | **Integer**|  | [optional] 
 **packagefacadeId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse2009**](InlineResponse2009.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachPickup"></a>
# **attachPickup**
> InlineResponse20011 attachPickup(bookingId, location, _date, time)

Attach a pickup location for a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var location = "location_example"; // String | 

var _date = new Date("2013-10-20"); // Date | 

var time = "time_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.attachPickup(bookingId, location, _date, time, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **location** | **String**|  | 
 **_date** | **Date**|  | 
 **time** | **String**|  | 

### Return type

[**InlineResponse20011**](InlineResponse20011.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="cancelBooking"></a>
# **cancelBooking**
> InlineResponse2003 cancelBooking(bookingId)

Cancel a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.cancelBooking(bookingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="confirmBooking"></a>
# **confirmBooking**
> InlineResponse20012 confirmBooking(bookingId)

Confirm a booking and all of its sessions and notify the lead customer

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.confirmBooking(bookingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 

### Return type

[**InlineResponse20012**](InlineResponse20012.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteBooking"></a>
# **deleteBooking**
> InlineResponse2003 deleteBooking(id)

Delete a booking by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteBooking(id, callback);
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

<a name="dettachAccommodation"></a>
# **dettachAccommodation**
> InlineResponse20017 dettachAccommodation(bookingId, accommodationId, customerId, opts)

Dettach an accommodation booking to a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var accommodationId = 789; // Integer | 

var customerId = 789; // Integer | 

var opts = { 
  'start': new Date("2013-10-20") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dettachAccommodation(bookingId, accommodationId, customerId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **accommodationId** | **Integer**|  | 
 **customerId** | **Integer**|  | 
 **start** | **Date**|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dettachAddon"></a>
# **dettachAddon**
> InlineResponse20017 dettachAddon(bookingId, bookingdetailId, addonId, opts)

Dettach an addon to a trip of a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var bookingdetailId = 789; // Integer | 

var addonId = 789; // Integer | 

var opts = { 
  'packagefacadeId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.dettachAddon(bookingId, bookingdetailId, addonId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **bookingdetailId** | **Integer**|  | 
 **addonId** | **Integer**|  | 
 **packagefacadeId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="dettachPickup"></a>
# **dettachPickup**
> InlineResponse2003 dettachPickup(bookingId, opts)

Dettach a pickup location for a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

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
apiInstance.dettachPickup(bookingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **id** | **Integer**|  | [optional] 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editBookingInfo"></a>
# **editBookingInfo**
> InlineResponse20014 editBookingInfo(opts)

Edit the information related to a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var opts = { 
  'bookingId': 789, // Integer | 
  'discount': 1.2, // Number | 
  'comment': "comment_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editBookingInfo(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | [optional] 
 **discount** | **Number**|  | [optional] 
 **comment** | **String**|  | [optional] 

### Return type

[**InlineResponse20014**](InlineResponse20014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterBookings"></a>
# **filterBookings**
> InlineResponse20013 filterBookings(opts)

Get all bookings matching a filter

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var opts = { 
  'reference': "reference_example", // String | 
  '_date': new Date("2013-10-20"), // Date | 
  'lastname': "lastname_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterBookings(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reference** | **String**|  | [optional] 
 **_date** | **Date**|  | [optional] 
 **lastname** | **String**|  | [optional] 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllBookings"></a>
# **getAllBookings**
> [Booking] getAllBookings()

Retrieve all bookings

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllBookings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Booking]**](Booking.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedBookings"></a>
# **getAllWithTrashedBookings**
> [Booking] getAllWithTrashedBookings()

Retrieve all bookings including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedBookings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Booking]**](Booking.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBooking"></a>
# **getBooking**
> InlineResponse2007 getBooking(id)

Retrieve a booking by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBooking(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse2007**](InlineResponse2007.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCustomerBookings"></a>
# **getCustomerBookings**
> InlineResponse20013 getCustomerBookings(customerId)

Get all bookings for a customer

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var customerId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getCustomerBookings(customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **customerId** | **Integer**|  | 

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getPayments"></a>
# **getPayments**
> InlineResponse20015 getPayments(opts)

Retrieve all payments made for a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var opts = { 
  'bookingId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPayments(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20015**](InlineResponse20015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRefunds"></a>
# **getRefunds**
> InlineResponse20016 getRefunds(opts)

Retrieve all refunds for a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var opts = { 
  'bookingId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRefunds(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20016**](InlineResponse20016.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTodaysBookings"></a>
# **getTodaysBookings**
> InlineResponse20013 getTodaysBookings()

Get all bookings made today

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTodaysBookings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTommorowsBookings"></a>
# **getTommorowsBookings**
> InlineResponse20013 getTommorowsBookings()

Get all bookings made today

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTommorowsBookings(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20013**](InlineResponse20013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="initBooking"></a>
# **initBooking**
> InlineResponse201 initBooking(source, opts)

Create a new empty booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var source = "source_example"; // String | 

var opts = { 
  'agentId': 789, // Integer | 
  'agentReference': "agentReference_example" // String | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.initBooking(source, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **source** | **String**|  | 
 **agentId** | **Integer**|  | [optional] 
 **agentReference** | **String**|  | [optional] 

### Return type

[**InlineResponse201**](InlineResponse201.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeBookingDetail"></a>
# **removeBookingDetail**
> InlineResponse20017 removeBookingDetail(bookingId, bookingdetailId)

Remove a detail from a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var bookingdetailId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.removeBookingDetail(bookingId, bookingdetailId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **bookingdetailId** | **Integer**|  | 

### Return type

[**InlineResponse20017**](InlineResponse20017.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="resendConfirmation"></a>
# **resendConfirmation**
> InlineResponse2003 resendConfirmation(bookingId)

Resend the confirmation email to the lead customer

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.resendConfirmation(bookingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="reserveBooking"></a>
# **reserveBooking**
> InlineResponse20018 reserveBooking(bookingId, opts)

Reserve a booking and its sessions capcity until a set date

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var opts = { 
  'reservedUntil': new Date("2013-10-20") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.reserveBooking(bookingId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **reservedUntil** | **Date**|  | [optional] 

### Return type

[**InlineResponse20018**](InlineResponse20018.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveBooking"></a>
# **saveBooking**
> InlineResponse2003 saveBooking(bookingId)

Save a booking as a quote and release all capacity of sessions

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.saveBooking(bookingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="setLeadCustomer"></a>
# **setLeadCustomer**
> InlineResponse2003 setLeadCustomer(bookingId, customerId)

Set the lead customer for a booking

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.BookingApi();

var bookingId = 789; // Integer | 

var customerId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.setLeadCustomer(bookingId, customerId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bookingId** | **Integer**|  | 
 **customerId** | **Integer**|  | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

