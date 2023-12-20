/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
import constants from './constants';
import context from './context.js';

// map of all context URLs to context data
export const contexts = new Map();
contexts.set(constants.CONTEXT_URL, context);

// map of all context URLs to CBOR-LD codec ids
export const appContextMap = new Map();
appContextMap.set(constants.CONTEXT_URL, constants.CBORLD_VALUE);

export const CONTEXT = context;
export const CONTEXT_URL = constants.CONTEXT_URL;
