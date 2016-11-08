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
    define(['ApiClient', 'model/ErrorModel', 'model/InlineResponse2002', 'model/InlineResponse2003', 'model/InlineResponse2001', 'model/Addon'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/InlineResponse2002'), require('../model/InlineResponse2003'), require('../model/InlineResponse2001'), require('../model/Addon'));
  } else {
    // Browser globals (root is window)
    if (!root.ScubawhereApiDocumentation) {
      root.ScubawhereApiDocumentation = {};
    }
    root.ScubawhereApiDocumentation.AddonApi = factory(root.ScubawhereApiDocumentation.ApiClient, root.ScubawhereApiDocumentation.ErrorModel, root.ScubawhereApiDocumentation.InlineResponse2002, root.ScubawhereApiDocumentation.InlineResponse2003, root.ScubawhereApiDocumentation.InlineResponse2001, root.ScubawhereApiDocumentation.Addon);
  }
}(this, function(ApiClient, ErrorModel, InlineResponse2002, InlineResponse2003, InlineResponse2001, Addon) {
  'use strict';

  /**
   * Addon service.
   * @module api/AddonApi
   * @version 1.0.0
   */

  /**
   * Constructs a new AddonApi. 
   * @alias module:api/AddonApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAddon operation.
     * @callback module:api/AddonApi~addAddonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new addon
     * @param {String} name Name of the type of addon
     * @param {Integer} basePrices Prices for addon
     * @param {Object} opts Optional parameters
     * @param {String} opts.description Description of the addon
     * @param {module:api/AddonApi~addAddonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.addAddon = function(name, basePrices, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name == undefined || name == null) {
        throw "Missing the required parameter 'name' when calling addAddon";
      }

      // verify the required parameter 'basePrices' is set
      if (basePrices == undefined || basePrices == null) {
        throw "Missing the required parameter 'basePrices' when calling addAddon";
      }


      var pathParams = {
      };
      var queryParams = {
        'name': name,
        'description': opts['description'],
        'base_prices': basePrices
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/addon/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteAddon operation.
     * @callback module:api/AddonApi~deleteAddonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an addon by ID
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.body ID of the Addon
     * @param {module:api/AddonApi~deleteAddonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.deleteAddon = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'body': opts['body']
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
        '/addon/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAddon operation.
     * @callback module:api/AddonApi~getAddonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2001} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve an addon by ID
     * @param {Integer} id ID of the addon to be retrieved
     * @param {module:api/AddonApi~getAddonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2001}
     */
    this.getAddon = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling getAddon";
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
      var returnType = InlineResponse2001;

      return this.apiClient.callApi(
        '/addon', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllAddons operation.
     * @callback module:api/AddonApi~getAllAddonsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Addon>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all addons
     * @param {module:api/AddonApi~getAllAddonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Addon>}
     */
    this.getAllAddons = function(callback) {
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
      var returnType = [Addon];

      return this.apiClient.callApi(
        '/addon/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllWithTrashedAddons operation.
     * @callback module:api/AddonApi~getAllWithTrashedAddonsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Addon>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all addons including any deleted models
     * @param {module:api/AddonApi~getAllWithTrashedAddonsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Addon>}
     */
    this.getAllWithTrashedAddons = function(callback) {
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
      var returnType = [Addon];

      return this.apiClient.callApi(
        '/addon/all-with-trashed', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateAddon operation.
     * @callback module:api/AddonApi~updateAddonCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update an Addon
     * Updates the addon by id using the specified fields
     * @param {Integer} id ID of the Addon to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Name of the Addon
     * @param {String} opts.description Description of the Addon
     * @param {module:api/AddonApi~updateAddonCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2002}
     */
    this.updateAddon = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateAddon";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'name': opts['name'],
        'description': opts['description']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/addon/edit', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
