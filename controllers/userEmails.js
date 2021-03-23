import DB from '../database';

export const Create = async (req) => {
  const { userId, email } = req.body;
  console.log({ userId, email });

  const res = await DB.userEmails.create({ userId, email });
  return res;
}

export const Update = async (req) => {
  const { userId, email } = req.body;
  console.log({ userId, email });
  const { id } = req.params;
  console.log({ id });

  await DB.userEmails.update({ userId, email }, {
    where: {
      id
    }
  })
  const res = await DB.userEmails.findOne({ where: { id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  console.log({ id });

  const res = await DB.userEmails.findOne({ where: { id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.userEmails.findAll();
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  console.log({ id });

  const res = await DB.userEmails.destroy({ where: { id } });
  return res;
}
