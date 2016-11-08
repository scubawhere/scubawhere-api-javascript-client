# ScubawhereApiDocumentation.CourseApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCourse**](CourseApi.md#createCourse) | **POST** /course/add | Create a new course
[**deleteCourse**](CourseApi.md#deleteCourse) | **DELETE** /course/delete | Delete a course by ID
[**editCourse**](CourseApi.md#editCourse) | **POST** /course/edit | Update a course by ID
[**getAllCourses**](CourseApi.md#getAllCourses) | **GET** /course/all | Retrieve all courses including any deleted models
[**getAllWithTrashedCourses**](CourseApi.md#getAllWithTrashedCourses) | **GET** /course/all-with-trashed | Retrieve all courses including any deleted models
[**getCourse**](CourseApi.md#getCourse) | **GET** /course | Retrieve a course by ID


<a name="createCourse"></a>
# **createCourse**
> InlineResponse20027 createCourse(name, description, capacity, prices, opts)

Create a new course

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

var name = "name_example"; // String | 

var description = "description_example"; // String | 

var capacity = 56; // Integer | 

var prices = [3.4]; // [Number] | 

var opts = { 
  'certificateId': 56, // Integer | 
  'tickets': [56], // [Integer] | 
  'trainings': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createCourse(name, description, capacity, prices, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**|  | 
 **description** | **String**|  | 
 **capacity** | **Integer**|  | 
 **prices** | [**[Number]**](Number.md)|  | 
 **certificateId** | **Integer**|  | [optional] 
 **tickets** | [**[Integer]**](Integer.md)|  | [optional] 
 **trainings** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteCourse"></a>
# **deleteCourse**
> InlineResponse2003 deleteCourse(id)

Delete a course by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

var id = 789; // Integer | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteCourse(id, callback);
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

<a name="editCourse"></a>
# **editCourse**
> InlineResponse20028 editCourse(id, name, description, capacity, opts)

Update a course by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

var id = 789; // Integer | 

var name = "name_example"; // String | 

var description = "description_example"; // String | 

var capacity = 56; // Integer | 

var opts = { 
  'certificateId': 56, // Integer | 
  'tickets': [56], // [Integer] | 
  'trainings': [56] // [Integer] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.editCourse(id, name, description, capacity, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | 
 **name** | **String**|  | 
 **description** | **String**|  | 
 **capacity** | **Integer**|  | 
 **certificateId** | **Integer**|  | [optional] 
 **tickets** | [**[Integer]**](Integer.md)|  | [optional] 
 **trainings** | [**[Integer]**](Integer.md)|  | [optional] 

### Return type

[**InlineResponse20028**](InlineResponse20028.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllCourses"></a>
# **getAllCourses**
> [Course] getAllCourses()

Retrieve all courses including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllCourses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Course]**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedCourses"></a>
# **getAllWithTrashedCourses**
> [Course] getAllWithTrashedCourses()

Retrieve all courses including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedCourses(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Course]**](Course.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getCourse"></a>
# **getCourse**
> InlineResponse20027 getCourse(opts)

Retrieve a course by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.CourseApi();

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
apiInstance.getCourse(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**|  | [optional] 

### Return type

[**InlineResponse20027**](InlineResponse20027.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

