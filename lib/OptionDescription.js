"use strict";

exports.__esModule = true;
exports.default = OptionDescription;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _chartControls = require("@arthanasti/chart-controls");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
const propTypes = {
  option: _propTypes.default.object.isRequired
}; // This component provides a general tooltip for options
// in a SelectControl

function OptionDescription({
  option
}) {
  return /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "m-r-5 option-label"
  }, option.label), option.description && /*#__PURE__*/_react.default.createElement(_chartControls.InfoTooltipWithTrigger, {
    className: "m-r-5 text-muted",
    icon: "question-circle-o",
    tooltip: option.description,
    label: `descr-${option.label}`
  }));
}

OptionDescription.propTypes = propTypes;