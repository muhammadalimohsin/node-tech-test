import DB from '../database';

export const Create = async (req) => {
  const res = await DB.supplierSettings.create({ ...req.body });
  return res;
}

export const Update = async (req) => {
  const { id } = req.params;
  await DB.supplierSettings.update({ ...req.body }, {
    where: {
      id
    }
  })
  const res = await DB.supplierSettings.findOne({
    where: { id, userId: req.user.id },
    include: [
      { model: DB.users },
      { model: DB.suppliers }
    ]
  });
  return { data: res, success: true };
}

export const Get = async (req) => {
  const { id } = req.params;
  const res = await DB.supplierSettings.findOne({
    where: { id, userId: req.user.id },
    include: [
      { model: DB.users },
      { model: DB.suppliers }
    ]
  });
  return res;
}

export const GetAll = async (req) => {
  const res = await DB.supplierSettings.findAll({
    where: { userId: req.user.id },
    include: [
      { model: DB.users },
      { model: DB.suppliers }
    ]
  });
  return res;
}

export const Delete = async (req) => {
  const { id } = req.params;
  const res = await DB.supplierSettings.destroy({ where: { id } });
  return res;
}
