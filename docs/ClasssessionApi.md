# ScubawhereApiDocumentation.ClasssessionApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**classSessionGet**](ClasssessionApi.md#classSessionGet) | **GET** /class-session | Retrieve a class session by ID
[**createClassSession**](ClasssessionApi.md#createClassSession) | **POST** /class-session/add | Create a new class session
[**deleteClasssession**](ClasssessionApi.md#deleteClasssession) | **DELETE** /class-session/delete | Delete a class session by ID
[**editClassSession**](ClasssessionApi.md#editClassSession) | **POST** /class-session/edit | Update a class session by ID
[**filterClassSession**](ClasssessionApi.md#filterClassSession) | **GET** /class-session/filter | Retrieve all class sessions that match a filter
[**getAllClassSessions**](ClasssessionApi.md#getAllClassSessions) | **GET** /class-session/all | Retrieve all class sessions including any deleted models
[**getAllWithTrashedClassSessions**](ClasssessionApi.md#getAllWithTrashedClassSessions) | **GET** /class-session/all-with-trashed | Retrieve all class sessions including any deleted models
[**getClassSessionManifest**](ClasssessionApi.md#getClassSessionManifest) | **GET** /class-session/manifest | Retrieve the customer manifest for a class session
[**getTodaysClassSession**](ClasssessionApi.md#getTodaysClassSession) | **GET** /class-session/today | Retrieve all class sessions that start today
[**getTommorowsClassSession**](ClasssessionApi.md#getTommorowsClassSession) | **GET** /class-session/tommorow | Retrieve all class sessions that start tommorow


<a name="classSessionGet"></a>
# **classSessionGet**
> TrainingSession classSessionGet(id)

Retrieve a class session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.classSessionGet(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**TrainingSession**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createClassSession"></a>
# **createClassSession**
> InlineResponse20019 createClassSession(start, trainingId)

Create a new class session

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var start = new Date("2013-10-20"); // Date | 

var trainingId = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createClassSession(start, trainingId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **start** | **Date**|  | 
 **trainingId** | **Integer**|  | 

### Return type

[**InlineResponse20019**](InlineResponse20019.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteClasssession"></a>
# **deleteClasssession**
> InlineResponse2003 deleteClasssession(id)

Delete a class session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteClasssession(id, callback);
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

<a name="editClassSession"></a>
# **editClassSession**
> InlineResponse20020 editClassSession(id, start)

Update a class session by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var id = 56; // Integer | 

var start = new Date("2013-10-20"); // Date | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editClassSession(id, start, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **start** | **Date**|  | 

### Return type

[**InlineResponse20020**](InlineResponse20020.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterClassSession"></a>
# **filterClassSession**
> [TrainingSession] filterClassSession()

Retrieve all class sessions that match a filter

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterClassSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrainingSession]**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllClassSessions"></a>
# **getAllClassSessions**
> [TrainingSession] getAllClassSessions()

Retrieve all class sessions including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllClassSessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrainingSession]**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedClassSessions"></a>
# **getAllWithTrashedClassSessions**
> [TrainingSession] getAllWithTrashedClassSessions()

Retrieve all class sessions including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedClassSessions(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrainingSession]**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getClassSessionManifest"></a>
# **getClassSessionManifest**
> TrainingSessionManifest getClassSessionManifest(id)

Retrieve the customer manifest for a class session

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getClassSessionManifest(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**TrainingSessionManifest**](TrainingSessionManifest.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTodaysClassSession"></a>
# **getTodaysClassSession**
> [TrainingSession] getTodaysClassSession()

Retrieve all class sessions that start today

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTodaysClassSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrainingSession]**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTommorowsClassSession"></a>
# **getTommorowsClassSession**
> [TrainingSession] getTommorowsClassSession()

Retrieve all class sessions that start tommorow

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ClasssessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTommorowsClassSession(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[TrainingSession]**](TrainingSession.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

