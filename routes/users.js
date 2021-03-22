import express from 'express';

// import {
//   GetUserMwsCredentials
// } from '../controllers/users';
// import { InventoryReadGrant } from '../controllers/grants';
// import Users from '../models/users';

const Router = express.Router();

// Router.route('/tested').get((req, res) => {
Router.route('/tested').get(async (req, res) => {
  console.log('in specific route');
  res.send('hy  !');

  // const userId = req.user._id;
  // GetUserMwsCredentials({
  //   userId
  // }).then((mws) => {
  //   res.send({
  //     status: true,
  //     mws
  //   });
  // }).catch((error) => {
  //   console.log('Error: ', error.message);
  //   res.send(error);
  // });
});

export default Router;
