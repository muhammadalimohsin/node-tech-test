import DB from '../database';

export const Create = async (req) => {
  const res = await DB.userEmails.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  await DB.userEmails.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.userEmails.findOne({ where: { id, userId: req.user.id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  console.log({ ID: req.user.id });

  const res = await DB.userEmails.findOne({ where: { id, userId: req.user.id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.userEmails.findAll({ where: { userId: req.user.id } });
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  const res = await DB.userEmails.destroy({ where: { id } });
  return res;
}
