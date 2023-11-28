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
import { t, validateNonEmpty } from '@superset-ui/core';
import { FeatureFlag, isFeatureEnabled} from '@superset-ui/core';
import {
  columnChoices,
  ControlPanelState,
  sharedControls,
} from '@superset-ui/chart-controls';

import {
  ControlPanelConfig,
  D3_FORMAT_OPTIONS,
  D3_FORMAT_DOCS,
  sections,
  getStandardizedControls,
} from '@superset-ui/chart-controls';
import { countryOptions } from './countries';


function filterNumericColumns(columns) {
  console.log("??? filter is ", columns.filter(column => column.type=="NUMBER"));
  return columns.filter(column => column.type=="NUMBER");
}



// choices: columnChoices(state.datasource)

const allColumns = {
  type: 'SelectControl',
  default: null,
  mapStateToProps: (state: ControlPanelState) => ({
    choices: columnChoices(state.datasource).filter(column => {
       return column.type === 'INTEGER' || column.type === 'FLOAT' || column.type === 'DOUBLE'; // Add more numeric types if needed
    }),
  }),
};
const columnsConfig = isFeatureEnabled(FeatureFlag.ENABLE_EXPLORE_DRAG_AND_DROP)
  ? sharedControls.entity
  : allColumns;


const config: ControlPanelConfig = {
  controlPanelSections: [
    sections.legacyRegularTime,
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'select_country',
            config: {
              type: 'SelectControl',
              label: t('Country'),
              default: null,
              choices: countryOptions,
              description: t('Which country to plot the map for?'),
              validators: [validateNonEmpty],
            },
          },
        ],
        [
          {
            name: 'select_year',
            config: {
              ...columnsConfig,
              label: t('Choose Year'),
              description: t('What year?'),
              validators: [validateNonEmpty],
            },
          },
        ],
        ['metric'],
        ['secondary_metric'],
      ],
    },
  ],
  controlOverrides: {
    metric: {
      label: t('Metric Year'),
      mapStateToProps: state => {
        const { datasource } = state;
        console.log('!!! controlpanel metric year datasource', datasource);
        return {
          columns: datasource ? datasource.columns : [],
          savedMetrics: datasource ? datasource.metrics : [],
          datasource,
        };
      },
      description: t('Display Metric Year Data'),
    },

    secondary_metric: {
      label: t('Metric ISO Codes'),
      mapStateToProps: state => {
        const { datasource } = state;
        console.log('!!! controlpanel secondary metric datasource', datasource);
        return {
          columns: datasource ? datasource.columns : [],
          savedMetrics: datasource ? datasource.metrics : [],
          datasource,
        };
      },
      description: t('Display Metric DEPT_ID'),
    },



  },

  formDataOverrides: formData => ({
    ...formData,
    metric: getStandardizedControls().shiftMetric(),
    secondary_metric: getStandardizedControls().shiftMetric(),
  }),
};

export default config;
