import express from 'express';

import * as UserEmails from '../controllers/UserEmails';
const Router = express.Router();

Router.route('/add').post(async (req, res) => {
  const createRes = await UserEmails.Create(req);

  res.status(200).send({ createRes });
});

Router.get('/all', async (req, res) => {
    try {
        // res.send('getting all posts');
  const getRes = await UserEmails.GetAll(req);

  res.status(200).send({ getRes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

Router.get('/:id', async (req, res) => {
    try {
        // res.send('getting single post');
        const getRes = await UserEmails.Get(req);

        res.status(200).send({ getRes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

Router.put('/update/:id', async (req, res) => {
    try {
        const updateRes = await UserEmails.Update(req);
        res.status(200).send(updateRes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

Router.delete('/:id', async (req, res) => {
    try {
        // res.send('deleting post');
        const delRes = await UserEmails.Delete(req);

        res.status(200).send({ delRes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default Router;
