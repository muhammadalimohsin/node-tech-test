import DB from '../database';

export const Create = async (req) => {
  const res = await DB.users.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  await DB.users.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.users.findOne({ where: { id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  const res = await DB.users.findOne({ where: { id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.users.findAll();
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  const res = await DB.users.destroy({ where: { id } });
  return res;
}
