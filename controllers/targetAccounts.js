import DB from '../database';

export const Create = async (req) => {
  const res = await DB.targetAccounts.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  await DB.targetAccounts.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.targetAccounts.findOne({ where: { id, userId: req.user.id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  const res = await DB.targetAccounts.findOne({ where: { id, userId: req.user.id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.targetAccounts.findAll({ where: { userId: req.user.id } });
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  const res = await DB.targetAccounts.destroy({ where: { id } });
  return res;
}
