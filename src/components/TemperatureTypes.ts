export const CelciusKey = 'c';
export const FarenheitKey = 'f';

export type CelciusKeyType = typeof CelciusKey;
export type FarenheitKeyType = typeof FarenheitKey;

export type ScalesKeysType = CelciusKeyType | FarenheitKeyType;