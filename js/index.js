/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
'use strict';

const context = require('./context');
const constants = require('./constants');
const {CONTEXT_URL, CBORLD_VALUE} = constants;

// map of all context URLs to context data
const contexts = new Map();
contexts.set(CONTEXT_URL, context);

// map of all context URLs to CBOR-LD codec ids
const appContextMap = new Map();
appContextMap.set(CONTEXT_URL, CBORLD_VALUE);

module.exports = {
  CONTEXT: context,
  CONTEXT_URL,
  appContextMap,
  constants,
  contexts
};
