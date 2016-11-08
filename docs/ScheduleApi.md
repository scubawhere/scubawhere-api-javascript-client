# ScubawhereApiDocumentation.ScheduleApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSchedule**](ScheduleApi.md#addSchedule) | **GET** /schedule/add | Create a new schedule for classes
[**getAllSchedules**](ScheduleApi.md#getAllSchedules) | **GET** /schedule/all | Retrieve all of the schedules for classes
[**getSchedule**](ScheduleApi.md#getSchedule) | **GET** /schedule | Retrieve a schedule by ID


<a name="addSchedule"></a>
# **addSchedule**
> InlineResponse2013 addSchedule(schedule, trainingSessionId, opts)

Create a new schedule for classes

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ScheduleApi();

var schedule = "schedule_example"; // String | 

var trainingSessionId = 789; // Integer | 

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
apiInstance.addSchedule(schedule, trainingSessionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **schedule** | **String**|  | 
 **trainingSessionId** | **Integer**|  | 
 **until** | **Date**|  | [optional] 

### Return type

[**InlineResponse2013**](InlineResponse2013.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSchedules"></a>
# **getAllSchedules**
> [Schedule] getAllSchedules()

Retrieve all of the schedules for classes

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ScheduleApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSchedules(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Schedule]**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSchedule"></a>
# **getSchedule**
> Schedule getSchedule(id)

Retrieve a schedule by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.ScheduleApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSchedule(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 

### Return type

[**Schedule**](Schedule.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

