require('babel-polyfill');

const environment = {
    development: {
        isProduction: false
    },
    production: {
        isProduction: true
    }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
    host: process.env.HOST || 'localhost',
    port: process.env.PORT,
    app: {
        title: 'Телеканал «Надія»',
        head: {
            title: 'Телеканал «Надія»',
            meta: [
                { charset: 'utf-8' },
                { property: 'og:site_name', content: 'Телеканал «Надія»' },
                { property: 'og:locale', content: 'ru_RU' },
                { property: 'twitter:card', content: 'summary' },
                { property: 'twitter:site', content: '@ua_hope' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                },
                { name: 'format-detection', content: 'telephone=no' }
            ]
        }
    }
}, environment);
