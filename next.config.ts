import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
     images: {
    domains: ['fakestoreapi.com'], // <== BURADA HOSTNAME əlavə olunur
  },
};
const withNextIntl=createNextIntlPlugin()
export default withNextIntl(nextConfig);
