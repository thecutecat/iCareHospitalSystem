"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
var CrudServices = /** @class */ (function () {
    function CrudServices() {
    }
    CrudServices.prototype.setEntity = function (classType) {
        this.classType = classType;
        this.alias = this.classType.name.toLowerCase();
    };
    CrudServices.prototype.fetchAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager().find(this.classType)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudServices.prototype.fetchPages = function (query) {
        return __awaiter(this, void 0, void 0, function () {
            var recordsToSkip;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        recordsToSkip = (query.page - 1) * query.perPage;
                        if (!query.search) return [3 /*break*/, 2];
                        return [4 /*yield*/, typeorm_1.getManager()
                                .createQueryBuilder(this.classType, this.alias)
                                .where(this.alias + ".id like :id", { id: "%" + query.search + "%" })
                                .skip(recordsToSkip)
                                .take(query.perPage)
                                .getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, typeorm_1.getManager()
                            .createQueryBuilder(this.classType, this.alias)
                            .skip(recordsToSkip)
                            .take(query.perPage)
                            .getMany()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudServices.prototype.fetchById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, typeorm_1.getManager()
                            .createQueryBuilder(this.classType, this.alias)
                            .where(this.alias + ".id = :id", { id: id })
                            .getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudServices.prototype.create = function (userId, entity) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        entity.createdBy = userId;
                        entity.updatedBy = userId;
                        return [4 /*yield*/, typeorm_1.getManager().insert(this.classType, entity)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CrudServices.prototype.updateById = function (userId, where, data) {
        if (userId === void 0) { userId = "admin"; }
        return __awaiter(this, void 0, void 0, function () {
            var error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        data.updatedBy = userId;
                        data.id = where.id;
                        return [4 /*yield*/, typeorm_1.getManager().update(this.classType, __assign({}, where), data)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_1 = _a.sent();
                        if (error_1.code === "SQLITE_CONSTRAINT" && error_1.errno === 19) {
                            throw {
                                code: "SQLITE_CONSTRAINT",
                                message: "This record can't be updated since it has references with other parts of data. Please ensure that those are deleted and try this operation"
                            };
                        }
                        throw error_1;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CrudServices.prototype.deleteById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, typeorm_1.getManager().delete(this.classType, id)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        error_2 = _a.sent();
                        if (error_2.code === "SQLITE_CONSTRAINT" && error_2.errno === 19) {
                            throw {
                                code: "SQLITE_CONSTRAINT",
                                message: "This record can't be deleted since it has references with other parts of data. Please ensure that those are deleted and try this operation"
                            };
                        }
                        throw error_2;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return CrudServices;
}());
exports.CrudServices = CrudServices;
//# sourceMappingURL=CrudServices.js.map