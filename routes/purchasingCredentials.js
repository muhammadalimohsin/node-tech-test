import express from 'express';

import { UserEmails } from '../database';

// import {
//   GetUserMwsCredentials
// } from '../controllers/users';
// import { InventoryReadGrant } from '../controllers/grants';
// import Users from '../models/users';

const Router = express.Router();

Router.route('/add').post(async (req, res) => {
  const { userId, email } = req.body;
  console.log({ userId, email });

  const emails = await UserEmails.create({ userId, email });

  console.log({ emails });

  res.status(200).send({ emails });
  // SaveErrorDetails({ jobId, productId, error, image, insertTime })
  //   .then((insertResponse) => {
  //     res.send({ status: 200, insertResponse });
  //   }).catch((err) => {
  //     console.error({err});
  //     res.send({ status: 500, error: true, reason: err });
  //   });
});


// Create blog post
Router.post('/', async (req, res) => {
    try {
        res.send('creating post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get all blog posts
Router.get('/', async (req, res) => {
    try {
        res.send('getting all posts');

        // const data = await Accounts.findAll({
        //   attributes: ["id", "email", "forwarder_email", "credentials_count"],
        //   include: [{ model: sequelize.models.users, attributes: ["email"] }]
        // });

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get post by id
Router.get('/:id', async (req, res) => {
    try {
        res.send('getting single post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Update blog post
Router.patch('/:id', async (req, res) => {
    try {
        res.send('updating post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Delete a blog post
Router.delete('/:id', async (req, res) => {
    try {
        res.send('deleting post');
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default Router;
