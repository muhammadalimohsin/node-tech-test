import express from 'express';
// import path from 'path';
import passport from 'passport';

import app from '../config/express';
// import UsersRouter from './users';
import TargetAccountsRouter from './targetAccounts';
import UserEmailsRouter from './userEmails';
import SuppliersRouter from './suppliers';
import SupplierSettingsRouter from './supplierSettings';
import AddressesRouter from './addresses';
import CreditCardsRouter from './creditCards';

app.use(passport.initialize());
// app.use('/api/v1', passport.authenticate('jwt', { session: false }), UsersRouter);
app.use('/api/v1/target-account', passport.authenticate('jwt', { session: false }), TargetAccountsRouter);
app.use('/api/v1/user-email', passport.authenticate('jwt', { session: false }), UserEmailsRouter);
app.use('/api/v1/supplier', passport.authenticate('jwt', { session: false }), SuppliersRouter);
app.use('/api/v1/supplier-setting', passport.authenticate('jwt', { session: false }), SupplierSettingsRouter);
app.use('/api/v1/address', passport.authenticate('jwt', { session: false }), AddressesRouter);
app.use('/api/v1/credit-card', passport.authenticate('jwt', { session: false }), CreditCardsRouter);
// app.use('/api/v1/stripe', StripeRouter);

// const distPath = path.join(__dirname, '../../dist/client');
// app.use(express.static(distPath));
// app.get('*', (_, res) => res.sendFile(path.join(distPath, 'index.html')));

// export default UsersRouter;
