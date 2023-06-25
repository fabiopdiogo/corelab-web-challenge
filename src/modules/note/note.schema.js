import Joi from "joi";

export const noteSchema = Joi.object({
  todo: Joi.string().required().min(1).message('A tarefa não pode ser vazia')
})
