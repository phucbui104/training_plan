import Boom from 'boom';
import Database from '../models/todoModel';

export const getAllTasks = async (request, reply) => {
  try {
    const allTasks = await Database.find({});
    reply(allTasks);
  } catch (err) {
    reply(Boom.notFound(`Error: ${err}`));
  }
};

export const getTask = async (request, reply) => {
  try {
    const task = await Database.findById({ _id: request.params.id });
    reply(task);
  } catch (err) {
    reply(Boom.badRequest(`Error: ${err}`));
  }
};

export const createNewTask = async (request, reply) => {
  try {
    const { task } = request.payload;
    const createTask = await Database.create({ task });
    reply(createTask);
  } catch (err) {
    reply(Boom.badRequest(`Error: ${err}`));
  }
};

export const deleteExistedTask = async (request, reply) => {
  try {
    await Database.findByIdAndRemove({ _id: request.params.id });
    reply('Task has been deleted');
  } catch (err) {
    reply(Boom.badRequest(`Error: ${err}`));
  }
};


export const updateTask = async (request, reply) => {
  try {
    const { task } = request.payload;
    const taskUpdate = await Database.findOneAndUpdate(
      { _id: request.params.id },
      { task },
      { new: true },
    );
    reply(taskUpdate);
  } catch (err) {
    reply(Boom.badRequest(`Error: ${err}`));
  }
};
