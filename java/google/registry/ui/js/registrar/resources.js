// Copyright 2017 The Nomulus Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('registry.registrar.Resources');

goog.require('goog.Uri');
goog.require('goog.dom');
goog.require('registry.Resource');
goog.require('registry.ResourceComponent');
goog.require('registry.soy.registrar.console');

goog.forwardDeclare('registry.registrar.Console');



/**
 * Resources and billing page.
 * @param {!registry.registrar.Console} console
 * @param {string} xsrfToken Security token to pass back to the server.
 * @constructor
 * @extends {registry.ResourceComponent}
 * @final
 */
registry.registrar.Resources = function(console, xsrfToken) {
  registry.registrar.Resources.base(
      this,
      'constructor',
      console,
      new registry.Resource(new goog.Uri('/registrar-premium-price-ack'), xsrfToken),
      registry.soy.registrar.console.resources,
      null);
};
goog.inherits(registry.registrar.Resources,
              registry.ResourceComponent);


/** @override */
registry.registrar.Resources.prototype.bindToDom = function(id) {
  registry.registrar.Resources.base(this, 'bindToDom', 'fake');
  goog.dom.removeNode(goog.dom.getRequiredElement('reg-app-btn-back'));
};
