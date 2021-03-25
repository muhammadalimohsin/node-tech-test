import DB from '../database';

export const Create = async (req) => {
  const res = await DB.creditCards.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  console.log({ id });

  await DB.creditCards.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.creditCards.findOne({ where: { id } });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  console.log({ id });

  const res = await DB.creditCards.findOne({ where: { id } });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.creditCards.findAll();
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  console.log({ id });

  const res = await DB.creditCards.destroy({ where: { id } });
  return res;
}
