"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var CrudServices_1 = require("./CrudServices");
var Receiving_1 = require("../entity/Receiving");
var Stock_1 = require("../entity/Stock");
var ReceivingServices = /** @class */ (function () {
    function ReceivingServices() {
        this.crudServices = new CrudServices_1.CrudServices();
        this.crudServices.setEntity(Receiving_1.Receiving);
    }
    ReceivingServices.prototype.create = function (userId, receiving) {
        return __awaiter(this, void 0, void 0, function () {
            var connection, queryRunner, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        connection = typeorm_1.getConnection();
                        queryRunner = connection.createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        // New transaction:
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        // New transaction:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, , 9]);
                        return [4 /*yield*/, queryRunner.manager.insert(Receiving_1.Receiving, receiving)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.increment(Stock_1.Stock, { id: receiving.product.id }, "count", receiving.qty)];
                    case 5:
                        _a.sent();
                        // commit transaction.
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        // commit transaction.
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 7:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 8:
                        _a.sent();
                        throw error_1;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ReceivingServices.prototype.fetchPages = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.fetchPages(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReceivingServices.prototype.fetchById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.fetchById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReceivingServices.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.deleteById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ReceivingServices.prototype.updateById = function (userId, where, data) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.updateById(userId, where, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ReceivingServices;
}());
exports.ReceivingServices = ReceivingServices;
//# sourceMappingURL=ReceivingServices.js.map