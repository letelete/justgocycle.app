const init = <TOptional extends boolean | undefined = undefined>(
  envKey: string,
  optional?: TOptional
): TOptional extends true ? string | undefined : string => {
  const value = process.env[envKey];

  if (!optional && value === undefined) {
    throw new Error(`Non-optional variable "${envKey}" is missing value.`);
  }

  return value as string;
};

export const STRAVA_CLIENT_ID = init('STRAVA_CLIENT_ID');

export const STRAVA_CLIENT_SECRET = init('STRAVA_CLIENT_SECRET');

export const DEBUG_MODE = init('DEBUG_MODE', true) === 'true';
