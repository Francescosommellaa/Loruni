// A local production build is not an explicit production deployment.
export const isProduction = process.env.VERCEL_ENV === "production";
