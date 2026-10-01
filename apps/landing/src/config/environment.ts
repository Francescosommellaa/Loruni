const environment = process.env.SITE_ENV || 'development';
if (!['development', 'preview', 'production'].includes(environment)) {
  throw new Error('SITE_ENV must be development, preview or production.');
}
// Explicit deployment intent; a local production build is still non-indexable.
export const isPublicProduction = environment === 'production';
export const searchVerification = {
  google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
  bing: process.env.BING_SITE_VERIFICATION || undefined,
};
