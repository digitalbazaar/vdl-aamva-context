/*!
 * Copyright (c) 2023 Digital Bazaar, Inc. All rights reserved.
 */
// Use JSON style for context
/* eslint quotes: ['error', 'double'] */
/* eslint quote-props: ['error', 'always'] */
/* eslint-disable max-len */

export default
{
  "@context": {
    "@protected": true,
    "aamva_aka_family_name_v2": "https://w3id.org/vdl/aamva#akaFamilyNameV2",
    "aamva_aka_given_name_v2": "https://w3id.org/vdl/aamva#akaGivenNameV2",
    "aamva_aka_suffix": "https://w3id.org/vdl/aamva#akaSuffix",
    "aamva_cdl_indicator": {
      "@id": "https://w3id.org/vdl/aamva#cdlIndicator",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_dhs_compliance": "https://w3id.org/vdl/aamva#dhsCompliance",
    "aamva_dhs_compliance_text": "https://w3id.org/vdl/aamva#dhsCompliance_text",
    "aamva_dhs_temporary_lawful_status": {
      "@id": "https://w3id.org/vdl/aamva#dhsTemporaryLawfulStatus",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_domestic_driving_privileges": {
      "@id": "https://w3id.org/vdl/aamva#domesticDrivingPrivileges",
      "@type": "@json"
    },
    "aamva_edl_credential": {
      "@id": "https://w3id.org/vdl/aamva#edlCredential",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_family_name_truncation":
      "https://w3id.org/vdl/aamva#familyNameTruncation",
    "aamva_given_name_truncation":
      "https://w3id.org/vdl/aamva#givenNameTruncation",
    "aamva_hazmat_endorsement_expiration_date": {
      "@id": "https://w3id.org/vdl/aamva#hazmatEndorsementExpirationDate",
      "@type": "http://www.w3.org/2001/XMLSchema#dateTime"
    },
    "aamva_name_suffix": "https://w3id.org/vdl/aamva#nameSuffix",
    "aamva_organ_donor": {
      "@id": "https://w3id.org/vdl/aamva#organDonor",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_race_ethnicity": "https://w3id.org/vdl/aamva#raceEthnicity",
    "aamva_resident_county": "https://w3id.org/vdl/aamva#residentCounty",
    "aamva_sex": {
      "@id": "https://w3id.org/vdl/aamva#sex",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_veteran": {
      "@id": "https://w3id.org/vdl/aamva#veteran",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    },
    "aamva_weight_range": {
      "@id": "https://w3id.org/vdl/aamva#weightRange",
      "@type": "http://www.w3.org/2001/XMLSchema#unsignedInt"
    }
  }
};
