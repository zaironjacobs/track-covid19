/** @type {import('next').NextConfig} */
const nextTranslate = require('next-translate')

module.exports = nextTranslate({
    reactStrictMode: true,

    swcMinify: true,

    // Runtime config
    publicRuntimeConfig: {},

    // ESLint
    eslint: {
        dirs: ['src'],
    },
})
