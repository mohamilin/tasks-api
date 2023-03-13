const _ = require("lodash");
const ModelDatabase = require("../../database/models");
const Model = ModelDatabase.sequelize.models;

const getAll = async () => {
  return Model.tasks.findAll();
};

const create = async (payload) => {
  payload.slug = _.kebabCase(payload?.title);
  return Model.tasks.create(payload);
};

const getById = async (id) => {
  return Model.tasks.findOne({
    where: {
      id,
    },
  });
};

const update = async (data) => {
  const {id, payload} = data
  payload.slug = _.kebabCase(payload?.title);
  return Model.tasks.update(payload, {
    where: {
      id,
    },
  });
};


const deleteTask = async (id) => {
  return Model.tasks.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  getAll,
  create,
  getById,
  update,
  deleteTask
};
