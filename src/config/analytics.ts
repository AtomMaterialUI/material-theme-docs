// GA4 is opt-in twice: the measurement ID must be provided AND this must be a production build.
// Set PUBLIC_GA_MEASUREMENT_ID (a `G-…` ID) in Netlify's environment variables.
const id = import.meta.env.PUBLIC_GA_MEASUREMENT_ID;

export const gaMeasurementId: string | undefined =
  import.meta.env.PROD && typeof id === 'string' && /^G-[A-Z0-9]+$/.test(id) ? id : undefined;
