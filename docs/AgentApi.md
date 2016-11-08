# ScubawhereApiDocumentation.AgentApi

All URIs are relative to *https://dev.scubawhere.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createAgent**](AgentApi.md#createAgent) | **POST** /agent/add | Create a new agent
[**deleteAgent**](AgentApi.md#deleteAgent) | **DELETE** /agent/delete | Delete an agent by ID
[**getAgent**](AgentApi.md#getAgent) | **GET** /agent | Retrieve an agent by ID
[**getAllAgents**](AgentApi.md#getAllAgents) | **GET** /agent/all | Retrieve all agents
[**getAllWithTrashedAgents**](AgentApi.md#getAllWithTrashedAgents) | **GET** /agent/all-with-trashed | Retrieve all agents including any deleted models


<a name="createAgent"></a>
# **createAgent**
> InlineResponse2004 createAgent(name, branchName, branchAddress, branchPhone, branchEmail, commission, terms, opts)

Create a new agent

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AgentApi();

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
apiInstance.createAgent(name, branchName, branchAddress, branchPhone, branchEmail, commission, terms, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

<a name="deleteAgent"></a>
# **deleteAgent**
> InlineResponse2003 deleteAgent(id)

Delete an agent by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AgentApi();

var id = 789; // Integer | ID of the Agent


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.deleteAgent(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the Agent | 

### Return type

[**InlineResponse2003**](InlineResponse2003.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAgent"></a>
# **getAgent**
> InlineResponse2004 getAgent(id)

Retrieve an agent by ID

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AgentApi();

var id = 789; // Integer | ID of the agent to be retrieved


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAgent(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **Integer**| ID of the agent to be retrieved | 

### Return type

[**InlineResponse2004**](InlineResponse2004.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllAgents"></a>
# **getAllAgents**
> [Agent] getAllAgents()

Retrieve all agents

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AgentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllAgents(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Agent]**](Agent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllWithTrashedAgents"></a>
# **getAllWithTrashedAgents**
> [Agent] getAllWithTrashedAgents()

Retrieve all agents including any deleted models

### Example
```javascript
var ScubawhereApiDocumentation = require('scubawhere_api_documentation');

var apiInstance = new ScubawhereApiDocumentation.AgentApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllWithTrashedAgents(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[Agent]**](Agent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

