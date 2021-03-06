"use strict";

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _chartControls = require("@arthanasti/chart-controls");

var _OptionDescription = _interopRequireDefault(require("./OptionDescription"));

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
var _default = {
  controlPanelSections: [{
    label: (0, _core.t)('Query'),
    expanded: true,
    controlSetRows: [['metrics'], ['adhoc_filters'], ['custom_filters'], ['groupby'], ['limit', 'timeseries_limit_metric'], [{
      name: 'order_desc',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Sort Descending'),
        default: true,
        description: (0, _core.t)('Whether to sort descending or ascending')
      }
    }, {
      name: 'contribution',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Contribution'),
        default: false,
        description: (0, _core.t)('Compute the contribution to the total')
      }
    }], ['row_limit', null]]
  }, {
    label: (0, _core.t)('Time Series Options'),
    expanded: true,
    controlSetRows: [[{
      name: 'time_series_option',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Options'),
        validators: [_core.validateNonEmpty],
        default: 'not_time',
        valueKey: 'value',
        options: [{
          label: (0, _core.t)('Not Time Series'),
          value: 'not_time',
          description: (0, _core.t)('Ignore time')
        }, {
          label: (0, _core.t)('Time Series'),
          value: 'time_series',
          description: (0, _core.t)('Standard time series')
        }, {
          label: (0, _core.t)('Aggregate Mean'),
          value: 'agg_mean',
          description: (0, _core.t)('Mean of values over specified period')
        }, {
          label: (0, _core.t)('Aggregate Sum'),
          value: 'agg_sum',
          description: (0, _core.t)('Sum of values over specified period')
        }, {
          label: (0, _core.t)('Difference'),
          value: 'point_diff',
          description: (0, _core.t)('Metric change in value from `since` to `until`')
        }, {
          label: (0, _core.t)('Percent Change'),
          value: 'point_percent',
          description: (0, _core.t)('Metric percent change in value from `since` to `until`')
        }, {
          label: (0, _core.t)('Factor'),
          value: 'point_factor',
          description: (0, _core.t)('Metric factor change from `since` to `until`')
        }, {
          label: (0, _core.t)('Advanced Analytics'),
          value: 'adv_anal',
          description: (0, _core.t)('Use the Advanced Analytics options below')
        }],
        optionRenderer: op => /*#__PURE__*/_react.default.createElement(_OptionDescription.default, {
          option: op
        }),
        valueRenderer: op => /*#__PURE__*/_react.default.createElement(_OptionDescription.default, {
          option: op
        }),
        description: (0, _core.t)('Settings for time series')
      }
    }]]
  }, {
    label: (0, _core.t)('Chart Options'),
    expanded: true,
    tabOverride: 'customize',
    controlSetRows: [['color_scheme', 'label_colors'], [{
      name: 'number_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Number format'),
        renderTrigger: true,
        default: 'SMART_NUMBER',
        choices: _chartControls.D3_FORMAT_OPTIONS,
        description: _chartControls.D3_FORMAT_DOCS
      }
    }, {
      name: 'date_time_format',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Date Time Format'),
        renderTrigger: true,
        default: 'smart_date',
        choices: _chartControls.D3_TIME_FORMAT_OPTIONS,
        description: _chartControls.D3_FORMAT_DOCS
      }
    }], [{
      name: 'partition_limit',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Partition Limit'),
        isInt: true,
        default: '5',
        description: (0, _core.t)('The maximum number of subdivisions of each group; ' + 'lower values are pruned first')
      }
    }, {
      name: 'partition_threshold',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Partition Threshold'),
        isFloat: true,
        default: '0.05',
        description: (0, _core.t)('Partitions whose height to parent height proportions are ' + 'below this value are pruned')
      }
    }], [{
      name: 'log_scale',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Log Scale'),
        default: false,
        renderTrigger: true,
        description: (0, _core.t)('Use a log scale')
      }
    }], [{
      name: 'equal_date_size',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Equal Date Sizes'),
        default: true,
        renderTrigger: true,
        description: (0, _core.t)('Check to force date partitions to have the same height')
      }
    }], [{
      name: 'rich_tooltip',
      config: {
        type: 'CheckboxControl',
        label: (0, _core.t)('Rich Tooltip'),
        renderTrigger: true,
        default: true,
        description: (0, _core.t)('The rich tooltip shows a list of all series for that point in time')
      }
    }]]
  }, {
    label: (0, _core.t)('Advanced Analytics'),
    tabOverride: 'data',
    description: (0, _core.t)('This section contains options ' + 'that allow for advanced analytical post processing ' + 'of query results'),
    controlSetRows: [// eslint-disable-next-line react/jsx-key
    [/*#__PURE__*/_react.default.createElement("h1", {
      className: "section-header"
    }, (0, _core.t)('Rolling Window'))], [{
      name: 'rolling_type',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Rolling Function'),
        default: 'None',
        choices: (0, _chartControls.formatSelectOptions)(['None', 'mean', 'sum', 'std', 'cumsum']),
        description: (0, _core.t)('Defines a rolling window function to apply, works along ' + 'with the [Periods] text box')
      }
    }, {
      name: 'rolling_periods',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Periods'),
        isInt: true,
        description: (0, _core.t)('Defines the size of the rolling window function, ' + 'relative to the time granularity selected')
      }
    }, {
      name: 'min_periods',
      config: {
        type: 'TextControl',
        label: (0, _core.t)('Min Periods'),
        isInt: true,
        description: (0, _core.t)('The minimum number of rolling periods required to show ' + 'a value. For instance if you do a cumulative sum on 7 days ' + 'you may want your "Min Period" to be 7, so that all data points ' + 'shown are the total of 7 periods. This will hide the "ramp up" ' + 'taking place over the first 7 periods')
      }
    }], // eslint-disable-next-line react/jsx-key
    [/*#__PURE__*/_react.default.createElement("h1", {
      className: "section-header"
    }, (0, _core.t)('Time Comparison'))], [{
      name: 'time_compare',
      config: {
        type: 'SelectControl',
        multi: true,
        freeForm: true,
        label: (0, _core.t)('Time Shift'),
        choices: (0, _chartControls.formatSelectOptions)(['1 day', '1 week', '28 days', '30 days', '52 weeks', '1 year', '104 weeks', '2 years']),
        description: (0, _core.t)('Overlay one or more timeseries from a ' + 'relative time period. Expects relative time deltas ' + 'in natural language (example:  24 hours, 7 days, ' + '52 weeks, 365 days). Free text is supported.')
      }
    }, {
      name: 'comparison_type',
      config: {
        type: 'SelectControl',
        label: (0, _core.t)('Calculation type'),
        default: 'values',
        choices: [['values', 'Actual Values'], ['absolute', 'Absolute difference'], ['percentage', 'Percentage change'], ['ratio', 'Ratio']],
        description: (0, _core.t)('How to display time shifts: as individual lines; as the ' + 'absolute difference between the main time series and each time shift; ' + 'as the percentage change; or as the ratio between series and time shifts.')
      }
    }], // eslint-disable-next-line react/jsx-key
    [/*#__PURE__*/_react.default.createElement("h1", {
      className: "section-header"
    }, (0, _core.t)('Python Functions'))], // eslint-disable-next-line react/jsx-key
    [/*#__PURE__*/_react.default.createElement("h2", {
      className: "section-header"
    }, "pandas.resample")], [{
      name: 'resample_rule',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Rule'),
        default: null,
        choices: (0, _chartControls.formatSelectOptions)(['1T', '1H', '1D', '7D', '1M', '1AS']),
        description: (0, _core.t)('Pandas resample rule')
      }
    }, {
      name: 'resample_method',
      config: {
        type: 'SelectControl',
        freeForm: true,
        label: (0, _core.t)('Method'),
        default: null,
        choices: (0, _chartControls.formatSelectOptions)(['asfreq', 'bfill', 'ffill', 'median', 'mean', 'sum']),
        description: (0, _core.t)('Pandas resample method')
      }
    }]]
  }]
};
exports.default = _default;