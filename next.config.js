/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	experimental: {
		nextScriptWorkers: true,
	},
	compiler: {
		styledComponents: true,
	},
};

module.exports = nextConfig;
