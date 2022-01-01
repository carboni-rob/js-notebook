"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serve = void 0;
const serve = (port, file, dir) => {
    console.log(`Serving ${file} on port ${port}`);
    console.log(`Serving ${dir} on port ${port}`);
};
exports.serve = serve;
