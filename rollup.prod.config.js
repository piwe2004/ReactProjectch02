import rollupCommonCinfig from './rollup.common.config';

const config = {...rollupCommonCinfig}

config.plugins=[
    ...config.plugins,
    terser(),
]

export default config;