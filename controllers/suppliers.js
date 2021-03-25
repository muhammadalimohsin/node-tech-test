import DB from '../database';

export const Create = async (req) => {
  const res = await DB.suppliers.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  await DB.suppliers.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.suppliers.findOne({ where: { id, userId: req.user.id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  const res = await DB.suppliers.findOne({ where: { id, userId: req.user.id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.suppliers.findAll({ where: { userId: req.user.id } });
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  const res = await DB.suppliers.destroy({ where: { id } });
  return res;
}
