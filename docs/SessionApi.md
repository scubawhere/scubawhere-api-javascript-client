# ScubawhereApiDocumentation.SessionApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSession**](SessionApi.md#createSession) | **POST** /session/add | Create a new session
[**deleteSession**](SessionApi.md#deleteSession) | **DELETE** /session/delete | Delete a session by ID
[**editSession**](SessionApi.md#editSession) | **POST** /session/edit | Update a session by ID
[**filterSessions**](SessionApi.md#filterSessions) | **GET** /session/filter | Retrieve all of tsessions that match a filter
[**getAllSessions**](SessionApi.md#getAllSessions) | **GET** /session/all | Retrieve all sessions including any deleted models
[**getAllWithTrashedSessions**](SessionApi.md#getAllWithTrashedSessions) | **GET** /session/all-with-trashed | Retrieve all sessions including any deleted models
[**getManifest**](SessionApi.md#getManifest) | **GET** /session/manifest | Retrieve the customer manifest for this session
[**getSession**](SessionApi.md#getSession) | **GET** /session | Retrieve a session by ID
[**getTodaySessions**](SessionApi.md#getTodaySessions) | **GET** /session/today | Retrieve all of todays sessions
[**getTommorowSessions**](SessionApi.md#getTommorowSessions) | **GET** /session/tommorow | Retrieve all of tommorows sessions


<a name="createSession"></a>
# **createSession**
> InlineResponse20043 createSession(start, opts)

Create a new session

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var start = new Date("2013-10-20"); // Date | 

var opts = { 
  'boatId': 789, // Integer | 
  'tripId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createSession(start, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Date**|  | 
 **boatId** | **Integer**|  | [optional] 
 **tripId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSession"></a>
# **deleteSession**
> InlineResponse2003 deleteSession(id)

Delete a session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteSession(id, callback);
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

<a name="editSession"></a>
# **editSession**
> InlineResponse20044 editSession(id, start, opts)

Update a session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var id = 789; // Integer | 

var start = new Date("2013-10-20"); // Date | 

var opts = { 
  'boatId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editSession(id, start, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **start** | **Date**|  | 
 **boatId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20044**](InlineResponse20044.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterSessions"></a>
# **filterSessions**
> InlineResponse20045 filterSessions(opts)

Retrieve all of tsessions that match a filter

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var opts = { 
  'after': new Date("2013-10-20"), // Date | 
  'before': new Date("2013-10-20"), // Date | 
  'tripId': 789, // Integer | 
  'ticketId': 789, // Integer | 
  'packageId': 789, // Integer | 
  'courseId': 789 // Integer | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterSessions(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **after** | **Date**|  | [optional] 
 **before** | **Date**|  | [optional] 
 **tripId** | **Integer**|  | [optional] 
 **ticketId** | **Integer**|  | [optional] 
 **packageId** | **Integer**|  | [optional] 
 **courseId** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSessions"></a>
# **getAllSessions**
> [Session] getAllSessions()

Retrieve all sessions including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Session]**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedSessions"></a>
# **getAllWithTrashedSessions**
> [Session] getAllWithTrashedSessions()

Retrieve all sessions including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedSessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Session]**](Session.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getManifest"></a>
# **getManifest**
> InlineResponse20043 getManifest(id)

Retrieve the customer manifest for this session

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getManifest(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSession"></a>
# **getSession**
> InlineResponse20043 getSession(opts)

Retrieve a session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

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
apiInstance.getSession(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20043**](InlineResponse20043.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTodaySessions"></a>
# **getTodaySessions**
> InlineResponse20045 getTodaySessions()

Retrieve all of todays sessions

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTodaySessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTommorowSessions"></a>
# **getTommorowSessions**
> InlineResponse20045 getTommorowSessions()

Retrieve all of tommorows sessions

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTommorowSessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**InlineResponse20045**](InlineResponse20045.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

