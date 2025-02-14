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
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertData(username, firstName, lastName, password) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.create({
            data: {
                email: username,
                firstName,
                lastName,
                password
            },
            select: {
                id: true,
                email: true,
                password: true
            }
        });
        console.log(res);
    });
}
// insertData("chaitanyareigns98@gmail.com", "Chaitanya", "Harshan", "starmanin400orbit");
// insertData("elonmusk@spacex.mars", "Elon", "Musk", "ridingteslaonmarsbaby");
insertData("likhitkalla@gmail.com", "likhit", "sai eswar", "ilovepanner");
function updateData(username_1, _a) {
    return __awaiter(this, arguments, void 0, function* (username, { firstName, lastName }) {
        const res = yield prisma.user.update({
            where: { email: username },
            data: { firstName, lastName },
        });
        console.log(res);
    });
}
updateData("elonmusk@spacex.mars", { firstName: "XÆA12", lastName: "Elon baby eat a mars rock" });
