/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0; you may not use this file except in compliance with the Elastic License
 * 2.0.
 */

import { getRandomString, getRandomNumber } from '@kbn/test-jest-helpers';

export const getSnapshot = ({
  repository = 'my-repo',
  snapshot = getRandomString(),
  uuid = getRandomString(),
  state = 'SUCCESS',
  indexFailures = [],
  totalIndices = getRandomNumber(),
  totalDataStreams = getRandomNumber(),
}: Partial<{
  repository: string;
  snapshot: string;
  uuid: string;
  state: string;
  indexFailures: any[];
  totalIndices: number;
  totalDataStreams: number;
}> = {}) => ({
  repository,
  snapshot,
  uuid,
  versionId: 8000099,
  version: '8.0.0',
  indices: new Array(totalIndices).fill('').map(getRandomString),
  dataStreams: new Array(totalDataStreams).fill('').map(getRandomString),
  includeGlobalState: 1,
  state,
  startTime: '2019-05-23T06:25:15.896Z',
  startTimeInMillis: 1558592715896,
  endTime: '2019-05-23T06:25:16.603Z',
  endTimeInMillis: 1558592716603,
  durationInMillis: 707,
  indexFailures,
  shards: { total: 3, failed: 0, successful: 3 },
});

export const getIndexFailure = (index = getRandomString()) => ({
  index,
  failures: new Array(getRandomNumber({ min: 1, max: 5 })).fill('').map(() => ({
    status: 400,
    reason: getRandomString(),
    shard_id: getRandomString(),
  })),
});
