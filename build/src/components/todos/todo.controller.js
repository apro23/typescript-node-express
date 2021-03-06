"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const todo_service_1 = __importDefault(require("./todo.service"));
const todo_validator_1 = __importDefault(require("./todo.validator"));
const joiValidator_utils_1 = __importDefault(require("../../utils/joiValidator.utils"));
exports.default = {
    createTodo: async (req, res, next) => {
        try {
            const todoService = new todo_service_1.default();
            const { error, value: validatedRequestBody } = joiValidator_utils_1.default(req.body, todo_validator_1.default.createTodo);
            if (error)
                res.status(500).send(error.details);
            const todoInfo = validatedRequestBody;
            const result = await todoService.createTodo(todoInfo);
            return res.json(result);
        }
        catch (err) {
            console.log('CREATE TODO: ', err.message);
            next(err);
        }
    },
    getAllTodo: async (req, res, next) => {
        try {
            const todoService = new todo_service_1.default();
            const result = await todoService.getAllTodo();
            return res.json(result);
        }
        catch (err) {
            console.log('GET ALL TODO: ', err.message);
            next(err);
        }
    },
    updateTaskCompleted: async (req, res, next) => {
        try {
            const todoService = new todo_service_1.default();
            const result = await todoService.updateTaskCompleted(req.params.id);
            return res.json(result);
        }
        catch (err) {
            console.log('TASK COMPLETED:', err.message);
            next(err);
        }
    }
};
//# sourceMappingURL=todo.controller.js.map