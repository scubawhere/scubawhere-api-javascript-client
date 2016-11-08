# ScubawhereApiDocumentation.TicketApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTicket**](TicketApi.md#addTicket) | **POST** /ticket/add | Create a new ticket
[**deleteTicket**](TicketApi.md#deleteTicket) | **DELETE** /ticket/delete | Delete a ticket
[**editTicket**](TicketApi.md#editTicket) | **PUT** /ticket/edit | Update an existing ticket
[**getAllAvailableTickets**](TicketApi.md#getAllAvailableTickets) | **GET** /ticket/only-available | Retrieve all tickets that are available to booked today
[**getAllTickets**](TicketApi.md#getAllTickets) | **GET** /ticket/all | Retrieve all tickets
[**getAllWithTrashedTickets**](TicketApi.md#getAllWithTrashedTickets) | **GET** /ticket/all-with-trashed | Retrieve all tickets
[**getTicket**](TicketApi.md#getTicket) | **GET** /ticket | Retrieve a ticket by ID


<a name="addTicket"></a>
# **addTicket**
> InlineResponse2014 addTicket(name, trips, prices, opts)

Create a new ticket

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var name = "name_example"; // String | 

var trips = [56]; // [Integer] | 

var prices = new ScubawhereApiDocumentation.BasePrice(); // BasePrice | 

var opts = { 
  'description': "description_example", // String | 
  'availableFrom': new Date("2013-10-20"), // Date | 
  'availableUntil': new Date("2013-10-20"), // Date | 
  'onlyPackaged': true, // Boolean | 
  'boats': [56], // [Integer] | 
  'boatrooms': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTicket(name, trips, prices, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **trips** | [**[Integer]**](Integer.md)|  | 
 **prices** | [**BasePrice**](BasePrice.md)|  | 
 **description** | **String**|  | [optional] 
 **availableFrom** | **Date**|  | [optional] 
 **availableUntil** | **Date**|  | [optional] 
 **onlyPackaged** | **Boolean**|  | [optional] 
 **boats** | [**[Integer]**](Integer.md)|  | [optional] 
 **boatrooms** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTicket"></a>
# **deleteTicket**
> InlineResponse2014 deleteTicket(name)

Delete a ticket

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var name = "name_example"; // String | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteTicket(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="editTicket"></a>
# **editTicket**
> InlineResponse2014 editTicket(id, name, trips, prices, opts)

Update an existing ticket

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var id = 789; // Integer | 

var name = "name_example"; // String | 

var trips = [56]; // [Integer] | 

var prices = new ScubawhereApiDocumentation.BasePrice(); // BasePrice | 

var opts = { 
  'description': "description_example", // String | 
  'availableFrom': new Date("2013-10-20"), // Date | 
  'availableUntil': new Date("2013-10-20"), // Date | 
  'onlyPackaged': true, // Boolean | 
  'boats': [56], // [Integer] | 
  'boatrooms': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editTicket(id, name, trips, prices, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **trips** | [**[Integer]**](Integer.md)|  | 
 **prices** | [**BasePrice**](BasePrice.md)|  | 
 **description** | **String**|  | [optional] 
 **availableFrom** | **Date**|  | [optional] 
 **availableUntil** | **Date**|  | [optional] 
 **onlyPackaged** | **Boolean**|  | [optional] 
 **boats** | [**[Integer]**](Integer.md)|  | [optional] 
 **boatrooms** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse2014**](InlineResponse2014.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAvailableTickets"></a>
# **getAllAvailableTickets**
> [Ticket] getAllAvailableTickets()

Retrieve all tickets that are available to booked today

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAvailableTickets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTickets"></a>
# **getAllTickets**
> [Ticket] getAllTickets()

Retrieve all tickets

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTickets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedTickets"></a>
# **getAllWithTrashedTickets**
> [Ticket] getAllWithTrashedTickets()

Retrieve all tickets

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedTickets(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Ticket]**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTicket"></a>
# **getTicket**
> Ticket getTicket(id)

Retrieve a ticket by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TicketApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTicket(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Ticket**](Ticket.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

