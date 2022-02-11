const DEV = "dev" as const;
const STAGING = "staging" as const;
const TEST = "test" as const;
const PROD = "prod" as const;

export const ENV = { DEV, TEST, STAGING, PROD };

export type Environment =
  | typeof DEV
  | typeof STAGING
  | typeof TEST
  | typeof PROD;
