import express from 'express';
// import path from 'path';
import passport from 'passport';

import app from '../config/express';
import UsersRouter from './users';
import PurchasingCredentialsRouter from './purchasingCredentials';

app.use(passport.initialize());
app.use('/api/v1', passport.authenticate('jwt', { session: false }), UsersRouter);
app.use('/api/v1/purchasing-credentials', passport.authenticate('jwt', { session: false }), PurchasingCredentialsRouter);
// app.use('/api/v1/stripe', StripeRouter);

// const distPath = path.join(__dirname, '../../dist/client');
// app.use(express.static(distPath));
// app.get('*', (_, res) => res.sendFile(path.join(distPath, 'index.html')));

export default UsersRouter;
