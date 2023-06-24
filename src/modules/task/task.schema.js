import Joi from "joi";

export const taskSchema = Joi.object({
  todo: Joi.string().required().min(1).message('A tarefa não pode ser vazia')
})
