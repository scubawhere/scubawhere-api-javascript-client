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
    define(['ApiClient', 'model/InlineResponse20023', 'model/ErrorModel', 'model/InlineResponse20024', 'model/InlineResponse20025', 'model/InlineResponse20026'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/InlineResponse20023'), require('../model/ErrorModel'), require('../model/InlineResponse20024'), require('../model/InlineResponse20025'), require('../model/InlineResponse20026'));
  } else {
    // Browser globals (root is window)
    if (!root.ScubawhereApiDocumentation) {
      root.ScubawhereApiDocumentation = {};
    }
    root.ScubawhereApiDocumentation.CompanyApi = factory(root.ScubawhereApiDocumentation.ApiClient, root.ScubawhereApiDocumentation.InlineResponse20023, root.ScubawhereApiDocumentation.ErrorModel, root.ScubawhereApiDocumentation.InlineResponse20024, root.ScubawhereApiDocumentation.InlineResponse20025, root.ScubawhereApiDocumentation.InlineResponse20026);
  }
}(this, function(ApiClient, InlineResponse20023, ErrorModel, InlineResponse20024, InlineResponse20025, InlineResponse20026) {
  'use strict';

  /**
   * Company service.
   * @module api/CompanyApi
   * @version 1.0.0
   */

  /**
   * Constructs a new CompanyApi. 
   * @alias module:api/CompanyApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the attachLocations operation.
     * @callback module:api/CompanyApi~attachLocationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20023} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a location to a company
     * @param {Object} opts Optional parameters
     * @param {String} opts.name 
     * @param {String} opts.description 
     * @param {Number} opts.latitude 
     * @param {Number} opts.longitude 
     * @param {module:api/CompanyApi~attachLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20023}
     */
    this.attachLocations = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'name': opts['name'],
        'description': opts['description'],
        'latitude': opts['latitude'],
        'longitude': opts['longitude']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20023;

      return this.apiClient.callApi(
        '/company/add-location', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLocations operation.
     * @callback module:api/CompanyApi~getLocationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20024} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the locations this Dive Centre uses
     * @param {String} latitude 
     * @param {String} longitude 
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.limit 
     * @param {module:api/CompanyApi~getLocationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20024}
     */
    this.getLocations = function(latitude, longitude, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'latitude' is set
      if (latitude == undefined || latitude == null) {
        throw "Missing the required parameter 'latitude' when calling getLocations";
      }

      // verify the required parameter 'longitude' is set
      if (longitude == undefined || longitude == null) {
        throw "Missing the required parameter 'longitude' when calling getLocations";
      }


      var pathParams = {
      };
      var queryParams = {
        'latitude': latitude,
        'longitude': longitude,
        'limit': opts['limit']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20024;

      return this.apiClient.callApi(
        '/company/locations', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getPickupSchedule operation.
     * @callback module:api/CompanyApi~getPickupScheduleCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20025} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the pick up schedule for a date
     * @param {String} _date 
     * @param {module:api/CompanyApi~getPickupScheduleCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20025}
     */
    this.getPickupSchedule = function(_date, callback) {
      var postBody = null;

      // verify the required parameter '_date' is set
      if (_date == undefined || _date == null) {
        throw "Missing the required parameter '_date' when calling getPickupSchedule";
      }


      var pathParams = {
      };
      var queryParams = {
        'date': _date
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20025;

      return this.apiClient.callApi(
        '/company/pick-up-schedule', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateCompany operation.
     * @callback module:api/CompanyApi~updateCompanyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse20026} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update the companies information
     * @param {Integer} id 
     * @param {Object} opts Optional parameters
     * @param {String} opts.contact 
     * @param {String} opts.description 
     * @param {String} opts.name 
     * @param {String} opts.address1 
     * @param {String} opts.address2 
     * @param {String} opts.city 
     * @param {String} opts.county 
     * @param {String} opts.postcode 
     * @param {Integer} opts.countryId 
     * @param {Integer} opts.currencyId 
     * @param {String} opts.businessPhone 
     * @param {String} opts.businessEmail 
     * @param {String} opts.vatNumber 
     * @param {String} opts.registrationNumber 
     * @param {String} opts.website 
     * @param {module:api/CompanyApi~updateCompanyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/InlineResponse20026}
     */
    this.updateCompany = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id == undefined || id == null) {
        throw "Missing the required parameter 'id' when calling updateCompany";
      }


      var pathParams = {
      };
      var queryParams = {
        'id': id,
        'contact': opts['contact'],
        'description': opts['description'],
        'name': opts['name'],
        'address_1': opts['address1'],
        'address_2': opts['address2'],
        'city': opts['city'],
        'county': opts['county'],
        'postcode': opts['postcode'],
        'country_id': opts['countryId'],
        'currency_id': opts['currencyId'],
        'business_phone': opts['businessPhone'],
        'business_email': opts['businessEmail'],
        'vat_number': opts['vatNumber'],
        'registration_number': opts['registrationNumber'],
        'website': opts['website']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = InlineResponse20026;

      return this.apiClient.callApi(
        '/company/update', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
