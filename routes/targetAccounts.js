import express from 'express';

import * as TargetAccounts from '../controllers';
const Router = express.Router();

Router.route('/add').post(async (req, res) => {
  try {
    const createRes = await TargetAccounts.Create(req);
    res.status(200).send({ createRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/all', async (req, res) => {
  try {
    const getRes = await TargetAccounts.GetAll(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/:id', async (req, res) => {
  try {
    const getRes = await TargetAccounts.Get(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.put('/update/:id', async (req, res) => {
  try {
    const updateRes = await TargetAccounts.Update(req);
    res.status(200).send(updateRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.delete('/:id', async (req, res) => {
  try {
    const delRes = await TargetAccounts.Delete(req);
    res.status(200).send({ delRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default Router;
