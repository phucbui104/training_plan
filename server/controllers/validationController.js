import Joi from 'joi';

export const payloadValidation = Joi.object({ // eslint-disable-line
  task: Joi.string().min(5).required(),
});
