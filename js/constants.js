/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */

export default {
  // default context output filename under ./contexts/
  CONTEXT_FILENAME: 'vdl-aamva-v1.jsonld',
  // default context well known URL id
  CONTEXT_URL: 'https://w3id.org/vdl/aamva/v1',
  // default context CBOR-LD codec id
  // value between 0x0 and 0x7FFF for globally registered term codec values
  // or >= 0x8000 for app-specific local terms
  CBORLD_VALUE: 0x0
};
