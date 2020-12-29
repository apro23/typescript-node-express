"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const database_1 = __importDefault(require("./database"));
require('dotenv').config();
const start = () => {
    const expressLoader = new express_1.default();
    database_1.default();
    expressLoader.listen();
};
start();
//# sourceMappingURL=server.js.map