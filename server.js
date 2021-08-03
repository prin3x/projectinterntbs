const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('./i18n');

const port = process.env.PORT || 3000;
const app = next({ dev: process.env.NODE_ENV !== 'production' });

const handle = app.getRequestHandler();

(async () => {
    await app.prepare();
    const server = express();

    server.use((req, res, next) => {
        const hasTrailingSlash = /\/$/.test(req.path);
        if (req.path.length > 1 && hasTrailingSlash) {
            const query = req.url.slice(req.path.length);
            res.redirect(301, req.path.slice(0, -1) + query);
        } else {
            next();
        }
    });

    await nextI18next.initPromise;
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(nextI18NextMiddleware(nextI18next));

    server.get('*', (req, res) => handle(req, res));
    server.post('/payment/callback', (req, res) => {
        if (req.body.payment_status === '000')
            res.redirect('/payment/thankyou');
        else res.redirect('/payment/cancel');
    });

    await server.listen(port);
    console.log(`> Ready on http://localhost:${port}`); // eslint-disable-line no-console
})();
