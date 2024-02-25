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
var persistence_1 = require("../persistence");
var User_1 = require("../entity/User");
var typeorm_1 = require("typeorm");
var ProductType_1 = require("../entity/ProductType");
var Product_1 = require("../entity/Product");
var Customer_1 = require("../entity/Customer");
var ADMIN_USER_ID = "admin";
var Seed = /** @class */ (function () {
    function Seed() {
    }
    Seed.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, persistence_1.openConnection()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, Seed.addUsers()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, Seed.addProductTypes()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, Seed.addProducts()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, Seed.addCustomer()];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seed.addCustomer = function () {
        return __awaiter(this, void 0, void 0, function () {
            var customer;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        customer = new Customer_1.Customer();
                        customer.id = "shan";
                        customer.name = "shan sfk";
                        customer.address = "my address";
                        customer.description = "test customer";
                        customer.email = "mail@mail.com";
                        customer.mobile = "1234567899";
                        customer.createdBy = "admin";
                        customer.updatedBy = "admin";
                        return [4 /*yield*/, typeorm_1.getManager().insert(Customer_1.Customer, customer)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seed.addProducts = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pen, pencil, notebook;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        pen = new Product_1.Product();
                        pen.id = "pen";
                        pen.name = "pen";
                        pen.description = "awesome pen";
                        pen.costPrice = 10;
                        pen.sellingPrice = 20;
                        pen.productTypeId = "stat";
                        pen.createdBy = ADMIN_USER_ID;
                        pen.updatedBy = ADMIN_USER_ID;
                        return [4 /*yield*/, typeorm_1.getManager().insert(Product_1.Product, pen)];
                    case 1:
                        _a.sent();
                        pencil = new Product_1.Product();
                        pencil.id = "pencil";
                        pencil.description = "awesome pencil";
                        pencil.name = "apsara pencil";
                        pencil.costPrice = 5;
                        pencil.sellingPrice = 10;
                        pencil.productTypeId = "stat";
                        pencil.createdBy = ADMIN_USER_ID;
                        pencil.updatedBy = ADMIN_USER_ID;
                        return [4 /*yield*/, typeorm_1.getManager().insert(Product_1.Product, pencil)];
                    case 2:
                        _a.sent();
                        notebook = new Product_1.Product();
                        notebook.id = "notebook";
                        notebook.description = "awesome notebook";
                        notebook.name = "papermate notebook";
                        notebook.costPrice = 50;
                        notebook.sellingPrice = 70;
                        notebook.productTypeId = "stat";
                        notebook.createdBy = ADMIN_USER_ID;
                        notebook.updatedBy = ADMIN_USER_ID;
                        return [4 /*yield*/, typeorm_1.getManager().insert(Product_1.Product, notebook)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seed.addProductTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            var stat;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        stat = new ProductType_1.ProductType();
                        stat.id = "stat";
                        stat.description = "stationary items";
                        stat.createdBy = ADMIN_USER_ID;
                        stat.updatedBy = ADMIN_USER_ID;
                        return [4 /*yield*/, typeorm_1.getManager().insert(ProductType_1.ProductType, stat)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Seed.addUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var admin;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        admin = new User_1.User();
                        admin.id = ADMIN_USER_ID;
                        admin.name = ADMIN_USER_ID;
                        admin.password = ADMIN_USER_ID;
                        admin.role = User_1.Role.Admin;
                        return [4 /*yield*/, typeorm_1.getManager().insert(User_1.User, admin)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Seed;
}());
exports.Seed = Seed;
//# sourceMappingURL=Seed.js.map