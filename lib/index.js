"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bg = void 0;
const canvas_1 = require("canvas");
const bg = (img, ctx, x, y) => __awaiter(void 0, void 0, void 0, function* () {
    if (!img)
        throw new Error('Image has not been provided!!');
    if (!ctx)
        throw new Error('Ctx has not been provided!!');
    const bgImg = yield (0, canvas_1.loadImage)(img);
    ctx.drawImage(bgImg, x, y);
});
exports.bg = bg;
