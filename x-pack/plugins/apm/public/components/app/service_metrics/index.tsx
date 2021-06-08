/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { EuiFlexGrid, EuiFlexItem, EuiPanel, EuiSpacer } from '@elastic/eui';
import React from 'react';
import { ChartPointerEventContextProvider } from '../../../context/chart_pointer_event/chart_pointer_event_context';
import { useUrlParams } from '../../../context/url_params_context/use_url_params';
import { useServiceMetricChartsFetcher } from '../../../hooks/use_service_metric_charts_fetcher';
import { MetricsChart } from '../../shared/charts/metrics_chart';

export function ServiceMetrics() {
  const { urlParams } = useUrlParams();
  const { data, status } = useServiceMetricChartsFetcher({
    serviceNodeName: undefined,
  });
  const { start, end } = urlParams;

  return (
    <ChartPointerEventContextProvider>
      <EuiFlexGrid columns={2} gutterSize="s">
        {data.charts.map((chart) => (
          <EuiFlexItem key={chart.key}>
            <EuiPanel>
              <MetricsChart
                start={start}
                end={end}
                chart={chart}
                fetchStatus={status}
              />
            </EuiPanel>
          </EuiFlexItem>
        ))}
      </EuiFlexGrid>
      <EuiSpacer size="xxl" />
    </ChartPointerEventContextProvider>
  );
}
