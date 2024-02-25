"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var mPatients_1 = require("../../entity/mPatients");
var routing_controllers_1 = require("routing-controllers");
var PaginationInfo_1 = require("../../decorators/PaginationInfo");
var CrudServices_1 = require("../../services/CrudServices");
var CurrentUser_1 = require("../../decorators/CurrentUser");
var MPatientsController = /** @class */ (function () {
    function MPatientsController() {
        this.crudServices = new CrudServices_1.CrudServices();
        this.crudServices.setEntity(mPatients_1.mpatient);
    }
    MPatientsController.prototype.getmPatientById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.fetchById(id)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res || {}];
                }
            });
        });
    };
    MPatientsController.prototype.getmPatients = function (paginationInfo, search) {
        return __awaiter(this, void 0, void 0, function () {
            var query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        query = {
                            search: search,
                            perPage: paginationInfo.perPage,
                            page: paginationInfo.pageNo
                        };
                        return [4 /*yield*/, this.crudServices.fetchPages(query)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MPatientsController.prototype.createNewmPatients = function (mPatient, userid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.create(userid, mPatients_1.mpatient)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MPatientsController.prototype.updatemPatient = function (id, data, userid) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.updateById(userid, { id: id }, data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    MPatientsController.prototype.deletemPatient = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.crudServices.deleteById(id)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    __decorate([
        routing_controllers_1.Get("/:id"),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], MPatientsController.prototype, "getmPatientById", null);
    __decorate([
        routing_controllers_1.Get(),
        __param(0, PaginationInfo_1.PaginationInfo()),
        __param(1, routing_controllers_1.QueryParam("q")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, String]),
        __metadata("design:returntype", Promise)
    ], MPatientsController.prototype, "getmPatients", null);
    __decorate([
        routing_controllers_1.Post(),
        __param(0, routing_controllers_1.Body()),
        __param(1, CurrentUser_1.CurrentUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [mPatients_1.mpatient, String]),
        __metadata("design:returntype", Promise)
    ], MPatientsController.prototype, "createNewmPatients", null);
    __decorate([
        routing_controllers_1.Put("/:id"),
        __param(0, routing_controllers_1.Param("id")),
        __param(1, routing_controllers_1.Body()),
        __param(2, CurrentUser_1.CurrentUser()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, mPatients_1.mpatient, String]),
        __metadata("design:returntype", Promise)
    ], MPatientsController.prototype, "updatemPatient", null);
    __decorate([
        routing_controllers_1.Delete("/:id"),
        __param(0, routing_controllers_1.Param("id")),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String]),
        __metadata("design:returntype", Promise)
    ], MPatientsController.prototype, "deletemPatient", null);
    MPatientsController = __decorate([
        routing_controllers_1.JsonController("/mpatients")
        /*@Authorized()*/
        ,
        __metadata("design:paramtypes", [])
    ], MPatientsController);
    return MPatientsController;
}());
exports.MPatientsController = MPatientsController;
//# sourceMappingURL=MPatientsController.js.map