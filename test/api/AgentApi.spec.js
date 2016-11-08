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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.ScubawhereApiDocumentation);
  }
}(this, function(expect, ScubawhereApiDocumentation) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new ScubawhereApiDocumentation.AgentApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('AgentApi', function() {
    describe('createAgent', function() {
      it('should call createAgent successfully', function(done) {
        //uncomment below and update the code to test createAgent
        //instance.createAgent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteAgent', function() {
      it('should call deleteAgent successfully', function(done) {
        //uncomment below and update the code to test deleteAgent
        //instance.deleteAgent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAgent', function() {
      it('should call getAgent successfully', function(done) {
        //uncomment below and update the code to test getAgent
        //instance.getAgent(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllAgents', function() {
      it('should call getAllAgents successfully', function(done) {
        //uncomment below and update the code to test getAllAgents
        //instance.getAllAgents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getAllWithTrashedAgents', function() {
      it('should call getAllWithTrashedAgents successfully', function(done) {
        //uncomment below and update the code to test getAllWithTrashedAgents
        //instance.getAllWithTrashedAgents(pet, function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));