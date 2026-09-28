import type { NextConfig } from "next";
import { isProduction } from "./src/config/environment";

const nextConfig: NextConfig = {
  async headers() {
    return isProduction ? [] : [{
      source: "/:path*",
      headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
    }];
  },
};

export default nextConfig;
