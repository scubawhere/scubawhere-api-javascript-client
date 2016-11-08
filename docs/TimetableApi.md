# ScubawhereApiDocumentation.TimetableApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addTimetable**](TimetableApi.md#addTimetable) | **GET** /timetable/add | Create a new timetable for sessions
[**getAllTimetables**](TimetableApi.md#getAllTimetables) | **GET** /timetable/all | Retrieve all of the timetables for sessions
[**getTimetable**](TimetableApi.md#getTimetable) | **GET** /timetable | Retrieve a timetable by ID


<a name="addTimetable"></a>
# **addTimetable**
> InlineResponse2015 addTimetable(schedule, sessionId, opts)

Create a new timetable for sessions

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TimetableApi();

var schedule = "schedule_example"; // String | 

var sessionId = 789; // Integer | 

var opts = { 
  'until': new Date("2013-10-20") // Date | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTimetable(schedule, sessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | **String**|  | 
 **sessionId** | **Integer**|  | 
 **until** | **Date**|  | [optional] 

### Return type

[**InlineResponse2015**](InlineResponse2015.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllTimetables"></a>
# **getAllTimetables**
> [Timetable] getAllTimetables()

Retrieve all of the timetables for sessions

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TimetableApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllTimetables(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Timetable]**](Timetable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTimetable"></a>
# **getTimetable**
> Timetable getTimetable(id)

Retrieve a timetable by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.TimetableApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTimetable(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Timetable**](Timetable.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

