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
import { ChartProps, supersetTheme } from '@superset-ui/core';
import transformProps from '../../src/plugin/transformProps';

describe('MapboxPlugin transformProps', () => {
  const formData = {
    selectCountry: 'Egypt',
    selectYear: 2007,
  };
  const chartProps = new ChartProps({
    formData,
    width: 800,
    height: 600,
    theme: supersetTheme,
    queriesData: [{
      data: [{ name: 'Name 1', number: 5, __timestamp: 599616000000 },
        { name: 'Name 2', number: 10, __timestamp: 599617000000 },
        { name: 'Name 3', number: 15, __timestamp: 599618000000 },
      ],
    }],
  });

  it('should transform chart props for viz', () => {
    expect(transformProps(chartProps)).toEqual({
      width: 800,
      height: 600,
      data: [{ name: 'Name 1', number: 5, __timestamp: 599616000000 },
        { name: 'Name 2', number: 10, __timestamp: 599617000000 },
        { name: 'Name 3', number: 15, __timestamp: 599618000000 },
      ],
      country: 'Egypt',
      year: 2007,
    });
  });
});
