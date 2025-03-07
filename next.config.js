/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",  // ✅ Enables static exports (replacement for next export)
    compiler: {
      styledComponents: true, // ✅ Enables styled-components support (optional)
    },
  };
  
  module.exports = nextConfig;
  