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

    // Compiler
    compiler: {
        // see https://styled-components.com/docs/tooling#babel-plugin for more info on the options.
        styledComponents: {
            displayName: true,
        },
    },
})
