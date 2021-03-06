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
    define(['ApiClient', 'model/ErrorModel', 'model/InlineResponse20029', 'model/InlineResponse2003', 'model/InlineResponse20030', 'model/Customer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorModel'), require('../model/InlineResponse20029'), require('../model/InlineResponse2003'), require('../model/InlineResponse20030'), require('../model/Customer'));
  } else {
    // Browser globals (root is window)
    if (!root.ScubawhereApiDocumentation) {
      root.ScubawhereApiDocumentation = {};
    }
    root.ScubawhereApiDocumentation.CustomerApi = factory(root.ScubawhereApiDocumentation.ApiClient, root.ScubawhereApiDocumentation.ErrorModel, root.ScubawhereApiDocumentation.InlineResponse20029, root.ScubawhereApiDocumentation.InlineResponse2003, root.ScubawhereApiDocumentation.InlineResponse20030, root.ScubawhereApiDocumentation.Customer);
  }
}(this, function(ApiClient, ErrorModel, InlineResponse20029, InlineResponse2003, InlineResponse20030, Customer) {
  'use strict';

  /**
   * Customer service.
   * @module api/CustomerApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CustomerApi. 
   * @alias module:api/CustomerApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createCustomer operation.
     * @callback module:api/CustomerApi~createCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new customer
     * @param {String} email 
     * @param {String} firstname 
     * @param {String} lastname 
     * @param {Object} opts Optional parameters
     * @param {Date} opts.birthday 
     * @param {Integer} opts.gender 
     * @param {String} opts.address1 
     * @param {String} opts.address2 
     * @param {String} opts.city 
     * @param {String} opts.county 
     * @param {String} opts.postcode 
     * @param {Integer} opts.countryId 
     * @param {String} opts.phone 
     * @param {Date} opts.lastDive 
     * @param {Integer} opts.numberOfDives 
     * @param {String} opts.chestSize 
     * @param {String} opts.showSize 
     * @param {String} opts.height 
     * @param {Array.<Integer>} opts.certificates 
     * @param {module:api/CustomerApi~createCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20029}
     */
    this.createCustomer = function(email, firstname, lastname, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'email' is set
      if (email == undefined || email == null) {
        throw "Missing the required parameter 'email' when calling createCustomer";
      }

      // verify the required parameter 'firstname' is set
      if (firstname == undefined || firstname == null) {
        throw "Missing the required parameter 'firstname' when calling createCustomer";
      }

      // verify the required parameter 'lastname' is set
      if (lastname == undefined || lastname == null) {
        throw "Missing the required parameter 'lastname' when calling createCustomer";
      }


      var pathParams = {
      };
      var queryParams = {
        'email': email,
        'firstname': firstname,
        'lastname': lastname,
        'birthday': opts['birthday'],
        'gender': opts['gender'],
        'address_1': opts['address1'],
        'address_2': opts['address2'],
        'city': opts['city'],
        'county': opts['county'],
        'postcode': opts['postcode'],
        'country_id': opts['countryId'],
        'phone': opts['phone'],
        'last_dive': opts['lastDive'],
        'number_of_dives': opts['numberOfDives'],
        'chest_size': opts['chestSize'],
        'show_size': opts['showSize'],
        'height': opts['height'],
        'certificates': this.apiClient.buildCollectionParam(opts['certificates'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/customer/add', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteCustomer operation.
     * @callback module:api/CustomerApi~deleteCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2003} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a customer by ID
     * @param {Integer} id 
     * @param {module:api/CustomerApi~deleteCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse2003}
     */
    this.deleteCustomer = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling deleteCustomer";
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
        '/customer/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the editCustomer operation.
     * @callback module:api/CustomerApi~editCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20030} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a customer by ID
     * @param {Integer} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.email 
     * @param {String} opts.firstname 
     * @param {String} opts.lastname 
     * @param {Date} opts.birthday 
     * @param {Integer} opts.gender 
     * @param {String} opts.address1 
     * @param {String} opts.address2 
     * @param {String} opts.city 
     * @param {String} opts.county 
     * @param {String} opts.postcode 
     * @param {Integer} opts.countryId 
     * @param {String} opts.phone 
     * @param {Date} opts.lastDive 
     * @param {Integer} opts.numberOfDives 
     * @param {String} opts.chestSize 
     * @param {String} opts.showSize 
     * @param {String} opts.height 
     * @param {Array.<Integer>} opts.certificates 
     * @param {module:api/CustomerApi~editCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20030}
     */
    this.editCustomer = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling editCustomer";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'email': opts['email'],
        'firstname': opts['firstname'],
        'lastname': opts['lastname'],
        'birthday': opts['birthday'],
        'gender': opts['gender'],
        'address_1': opts['address1'],
        'address_2': opts['address2'],
        'city': opts['city'],
        'county': opts['county'],
        'postcode': opts['postcode'],
        'country_id': opts['countryId'],
        'phone': opts['phone'],
        'last_dive': opts['lastDive'],
        'number_of_dives': opts['numberOfDives'],
        'chest_size': opts['chestSize'],
        'show_size': opts['showSize'],
        'height': opts['height'],
        'certificates': this.apiClient.buildCollectionParam(opts['certificates'], 'multi')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20030;

      return this.apiClient.callApi(
        '/customer/edit', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllCustomers operation.
     * @callback module:api/CustomerApi~getAllCustomersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Customer>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve all customers
     * @param {module:api/CustomerApi~getAllCustomersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Customer>}
     */
    this.getAllCustomers = function(callback) {
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
      var returnType = [Customer];

      return this.apiClient.callApi(
        '/customer/all', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCustomer operation.
     * @callback module:api/CustomerApi~getCustomerCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20029} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a customer by ID
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.id 
     * @param {module:api/CustomerApi~getCustomerCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20029}
     */
    this.getCustomer = function(opts, callback) {
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
      var returnType = InlineResponse20029;

      return this.apiClient.callApi(
        '/customer', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
