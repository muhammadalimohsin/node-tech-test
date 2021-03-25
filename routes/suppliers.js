import express from 'express';

import { Suppliers } from '../controllers';
const Router = express.Router();

Router.route('/add').post(async (req, res) => {
  try {
    const createRes = await Suppliers.Create(req);
    res.status(200).send({ createRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/all', async (req, res) => {
  try {
    const getRes = await Suppliers.GetAll(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/:id', async (req, res) => {
  try {
    const getRes = await Suppliers.Get(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.put('/update/:id', async (req, res) => {
  try {
    const updateRes = await Suppliers.Update(req);
    res.status(200).send(updateRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.delete('/:id', async (req, res) => {
  try {
    const delRes = await Suppliers.Delete(req);
    res.status(200).send({ delRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default Router;
