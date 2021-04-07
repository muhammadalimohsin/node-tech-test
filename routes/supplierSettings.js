import express from 'express';

import { SupplierSettings  } from '../controllers';
const Router = express.Router();

Router.route('/add').post(async (req, res) => {
  try {
    const createRes = await SupplierSettings.Create(req);
    res.status(200).send({ createRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/all', async (req, res) => {
  try {
    const getRes = await SupplierSettings.GetAll(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.get('/:id', async (req, res) => {
  try {
    const getRes = await SupplierSettings.Get(req);
    res.status(200).send({ getRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.put('/update/:id', async (req, res) => {
  try {
    const updateRes = await SupplierSettings.Update(req);
    res.status(200).send(updateRes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

Router.delete('/:id', async (req, res) => {
  try {
    const delRes = await SupplierSettings.Delete(req);
    res.status(200).send({ delRes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default Router;
