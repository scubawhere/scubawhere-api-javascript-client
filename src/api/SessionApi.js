/**
 * Scubawhere API Documentation
 * This is the documentation for scubawhere's RMS API. This API is only to be used by authorized parties with valid auth tokens.  [Learn about scubawhere](http://www.scubawhere.com) to become an authorized consumer of our API 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: bryan@scubawhere.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/InlineResponse20043', 'model/ErrorModel', 'model/InlineResponse2003', 'model/InlineResponse20044', 'model/InlineResponse20045', 'model/Session'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20043'), require('../model/ErrorModel'), require('../model/InlineResponse2003'), require('../model/InlineResponse20044'), require('../model/InlineResponse20045'), require('../model/Session'));
  } else {
    // Browser globals (root is window)
    if (!root.ScubawhereApiDocumentation) {
      root.ScubawhereApiDocumentation = {};
    }
    root.ScubawhereApiDocumentation.SessionApi = factory(root.ScubawhereApiDocumentation.ApiClient, root.ScubawhereApiDocumentation.InlineResponse20043, root.ScubawhereApiDocumentation.ErrorModel, root.ScubawhereApiDocumentation.InlineResponse2003, root.ScubawhereApiDocumentation.InlineResponse20044, root.ScubawhereApiDocumentation.InlineResponse20045, root.ScubawhereApiDocumentation.Session);
  }
}(this, function(ApiClient, InlineResponse20043, ErrorModel, InlineResponse2003, InlineResponse20044, InlineResponse20045, Session) {
  'use strict';

  /**
   * Session service.
   * @module api/SessionApi
   * @version 1.0.0
   */

  /**
   * Constructs a new SessionApi. 
   * @alias module:api/SessionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createSession operation.
     * @callback module:api/SessionApi~createSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new session
     * @param {Date} start 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.boatId 
     * @param {Integer} opts.tripId 
     * @param {module:api/SessionApi~createSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */
    this.createSession = function(start, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'start' is set
      if (start == undefined || start == null) {
        throw "Missing the required parameter 'start' when calling createSession";
      }


      var pathParams = {
      };
      var queryParams = {
        'start': start,
        'boat_id': opts['boatId'],
        'trip_id': opts['tripId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20043;

      return this.apiClient.callApi(
        '/session/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSession operation.
     * @callback module:api/SessionApi~deleteSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a session by ID
     * @param {Integer} id 
     * @param {module:api/SessionApi~deleteSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.deleteSession = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteSession";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2003;

      return this.apiClient.callApi(
        '/session/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editSession operation.
     * @callback module:api/SessionApi~editSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20044} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a session by ID
     * @param {Integer} id 
     * @param {Date} start 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.boatId 
     * @param {module:api/SessionApi~editSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20044}
     */
    this.editSession = function(id, start, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling editSession";
      }

      // verify the required parameter 'start' is set
      if (start == undefined || start == null) {
        throw "Missing the required parameter 'start' when calling editSession";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'start': start,
        'boat_id': opts['boatId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20044;

      return this.apiClient.callApi(
        '/session/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterSessions operation.
     * @callback module:api/SessionApi~filterSessionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all of tsessions that match a filter
     * @param {Object} opts Optional parameters
     * @param {Date} opts.after 
     * @param {Date} opts.before 
     * @param {Integer} opts.tripId 
     * @param {Integer} opts.ticketId 
     * @param {Integer} opts.packageId 
     * @param {Integer} opts.courseId 
     * @param {module:api/SessionApi~filterSessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    this.filterSessions = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'after': opts['after'],
        'before': opts['before'],
        'trip_id': opts['tripId'],
        'ticket_id': opts['ticketId'],
        'package_id': opts['packageId'],
        'course_id': opts['courseId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/session/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSessions operation.
     * @callback module:api/SessionApi~getAllSessionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Session>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all sessions including any deleted models
     * @param {module:api/SessionApi~getAllSessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Session>}
     */
    this.getAllSessions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Session];

      return this.apiClient.callApi(
        '/session/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWithTrashedSessions operation.
     * @callback module:api/SessionApi~getAllWithTrashedSessionsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Session>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all sessions including any deleted models
     * @param {module:api/SessionApi~getAllWithTrashedSessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Session>}
     */
    this.getAllWithTrashedSessions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [Session];

      return this.apiClient.callApi(
        '/session/all-with-trashed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getManifest operation.
     * @callback module:api/SessionApi~getManifestCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the customer manifest for this session
     * @param {Integer} id 
     * @param {module:api/SessionApi~getManifestCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */
    this.getManifest = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getManifest";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20043;

      return this.apiClient.callApi(
        '/session/manifest', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSession operation.
     * @callback module:api/SessionApi~getSessionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20043} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a session by ID
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id 
     * @param {module:api/SessionApi~getSessionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20043}
     */
    this.getSession = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'id': opts['id']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20043;

      return this.apiClient.callApi(
        '/session', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTodaySessions operation.
     * @callback module:api/SessionApi~getTodaySessionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all of todays sessions
     * @param {module:api/SessionApi~getTodaySessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    this.getTodaySessions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/session/today', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTommorowSessions operation.
     * @callback module:api/SessionApi~getTommorowSessionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20045} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all of tommorows sessions
     * @param {module:api/SessionApi~getTommorowSessionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20045}
     */
    this.getTommorowSessions = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20045;

      return this.apiClient.callApi(
        '/session/tommorow', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));