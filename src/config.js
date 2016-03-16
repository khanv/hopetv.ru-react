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
        title: 'Donate.Hope.UA',
        head: {
            title: 'Donate.Hope.UA',
            meta: [
                { charset: 'utf-8' },
                { property: 'og:site_name', content: 'Donate.Hope.UA' },
                { property: 'og:image', content: 'https://donate.hope.ua/favicon-152.png' },
                { property: 'og:locale', content: 'ru_RU' },
                { property: 'twitter:card', content: 'summary' },
                { property: 'twitter:site', content: '@ua_hope' },
                { property: 'twitter:image', content: 'https://donate.hope.ua/favicon-152.png' },
                { property: 'twitter:image:width', content: '152' },
                { property: 'twitter:image:height', content: '152' },
                {
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'
                },
                { name: 'format-detection', content: 'telephone=no' }
            ]
        }
    }
}, environment);
